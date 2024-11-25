import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configurations/env.config';
import {  DatabaseConfig } from 'configurations/database.config';
import { CachConfig } from 'configurations/cache.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    DatabaseConfig,
    CachConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
