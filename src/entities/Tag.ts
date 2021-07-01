import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Expose } from "class-transformer";
import {v4 as uuid} from "uuid";

//nome da tabela referenciada
@Entity("tags")
class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({ name: "customName" })
    customName(): string {
        return `#${this.name}`;
    }

    constructor() {
        //nova tag, cria uuid
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };
