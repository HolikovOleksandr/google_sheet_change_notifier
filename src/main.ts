import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');

  const configService = app.get(ConfigService);
  const port = configService.get('port');

  Logger.log(`🦾  Server is running on port ${port}`, 'Bootstrap');
  await app.listen(port);
}
bootstrap();
