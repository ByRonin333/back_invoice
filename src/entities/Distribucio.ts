import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Almacen } from "./Almacen";
import { Producte } from "./Producte";

@Entity()
export class Distribucio{
    @PrimaryGeneratedColumn()
        codiDistribucio: String = ''
    @Column()
        idLot: String = ''
    @Column()
        quantitat: number = 0

    @ManyToOne(()=> Almacen, (almacen=> almacen.distribucions))
    almacen: Almacen;

    @ManyToOne(()=> Producte, (producte=> producte.distribucions))
    producte: Producte
}