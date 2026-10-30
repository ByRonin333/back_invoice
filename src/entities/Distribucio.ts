import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Almacen } from "./Almacen";
import { Producte } from "./Producte";

@Entity()
export class Distribucio{
   
    @Column()
    lote: string = ''
    @Column()
    cantidad: string = ''
    @ManyToOne(()=> Almacen, (almacen=> almacen.distribucions))
    almacen: Almacen;
    @ManyToOne(()=> Producte, (producte=> producte.distribucions))
    producte: Producte
}