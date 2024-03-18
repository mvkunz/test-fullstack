import { ICustomerRepository } from "../../infra/prisma/repositories/ICustomerRepository";

interface IRequest {
  name: string;
  email: string;
  phone?: string;
}

class CreateCustomerUseCase {
  constructor(private clientsRepository: ICustomerRepository) {}

  async execute({ name, email, phone }: IRequest): Promise<void> {
    const clientExists = await this.clientsRepository.findByEmail(email);

    if (clientExists) {
      throw new Error("Client already exists");
    }

    await this.clientsRepository.create({ name, email, phone });
  }
}

export { CreateCustomerUseCase };
