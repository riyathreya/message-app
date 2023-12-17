import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // use global, makes this ap use validation pipes globally
  // to validate request content (DTO)
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
