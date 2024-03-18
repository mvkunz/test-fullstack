// src/modules/customer/useCases/listCustomers/ListCustomersUseCase.ts

import { Customer } from "@prisma/client";
import { ICustomerRepository } from "../../infra/prisma/repositories/ICustomerRepository";

class ListCustomersUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(): Promise<Customer[]> {
    return this.customerRepository.list();
  }
}

export { ListCustomersUseCase };
