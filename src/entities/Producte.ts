import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Distribucio } from "./Distribucio";
import { Transaccio } from "./Transaccio";

@Entity()
export class Producte{
    @PrimaryGeneratedColumn()
        idProducte: number = 0
    @Column()
        stock: number = 0
    
    @Column()
        nomProducte: String = ''
    
    @OneToMany(() => Distribucio, (distribucio => distribucio.producte.distribucions))
    distribucions: Distribucio[] = [];

    @OneToMany(() => Transaccio, (transaccio => transaccio.producte))
    transaccions: Transaccio[] = [];
}