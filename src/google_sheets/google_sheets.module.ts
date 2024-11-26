import { Module } from '@nestjs/common';
import { GoogleSheetsGateway } from './google_sheets.gateway';
import { GoogleSheetsController } from './google_sheets.controller';
import { GoogleSheetsService } from './google_sheets.service';

@Module({
  controllers: [GoogleSheetsController],
  providers: [GoogleSheetsService, GoogleSheetsGateway],
})
export class GoogleSheetsModule {}
