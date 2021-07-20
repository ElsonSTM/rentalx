import {Router} from 'express';

import { Category } from '../model/Category';
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

const categories: Category [] = []; // puxa o modelo (model) 

categoriesRoutes.post("/", (req, res) => {
    const {name, description} = req.body;

    categoriesRepository.create({name, description});

    return res.status(201).send(); //retorna a informação na view
})

export {categoriesRoutes};