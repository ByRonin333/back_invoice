import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Docencia } from "./Docencia";

@Entity()
export class Modulo {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    codModulo:string=''

    @Column()
    nombreModulo:string=''

    // Configuramos una relación de Uno a Muchos de forma "ternaria"
    @OneToMany(()=>Docencia,(docencia=>docencia.modulo))
    docencias:Docencia[]

}