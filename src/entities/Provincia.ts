import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Poblacio } from "./Poblacio";
import { Pais } from "./Pais";

@Entity()
export class Provincia {
    @PrimaryGeneratedColumn()
        idProvincia: number = 0
    @Column()
        nomProvincia: String = ''

    @OneToMany(() => Poblacio,(poblacio => poblacio.provincia))
    poblacions: Poblacio[]

    @ManyToOne(() => Pais,(pais => pais.provincies))
    pais: Pais
}