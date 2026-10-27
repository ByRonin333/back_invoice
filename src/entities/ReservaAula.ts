import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReservaAula {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    fechaReserva: Date = new Date()
}