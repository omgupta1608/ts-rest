import { Body, Injectable,Param } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers():string{
        return 'all users';
    }
    getUser(userid:number){
        return `User ${userid}`;
    }
    addUser(username:string){
        return `User ${username} created!`;
    }
    deleteUser(userid:number){
        return `User ${userid} deleted!`;
    }

}
