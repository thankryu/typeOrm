import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Chat } from "./Chat";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 10 })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Chat, (chat) => chat.user)
    chats: Promise<Chat[]>;
}
