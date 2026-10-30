import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Transaccio } from "./Transaccio"

@Entity()
export class Documentacio {
    @PrimaryGeneratedColumn()
    id: number = 0
    
    @OneToMany(() => Transaccio,(transaccio=>transaccio.document))
    transaccions: Transaccio[]
}