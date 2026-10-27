import "reflect-metadata"
import { DataSource } from "typeorm"
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { User } from "./entities/User"
>>>>>>> 2cf5dbd (primer commit)
=======
import { Usuario } from "./entities/Usuario"
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
<<<<<<< HEAD
<<<<<<< HEAD
    username: "postgres",
    password: "postgres",
    database: "invoice",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/*.ts"],
=======
    username: "root",
    password: "password",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
>>>>>>> 2cf5dbd (primer commit)
=======
    username: "postgres",
    password: "isca2025.",
    database: "invoices",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/*.ts"],
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d
    migrations: [],
    subscribers: [],
})
