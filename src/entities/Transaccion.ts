import { Entity, ManyToOne } from "typeorm"
import { AgentComercial } from "./AgentComercial"
import { Documentacio } from "./Documentacio"

@Entity()
export class Transaccion {
    @ManyToOne(() => AgentComercial, (agentComercial => agentComercial.transacciones))
    agentComercial: AgentComercial

    @ManyToOne(()=>Documentacio,(documentacio => documentacio.transacciones))
    document: Documentacio
}