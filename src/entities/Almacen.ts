import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Distribucio } from "./Distribucio";

@Entity()
export class Almacen{
    @PrimaryGeneratedColumn()
        idAlmacen: number = 0
    @Column()
        nomAlmacen: string = ''
    @Column()
        ubicacio: string = ''
        
    @OneToMany(() => Distribucio, (distribucio => distribucio.almacen))
    distribucions: Distribucio[] = [];
}