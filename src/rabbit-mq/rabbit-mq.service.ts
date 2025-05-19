import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  connect,
  AmqpConnectionManager,
  ChannelWrapper,
} from 'amqp-connection-manager';
import { ConsumeMessage } from 'amqplib';
import { configConstant } from 'src/common/constants/config.constant';
import { CreateEventDto } from './dto/create-event.dto';
import { ActivityLogService } from 'src/activity-log/activity-log.service';
import { EventType } from 'src/common/enums/index.enum';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  private readonly logger = new Logger(RabbitMQService.name);
  private connection: AmqpConnectionManager;
  private channel: ChannelWrapper;
  private readonly queueName: string;
  private readonly connectionUrl: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly activityLogService: ActivityLogService,
  ) {
    this.queueName = configConstant.amq.queue;
    this.connectionUrl = this.configService.get<string>(configConstant.amq.url);
  }

  async onModuleInit() {
    await this.connect();
    await this.listenToQueue();
  }

  private async connect() {
    this.logger.log(`Connecting to RabbitMQ at: ${this.connectionUrl}`);
    this.connection = connect([this.connectionUrl]);

    this.connection.on('connect', () =>
      this.logger.log(
        `Connected Successfully to RabbitMQ at: ${this.connectionUrl}`,
      ),
    );

    this.connection.on('disconnect', (err) =>
      this.logger.error('Disconnected from RabbitMQ', err),
    );

    this.channel = this.connection.createChannel({
      setup: async (channel) => {
        await channel.assertQueue(this.queueName, { durable: true });
      },
    });
  }

  private async listenToQueue() {
    let data: any;
    await this.channel
      .addSetup(async (channel) => {
        await channel.consume(this.queueName, async (msg) => {
          if (msg !== null) {
            const content = msg.content.toString();
            data = this.safeParse(content);

            this.logger.log(
              `Received on ${this.queueName}: ${JSON.stringify(data)}`,
            );

            await this.handleIncomingMessage(data);
            channel.ack(msg);
          }
        });
      })
      .then(() => {
        this.logger.log(
          `Received on ${this.queueName}: ${JSON.stringify(data)}`,
        );
      })
      .catch((e) => {
        this.logger.log(`Error Encountered listenToQueue : ${e}`);
      });
  }

  async publishToQueue(queueName: string, data: any): Promise<void> {
    const payload = Buffer.from(JSON.stringify(data));
    await this.channel
      .sendToQueue(queueName, payload, {
        persistent: true, // <-- now valid
      })
      .then(() => {
        this.logger.log(`Published to ${queueName}: ${JSON.stringify(data)}`);
      })
      .catch((e) => {
        this.logger.log(`Error Encountered to ${queueName}: ${e}`);
      });
  }

  private async handleIncomingMessage(message: CreateEventDto) {
    this.logger.log(`Processing: ${JSON.stringify(message)}`);
    switch (message.event_type) {
      case EventType.USER_LOGIN:
        this.activityLogService.userLogin(message.data);
        break;

      default:
        break;
    }
  }

  private safeParse(payload: string): CreateEventDto {
    return JSON.parse(payload);
  }
}
