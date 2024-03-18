import { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../../useCases/createCustomer/CreateClientUseCase";
import { CustomerRepository } from "../../prisma/repositories/CustomerRepository";
import { ListCustomersUseCase } from "../../../useCases/listCustomers/ListCustomersUseCase";
import { UpdateCustomerUseCase } from "../../../useCases/updateCustomer/UpdateCustomerUseCase";
import { FindCustomerByIdUseCase } from "../../../useCases/findCustomerById/FindCustomerByIdUseCase";
import { DeleteCustomerUseCase } from "../../../useCases/deleteCustomer/DeleteCustomerUseCase";

class CustomerController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body;

    const customerRepository = new CustomerRepository();
    const createCustomerUseCase = new CreateCustomerUseCase(customerRepository);

    await createCustomerUseCase.execute({
      name,
      email,
      phone,
    });

    return response.status(201).send();
  }

  async list(_req: Request, res: Response): Promise<Response> {
    const customerRepository = new CustomerRepository();
    const listCustomersUseCase = new ListCustomersUseCase(customerRepository);

    const customers = await listCustomersUseCase.execute();

    return res.json(customers);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const customerRepository = new CustomerRepository();
    const updateCustomerUseCase = new UpdateCustomerUseCase(customerRepository);

    const customer = await updateCustomerUseCase.execute(Number(id), data);

    return res.json(customer);
  }
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const customerRepository = new CustomerRepository();
    const findCustomerByIdUseCase = new FindCustomerByIdUseCase(
      customerRepository
    );

    const customer = await findCustomerByIdUseCase.execute(Number(id));

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.json(customer);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const customerRepository = new CustomerRepository();
    const deleteCustomerUseCase = new DeleteCustomerUseCase(customerRepository);

    await deleteCustomerUseCase.execute(Number(id));

    return res.status(204).send(); // No Content
  }
}

export { CustomerController };
