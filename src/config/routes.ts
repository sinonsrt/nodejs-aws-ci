import { FastifyInstance } from "fastify";
import { helloWorldRoutes } from "./routes/hello-word-routes";

const setupRoutes = (app: FastifyInstance): void => {
  app.register(helloWorldRoutes);
};

export default setupRoutes;
