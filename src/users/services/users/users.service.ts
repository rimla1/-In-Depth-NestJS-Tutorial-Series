import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private  users = [
        { name: 'Test', email: 'test@test.com' },
        { name: 'Test2', email: 'test2@test.com' },
        { name: 'Test3', email: 'test3@test.com' },
      ]
    getUsers(){
        return this.users;
    }

    createUser(name, email){
        this.users.push({name, email})
        return "User created!"
    }

    getUserById(id: Number){
        return {id, name: "Rimla", email: "rimla@gmail.com"}
    }

}
