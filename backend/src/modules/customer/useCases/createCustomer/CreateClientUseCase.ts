import { ICustomerRepository, ICreateClientDTO } from "../../infra/prisma/repositories/ICustomerRepository";


class CreateCustomerUseCase {
  constructor(private clientsRepository: ICustomerRepository) {}

  async execute({ name, email, phone, cpf, status }: ICreateClientDTO): Promise<void> {
    const clientExists = await this.clientsRepository.findByEmail(email);

    if (clientExists) {
      throw new Error("Client already exists");
    }

    await this.clientsRepository.create({ name, email, phone, cpf, status });
  }
}

export { CreateCustomerUseCase };
