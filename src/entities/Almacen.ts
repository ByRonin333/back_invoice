import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Distribucio } from "./Distribucio";

@Entity()
export class Almacen{
    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    nombre: string = ''
    @Column()
    ubicacion: string = ''
    @OneToMany(()=>Distribucio, (distribucio=>distribucio.almacen))
    distribucions: Distribucio[]
}