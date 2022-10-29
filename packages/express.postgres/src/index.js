"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("./routes");
const path_1 = require("path");
const PORT = parseInt(process.env.PORT, 10) || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static((0, path_1.join)(__dirname, "uploads")));
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map