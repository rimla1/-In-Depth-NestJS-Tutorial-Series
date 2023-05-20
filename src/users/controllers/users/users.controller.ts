import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query("sortBy") sortBy) {
    console.log(sortBy)
    return [
      { name: 'Test', email: 'test@test.com' },
      { name: 'Test2', email: 'test2@test.com' },
      { name: 'Test3', email: 'test3@test.com' },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto){
  const {name, email} = userData
  console.log(name, email)
  return 'User Created!'
  }

  @Get(":id")
  getUser(@Param() params: any){
    const {id} = params
    return `user with id ${id} found!`
  }

  @Get("user/:name")
  getUserByName(@Param('name') name: string){
    console.log(name)
    return `user with name ${name} found!!!!`
  }



}
