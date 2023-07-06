"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const startServer = async (options = {}, port) => {
    const app = (0, fastify_1.default)(options);
    (0, routes_1.default)(app);
    app.listen({ port }, (error, address) => {
        if (error) {
            console.log(error);
        }
        console.log(`Server is up at ${address} 🚀`);
    });
};
exports.default = startServer;
