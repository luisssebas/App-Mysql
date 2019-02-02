import { Controller, Logger, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    private logger = new Logger("UserController");
    constructor(private userService: UserService){}

    @Get('index')
    async showUsers(){
        const user = await this.userService.showAll();
        return {user};
    }

    
}
