import { Entity, OneToMany } from "typeorm"
import { Transaccio } from "./Transaccio"

@Entity()
export class Documentacio {
    @OneToMany(() => Transaccio,(transaccio=>transaccio.document))
    transaccions: Transaccio[]
}