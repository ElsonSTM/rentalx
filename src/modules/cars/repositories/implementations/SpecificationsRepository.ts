import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      name,
      description,
      create_at: new Date(),
    });

    this.specifications.push(specifications);
  }

  findByName(name: string): Specification {
    const specifications = this.specifications.find(
      (specifications) => specifications.name === name);
      return specifications;
  }
}

export { SpecificationsRepository}