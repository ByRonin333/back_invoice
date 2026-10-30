import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Venta{
    @PrimaryGeneratedColumn()
    id: number = 0
}