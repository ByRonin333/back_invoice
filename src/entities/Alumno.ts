import { Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Alumno extends Usuario {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    nia:string=''

    @Column()
    numExpedient:string='';
    
    @Column()
    fechaNacimiento:Date = new Date();
}
