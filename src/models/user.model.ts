import { AbstractEntity } from "../config/abstract.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.model";

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column({ name: "email", unique: true })
  emailAddress: string;

  @Column()
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
