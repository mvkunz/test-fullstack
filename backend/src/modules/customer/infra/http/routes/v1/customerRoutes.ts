import { Router } from "express";
import { CustomerController } from "../../controllers/CustomerController";

const customerRoutes = Router();
const customerController = new CustomerController();

customerRoutes.get("/", customerController.list);
customerRoutes.post("/", customerController.create);
customerRoutes.put("/:id", customerController.update);
customerRoutes.get("/:id", customerController.findById);
customerRoutes.delete("/:id", customerController.delete);

export default customerRoutes;

/**
 * @openapi
 * /api/v1/customers:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */

/**
 * @openapi
 * /api/v1/customers:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */

/**
 * @openapi
 * /api/v1/customers/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     tags: [Customers]
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 */

/**
 * @openapi
 * /api/v1/customers/{id}:
 *   get:
 *     summary: Obtém um cliente pelo ID
 *     tags: [Customers]
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID do cliente
 *     responses:
 *       200:
 *         description: Detalhes do cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */

/**
 * @openapi
 * /api/v1/customers/{id}:
 *   delete:
 *     summary: Deleta um cliente pelo ID
 *     tags: [Customers]
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID do cliente
 *     responses:
 *       204:
 *         description: Cliente deletado com sucesso
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID do cliente
 *         name:
 *           type: string
 *           description: O nome do cliente
 *         email:
 *           type: string
 *           description: O email do cliente
 *         phone:
 *           type: string
 *           description: O telefone do cliente
 */
