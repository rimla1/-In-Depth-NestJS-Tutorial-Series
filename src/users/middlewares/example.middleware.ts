import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers)
    const {authorization} = req.headers
    if(!authorization) {
      console.log("Hello")
      throw new HttpException('No Authorization!', HttpStatus.FORBIDDEN)
    }
    console.log(authorization)
    console.log("Middleware that will trigger on GET requests only for route: users")
    next();
  }
}
