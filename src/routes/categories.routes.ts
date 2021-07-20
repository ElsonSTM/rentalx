import {Router} from 'express';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category [] = []; // puxa o modelo (model) 

categoriesRoutes.post("/", (req, res) => {
    const {name, description} = req.body;

    //Criar objeto
    const category = new Category(); 
    
    Object.assign(category, { 
        name,
        description,
        created_at: new Date()
    })

    categories.push(category);

    return res.status(201).json({category}); //retorna a informação na view
})

export {categoriesRoutes};