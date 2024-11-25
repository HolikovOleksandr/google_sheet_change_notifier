import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleSheetsService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  private sheets: sheets_v4.Sheets;

  onModuleInit() {
    const googleCredsPath = this.configService.get<string>('google.creds_path');
    const credentials = JSON.parse(fs.readFileSync(googleCredsPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async getRows(sheetId: string, range: string) {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    return response.data.values;
  }

  async appendRow(sheetId: string, range: string, values: any[]) {
    const response = await this.sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  }
}
