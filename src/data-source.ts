import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entities/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "isca2025.",
    database: "invoices",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/*.ts"],
    migrations: [],
    subscribers: [],
})
