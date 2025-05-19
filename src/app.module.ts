import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq/rabbit-mq.service';
import { ConfigModule } from '@nestjs/config';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),

    ActivityLogModule,
  ],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {}
