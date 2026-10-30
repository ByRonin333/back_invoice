import { Entity, ManyToOne } from "typeorm"
import { Documentacio } from "./Documentacio";
import { Factura } from "./Factura";


@Entity()
export class Albara extends Documentacio {
    @ManyToOne(()=>Factura,(factura=>factura.albarans))
    factura: Factura
}