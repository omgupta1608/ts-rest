import { Body, Injectable,Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './model_interfaces/user.interface';
@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel:Model<UserInterface>){}

    async getAllUsers():Promise<UserInterface>{
        return await this.userModel.find();
    }
    async getUser(userid:number):Promise<UserInterface>{
        return await this.userModel.findOne({ _id: userid});
    }
    async addUser(username:string){
        return 'test';
    }
    deleteUser(userid:number){
        return `User ${userid} deleted!`;
    }

}
