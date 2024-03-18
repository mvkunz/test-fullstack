// src/modules/customer/useCases/deleteCustomer/DeleteCustomerUseCase.ts

import { ICustomerRepository } from "../../infra/prisma/repositories/ICustomerRepository";

class DeleteCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
