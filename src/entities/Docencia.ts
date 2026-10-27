import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profesor } from "./Profesor"
import { Modulo } from "./Modulo";

@Entity()
export class Docencia {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    cursoAcademico:string=''

    // Configuramos una relación de Muchos a uno de forma "ternaria"
    @ManyToOne(()=>Modulo,(modulo=>modulo.docencias))
    modulo:Modulo

    @ManyToOne(()=>Profesor,(profesor=>profesor.docencias))
    profesor:Profesor
}