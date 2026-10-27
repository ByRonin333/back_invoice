import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecursosTecnologicos {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    tipoRecurso:string=''
}