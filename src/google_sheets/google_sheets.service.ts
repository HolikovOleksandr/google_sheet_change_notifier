import { Injectable, OnModuleInit } from '@nestjs/common';
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
}
