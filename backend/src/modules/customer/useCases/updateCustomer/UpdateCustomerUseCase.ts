import { ICustomerRepository } from "../../infra/prisma/repositories/ICustomerRepository";
import { Customer } from "@prisma/client";

class UpdateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: number, data: Partial<Customer>): Promise<Customer> {
    return this.customerRepository.update(id, data);
  }
}

export { UpdateCustomerUseCase };
