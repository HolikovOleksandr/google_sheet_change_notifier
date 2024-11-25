import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configurations/env.config';
import { DatabaseConfig } from 'configurations/database.config';
import { CachConfig } from 'configurations/cache.config';
import { GoogleSheetsModule } from './google_sheets/google_sheets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    DatabaseConfig,
    CachConfig,
    GoogleSheetsModule,  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
