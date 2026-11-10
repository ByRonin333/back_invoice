import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AgentComercial } from "./AgentComercial";

@Entity()
export class MiEmpresa extends AgentComercial {
    @PrimaryGeneratedColumn()
        idMiEmpresa: number = 0
    @Column()
        nomMiEmpresa: String = ''
}