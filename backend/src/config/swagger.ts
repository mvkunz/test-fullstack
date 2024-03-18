import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Clientes",
      version: "1.0.0",
      description: "Uma simples API para gerenciamento de clientes",
    },
  },
  apis: ["./src/**/*Routes.ts", "./src/**/*Controller.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
