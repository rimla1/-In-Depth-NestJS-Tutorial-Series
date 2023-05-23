import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers()
    return users
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto){
  const {name, email, age} = userData
  console.log(typeof(age))
  console.log(age)
  const result = this.usersService.createUser(name, email)
  return result
  }

  @Get(":id")
  getUser(@Param("id", ParseIntPipe) id: number){
    const user = this.usersService.getUserById(id)
    if(!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    return user
  }


}
