import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Provincia } from "./Provincia";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
        idPais: String = ''
    @Column()
        nomPais: String = ''

    @OneToMany(() => Provincia, (provincia => provincia.pais))
    provincies: Provincia[] = [];
}