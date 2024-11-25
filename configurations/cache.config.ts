import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore as any,
        host: configService.get<string>('cache.host'),
        port: configService.get<number>('cache.port'),
        ttl: configService.get<number>('cache.ttl') || 10000,
      }),
    }),
  ],
})
export class CachConfig {}
