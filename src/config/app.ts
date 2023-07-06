import fastify from "fastify";
import setupRoutes from "./routes";

const startServer = async (options = {}, port: number) => {
  const app = fastify(options);

  setupRoutes(app);

  app.listen({ port, host: "0.0.0.0" }, (error, address) => {
    if (error) {
      console.log(error);
    }

    console.log(`Server is up at ${address} 🚀`);
  });
};

export default startServer;
