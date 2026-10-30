import { Entity, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class Documentacio {
    @OneToMany(() => Transaccio,(transaccion=>transaccio.document))
    transaccions: Transaccion[]
}