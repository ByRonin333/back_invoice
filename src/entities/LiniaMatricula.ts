import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { EstadoMatricula } from "./EstadoMatricula"

@Entity()
export class LineaMatricula {
    /*si nota == -1 renuncia convocatoria*/
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    modul:string=''

    @Column()
    notaFinal:number=0

    @Column()
    notaOrdinaria:number=0

    @Column()
    estadoMatricula: EstadoMatricula
}