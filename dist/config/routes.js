"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_word_routes_1 = require("./routes/hello-word-routes");
const setupRoutes = (app) => {
    app.register(hello_word_routes_1.helloWorldRoutes);
};
exports.default = setupRoutes;
