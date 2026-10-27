import "reflect-metadata"
import { DataSource } from "typeorm"
<<<<<<< HEAD
=======
import { User } from "./entities/User"
>>>>>>> 2cf5dbd (primer commit)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
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
    migrations: [],
    subscribers: [],
})
