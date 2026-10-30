import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Client } from "./Client";

@Entity()
export class LocalClient {
    @PrimaryGeneratedColumn()
    idLocalClient: number = 0;

    @Column()
    ubicacio: String = ''

    @Column()
    horari: Date = new Date

    @ManyToOne(() => Client,(client => client.locales))
    client: Client;
}