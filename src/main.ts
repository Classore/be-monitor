import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { configConstant } from './common/constants/config.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [process.env.RABBITMQ_URL],
  //     queue: configConstant.amq.queue,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });

  app.enableCors({
    origin: true,
  });
  app.setGlobalPrefix('classore-events/v1');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useLogger(['log', 'error', 'warn', 'debug']);
  const port = Number(process.env.NODE_PORT) || 8080;
  await app.startAllMicroservices();
  await app.listen(port, () => {
    console.log('APP LISTENING ON PORT::', port);
  });
  const server = app.getHttpServer();
  server.keepAliveTimeout = 61 * 1000;
  server.headersTimeout = 65 * 1000;
  server.setTimeout(60 * 1000);
}
bootstrap();
