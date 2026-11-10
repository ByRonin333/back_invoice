import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Transaccio } from "./Transaccio";

@Entity()
export class Venda extends Transaccio{
    @PrimaryGeneratedColumn()
        idVenda: number = 0
}