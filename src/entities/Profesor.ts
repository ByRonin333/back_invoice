import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Usuario } from "./Usuario"
import { Docencia } from "./Docencia";

export @Entity()
class Profesor extends Usuario {
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column()
    fechaIncorporacion:Date = new Date()

    // Configuramos una relación de Uno a Muchos de forma "ternaria"
    @OneToMany(()=>Docencia,(docencia=>docencia.profesor))
    docencias:Docencia[]
}