import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoAula } from "./TipoAula";
import { Modulo } from "./Modulo";

@Entity()
export class Aula {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    numeroAula:number=0
    
    @Column()
    capacidad:number=0
    
    @Column()
    tipo:TipoAula

    // Configuramos una relación Muchos a Muchos
    @ManyToMany(()=>Modulo)
    @JoinTable()
    modulos:Modulo[]

}