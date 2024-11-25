import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Google Sheets Change Notifier API')
  .setDescription(
    'API for notifying and managing changes from Google Sheets, storing rows in the local database and sending real-time notifications via WebSocket.',
  )
  .setVersion('1.0')
  .addTag('Google Sheets')
  .build();
