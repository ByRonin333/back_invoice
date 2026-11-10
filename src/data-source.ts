import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    // url: 'postgresql://neondb_owner:npg_D5ZrxfOghu0W@ep-round-frost-ad43xpau-pooler.c-2.us-east-1.aws.neon.tech/invoices?sslmode=require&channel_binding=require',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "isca2025.",
    database: "backendinvoices",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entities/*.ts"],
    migrations: [],
    subscribers: [],
})