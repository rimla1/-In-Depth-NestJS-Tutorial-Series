import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { name: 'Test', email: 'test@test.com' },
      { name: 'Test2', email: 'test2@test.com' },
      { name: 'Test3', email: 'test3@test.com' },
    ];
  }

  @Post()
  createUser(@Body() body: any){
  console.log(body)
  return 'User Created!'
  }

}
