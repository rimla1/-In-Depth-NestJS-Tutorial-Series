import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {

    const parseAgeToInt = parseInt(value.age.toString())
    if(isNaN(parseAgeToInt)){
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }

    return {...value, age: parseAgeToInt};
  }
}
