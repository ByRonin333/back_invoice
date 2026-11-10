import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Transaccio } from "./Transaccio";

@Entity()
export class Compra extends Transaccio{
    @PrimaryGeneratedColumn()
        idCompra: number = 0
}