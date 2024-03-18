import { Customer } from "@prisma/client";
import { prisma } from "../../../../../config/prisma";
import { ICustomerRepository, ICreateClientDTO } from "./ICustomerRepository";

class CustomerRepository implements ICustomerRepository {
  async findByEmail(email: string): Promise<Customer | null> {
    return prisma.customer.findUnique({
      where: { email },
    });
  }

  async create({ name, email, phone, cpf, status }: ICreateClientDTO): Promise<Customer> {
    return prisma.customer.create({
      data: {
        name,
        email,
        phone,
        cpf,
        status,
      },
    });
  }
  async update(id: number, data: Partial<Customer>): Promise<Customer> {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }
  async list(): Promise<Customer[]> {
    return prisma.customer.findMany();
  }
  async findById(id: number): Promise<Customer | null> {
    return prisma.customer.findUnique({
      where: { id },
    });
  }
  async delete(id: number): Promise<void> {
    await prisma.customer.delete({
      where: { id },
    });
  }
}

export { CustomerRepository };
