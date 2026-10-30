import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IClient } from "./IClient";
import { Transaccion } from "./Transaccion"

@Entity()
export class AgentComercial implements IClient {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    nom: string = ''

    @Column()
    dni: String = ''

    @OneToMany(() => Transaccio,(transaccio=>transaccio.agentComercial))
    transaccions: Transaccion[]

}

