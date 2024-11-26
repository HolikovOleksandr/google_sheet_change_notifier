import { Controller, Post, Body, Logger } from '@nestjs/common';
import { GoogleSheetsGateway } from './google_sheets.gateway';

@Controller()
export class GoogleSheetsController {
  constructor(private readonly googleSheetsGateway: GoogleSheetsGateway) {}

  @Post('notify')
  notifySheetUpdate(@Body() body: any) {
    Logger.log('Received update:', body);
    this.googleSheetsGateway.sendUpdate(body);
    return { status: 'success' };
  }
}
