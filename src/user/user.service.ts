import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity)
    private userRepository:Repository<UserEntity>){}

    async showAll(){
        return await this.userRepository.find();
    }

    async create(data){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async update(id: number, data:Partial<UserDTO>){
        let user = await this.userRepository.findOne({where: {id}});
        await this.userRepository.update({id}, data);
        return user
    }

    async read(id: number){
        let user = await this.userRepository.findOne({where: {id}});

        return user;
    }

    async delete(id:number){
        let user = await this.userRepository.findOne({where: {id}});
        await this.userRepository.delete({id});
        return user;
    }
}
