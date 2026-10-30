import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Distribucio } from "./Distribucio";
import { Almacen } from "./Almacen";
import { Transaccio } from "./Transaccio";

@Entity()
export class Producte{
    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    stock: number = 0
    @OneToMany(()=> Distribucio, (distribucio => distribucio.producte.distribucions))
    distribucions: Distribucio[]
    @OneToMany(()=> Transaccio, (transaccio=> transaccio.producte))
    transaccions: Transaccio[]
}