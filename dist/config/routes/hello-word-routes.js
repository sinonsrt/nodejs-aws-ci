"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldRoutes = void 0;
const helloWorldRoutes = async (app) => {
    app.get("/", async () => {
        return "Hello World 🗺️";
    });
};
exports.helloWorldRoutes = helloWorldRoutes;
