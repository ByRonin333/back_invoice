import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { IClient } from "./IClient";
import { Transaccio } from "./Transaccio"
import { Poblacio } from "./Poblacio";

@Entity()
export class AgentComercial implements IClient {
    @PrimaryGeneratedColumn()
        id: number = 0

    @Column()
        nif_dni: String = ''
    @Column()
        nom: string = ''

    @Column()
        cognom: string = ''

    @Column()
        telefon: String = ''

    @Column()
        email: string = ''

    @Column()
        calle: string = ''

    @OneToMany(() => Transaccio,(transaccio=>transaccio.agentComercial))
    transaccions: Transaccio[]

    @ManyToOne(() => Poblacio,(poblacion => poblacion.agentsComercials))
    poblacio: Poblacio
}

