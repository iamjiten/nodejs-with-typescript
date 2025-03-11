import { AbstractEntity } from "../config/abstract.entity";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.model";

@Entity()
export class Profile extends AbstractEntity<Profile> {
  @Column({ name: "user_id" })
  @Index()
  userId: number;

  @Column()
  phone: string;

  @Column({ nullable: true, default: null })
  address: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
