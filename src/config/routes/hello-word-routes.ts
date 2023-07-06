import { FastifyInstance } from "fastify";

const helloWorldRoutes = async (app: FastifyInstance): Promise<void> => {
  app.get("/", async () => {
    return "Hello World 🗺️ - UPDATED";
  });
};

export { helloWorldRoutes };
