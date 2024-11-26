import { Injectable, OnModuleInit } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleSheetsService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  private sheets: sheets_v4.Sheets;

  onModuleInit() {
    const credentials = this.configService.get('google.credentials');

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }
}
