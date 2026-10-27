import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    dni:string=''

    @Column()
    name:string=''  

    @Column()
    apellidos:string=''

    @Column()
    correoElectronico:string=''

    @Column()
    telefono:string=''

}
