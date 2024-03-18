import express, { Express, Request, Response } from "express";
import CustomerRoutes from "./modules/customer/infra/http/routes/v1/customerRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app: Express = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/customers", CustomerRoutes);

export { app };
