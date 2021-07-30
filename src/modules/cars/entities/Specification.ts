import {v4 as uuidv4} from 'uuid';

class Specification {

  id?: string; //?=infomação opcional

    name: string;

    description: string;
    
    created_at: Date;

    constructor() {
        if(!this.id){//Se o                                                                                                                                                                                                                                                               não tiver nenhum id, se um novo objeto que esta sendo criado, crie o cadastro
            this.id = uuidv4();
        } 
    }
                             
}

export { Specification }