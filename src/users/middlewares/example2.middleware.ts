import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Example2Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Middleware that will trigger on POST requests only for route: users")
    next();
  }
}
