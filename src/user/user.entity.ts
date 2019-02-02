import {} from '@nestjs/typeorm';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    lastName:string;
}