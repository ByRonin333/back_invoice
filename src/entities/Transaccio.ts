import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UnitatMedida } from "./UnitatMedida";
import { Producte } from "./Producte";
import { Documentacio } from "./Documentacio";

@Entity()
export class Transaccio{
    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    data: Date = new Date()
    @Column()
    preuUnitat: number = 0.0
    @Column()
    unitats: number = 0
    @Column()
    unitatMedida: UnitatMedida | undefined
    @Column()
    quantitat: number = 0.0
    @Column()
    lot: string = ''
    @Column()
    mesura: string = ''
    @Column()
    iva: number = 0
    @Column()
    preuMedida: number = 0.0
    @ManyToOne(()=> Producte, (producte=> producte.transaccions))
    producte: Producte
    @ManyToOne(()=>Documentacio,(documentacio => documentacio.transacciones))
    document: Documentacio
    
}