import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
  Request,
  Response,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    const startTime = Date.now();
    return next.handle().pipe(
      tap(() => {
        const response: Response & { statusCode: string } = context
          .switchToHttp()
          .getResponse();
        const responseTime = Date.now() - startTime;
        this.logger.log(
          `${request.method} ${request.url} ${response.statusCode} - ${responseTime}ms`,
        );
      }),
    );
  }
}
