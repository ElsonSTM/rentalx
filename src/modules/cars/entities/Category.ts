import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string; //?=infomação opcional
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){//Se o não tiver nenhum id, se um novo objeto que esta sendo criado, crie o cadastro
            this.id = uuidv4();
        } 
    }
}

export {Category}