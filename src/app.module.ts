import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configurations/env.config';
import { CachConfig } from 'configurations/cache.config';
import { DatabaseConfig } from 'configurations/database.config';
import { GoogleSheetsModule } from './google_sheets/google_sheets.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    DatabaseConfig,
    CachConfig,
    GoogleSheetsModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
