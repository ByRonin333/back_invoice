import { Entity, PrimaryGeneratedColumn } from "typeorm"
import { AgentComercial } from "./AgentComercial";

@Entity()
export class Proveidor extends AgentComercial {
    @PrimaryGeneratedColumn()
    idProveidor: number = 0
}
