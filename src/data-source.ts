import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Chat } from "./entity/Chat";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "nodejs",
    synchronize: true,
    logging: false,
    entities: [User, Chat],
    migrations: [],
    subscribers: [],
})
