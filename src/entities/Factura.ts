import { Entity, OneToMany } from "typeorm"
import { Documentacio } from "./Documentacio";
import { Albara } from "./Albara";


@Entity()
export class Factura extends Documentacio {
    @OneToMany(()=>Albara,(albara=>albara.factura))
    albarans: Albara[]
}
    