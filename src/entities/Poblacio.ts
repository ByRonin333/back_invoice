import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AgentComercial } from "./AgentComercial";
import { Provincia } from "./Provincia";

@Entity()
export class Poblacio {
    @PrimaryGeneratedColumn()
        idPoblacio: number = 0
    @Column()
        nomPoblacio: String = ''
    @Column()
        codiPostal: String = ''
    @Column()
        calle: String = ''
    @Column()
        numero: number = 0

    @OneToMany(() => AgentComercial, (agentscomercial => agentscomercial.poblacio))
    agentsComercials: AgentComercial[] = [];

    @ManyToOne(() => Provincia, (provincia => provincia.poblacions))
    provincia: Provincia = new Provincia;
}