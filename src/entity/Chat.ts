import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "chats" })
export class Chat {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 100 })
    content: string;

    @ManyToOne(() => User, (user) => user.chats)
    user: Promise<User>;
}