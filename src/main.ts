import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from 'configurations/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const configService = app.get(ConfigService);
  const port = configService.get('port');

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  Logger.log(`🦾  Server is running on port ${port}`, 'Bootstrap');
  await app.listen(port);
}
bootstrap();
