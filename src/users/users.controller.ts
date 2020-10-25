import { Controller,Delete,Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    allUsers(){
        return this.userService.getAllUsers();
    }
    @Get(':id')
    getUser(@Param('id') userid){
        return this.userService.getUser(userid);
    }
    @Delete(':id')
    deleteUser(@Param('id') userid){
        return this.userService.deleteUser(userid);
    }
    @Post(':user')
    addUser(@Param('user') user){
        return this.userService.addUser(user);
    }
}
