import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IClient } from "./IClient";
import { Transaccio } from "./Transaccio"

@Entity()
export class AgentComercial implements IClient {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    nom: string = ''

    @Column()
    dni: String = ''

    @OneToMany(() => Transaccio,(transaccio=>transaccio.agentComercial))
    transaccions: Transaccio[]

}

