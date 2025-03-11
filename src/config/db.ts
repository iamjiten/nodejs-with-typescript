import { User } from "../models/user.model";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "learn_nodejs",
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});
