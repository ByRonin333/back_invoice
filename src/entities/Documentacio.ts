import { Entity, OneToMany } from "typeorm"
import { Transaccio } from "./Transaccio"

@Entity()
export class Documentacio {
    @OneToMany(() => Transaccio,(transaccion=>transaccio.document))
    transaccions: Transaccio[]
}