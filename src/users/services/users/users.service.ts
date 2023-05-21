import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers(){
        return [
            { name: 'Test', email: 'test@test.com' },
            { name: 'Test2', email: 'test2@test.com' },
            { name: 'Test3', email: 'test3@test.com' },
          ];
    }
}
