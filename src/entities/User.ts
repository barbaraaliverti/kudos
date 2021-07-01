import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Exclude } from "class-transformer";
import {v4 as uuid} from "uuid";

//nome da tabela referenciada
@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Exclude()
    @Column()
    email: string;

    @Exclude()
    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @Exclude()
    @CreateDateColumn()
    created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        //novo usuário, cria uuid
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
