import { AbstractEntity } from "../config/abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column({ name: "email", unique: true })
  emailAddress: string;

  @Column()
  password: string;
}
