import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SomethingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("This will trigger on every single request but in second spot")
    next();
  }
}
