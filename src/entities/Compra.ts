import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compra{
    @PrimaryGeneratedColumn()
    id: number = 0
}