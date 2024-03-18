// src/modules/customer/useCases/findCustomerById/FindCustomerByIdUseCase.ts

import { ICustomerRepository } from "../../infra/prisma/repositories/ICustomerRepository";
import { Customer } from "@prisma/client";

class FindCustomerByIdUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: number): Promise<Customer | null> {
    return this.customerRepository.findById(id);
  }
}

export { FindCustomerByIdUseCase };
