import { Entity, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class Documentacio {
    @OneToMany(() => Transaccion,(transaccion=>transaccion.document))
    transacciones: Transaccion[]
}