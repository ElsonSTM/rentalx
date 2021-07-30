import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./../ICategoryRepository";

// DTO => Data tranfer object


class CategoriesRepository implements ICategoriesRepository {
 
    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository; //Aplicando o padrao de projeto SINGLETON

    constructor() {
        this.repository = getRepository(Category);
    }
    
    //Criar objeto
    async create({name, description}: ICreateCategoryDTO): Promise<void> {
         
        const category = this.repository.create({
           description,
           name
        })
        
        await this.repository.save(category)
    }   

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        //Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne({name})
        return category;
    }
}

export { CategoriesRepository };