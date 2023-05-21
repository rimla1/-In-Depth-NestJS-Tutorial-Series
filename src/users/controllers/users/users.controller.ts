import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

  @Get()
  async getUsers(@Query("sortBy") sortBy) {
    console.log(sortBy)
    const users = await this.usersService.getUsers()
    return users
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto){
  const {name, email} = userData
  console.log(name, email)
  return 'User Created!'
  }

  @Get(":id")
  getUser(@Param("id", ParseIntPipe) id: number){
    console.log(typeof(id))
    return `user with id ${id} found!`
  }


}
