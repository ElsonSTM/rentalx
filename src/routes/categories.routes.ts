import {response, Router} from 'express';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

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