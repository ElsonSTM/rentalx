import { CategoriesRepository } from "../src/repositories/CategoriesRepository";

interface Irequest {
  name: string;
  description: string;
}
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo (void)
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {};

  execute({description, name}: Irequest): void{
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
        throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({name, description});

  }
}

export {CreateCategoryService}