import { Customer } from "@prisma/client"; // Supondo que Customer é seu modelo
import { ICreateClientDTO } from "../../../dtos/ICreateCustomerDTO";

interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer | null>;
  create(data: ICreateClientDTO): Promise<Customer>;
  list(): Promise<Customer[]>;
  findById(id: number): Promise<Customer | null>;
  update(id: number, data: Partial<Customer>): Promise<Customer>;
  delete(id: number): Promise<void>;
}

export { ICustomerRepository, ICreateClientDTO };
