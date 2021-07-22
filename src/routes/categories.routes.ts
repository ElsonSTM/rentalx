import {response, Router} from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

import { Category } from '../model/Category';
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

const categories: Category [] = []; // puxa o modelo (model) 

categoriesRoutes.post("/", (req, res) => {
    const {name, description} = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name, description});
    
    return res.status(201).send(); //retorna a informação na view
});

categoriesRoutes.get("/", (req, res) =>{
    const all = categoriesRepository.list();

    return res.json(all);
})

export {categoriesRoutes};