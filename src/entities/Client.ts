import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { AgentComercial } from "./AgentComercial";
import { LocalClient } from "./LocalClient";

@Entity()
export class Client extends AgentComercial {
    @PrimaryGeneratedColumn()
    idClient: number = 0

    @OneToMany(() => LocalClient,(local => local.client))
    locals: LocalClient[]
}