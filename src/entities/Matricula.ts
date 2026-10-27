import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matricula {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    cursMatricula:string=''
}