import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: process.env.COLLEGE_NAME || "My College",
    version: "1.0.0",
    description: "API documentation for College System",
  },
  servers: [
    {
      url: process.env.BACKEND_SERVER || "http://localhost:5000/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT", // <--- important for JWT
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // routes ke path
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
