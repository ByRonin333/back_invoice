import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class AgentComercial {

    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    nom: string = ''

    @OneToMany(() => Transaccion,(transaccion=>transaccion.agentComercial))
    transacciones: Transaccion[]

}

