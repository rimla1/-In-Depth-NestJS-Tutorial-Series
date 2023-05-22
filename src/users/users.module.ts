import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExampleMiddleware } from './middlewares/example.middleware';
import { Example2Middleware } from './middlewares/example2.middleware';
import { SomethingMiddleware } from './middlewares/something.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET
    }).apply(Example2Middleware).forRoutes({
      path: 'users',
      method: RequestMethod.POST
    }).apply(SomethingMiddleware).forRoutes(UsersController)
  }
}
