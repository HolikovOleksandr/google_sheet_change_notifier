import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    this.logger.log(`🛎️  Request... ${request.method} ${request.url}`);

    return next.handle().pipe(
      tap(() => this.logger.log(`📢  Response... ${response.statusCode}`)),
      catchError((error) => {
        this.logger.error(`❌  Error... ${error.message}`);
        response.status(error.status || 500);
        return throwError(() => error);
      }),
    );
  }
}
