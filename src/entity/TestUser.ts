import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TestUser {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    comment: string

    @Column()
    married: number

}
