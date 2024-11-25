import { Controller, Get, Query, Inject } from '@nestjs/common';
import { GoogleSheetsService } from './google_sheets.service';

@Controller('sheet')
export class GoogleSheetsController {
  constructor(
    @Inject(GoogleSheetsService)
    private readonly googleSheetsService: GoogleSheetsService,
  ) {}

  @Get()
  async getRows(
    @Query('sheetId') sheetId: string,
    @Query('range') range: string,
  ) {
    if (!sheetId || !range) {
      return { error: 'sheetId and range query parameters are required' };
    }

    const rows = await this.googleSheetsService.getRows(sheetId, range);
    return { rows };
  }
}
