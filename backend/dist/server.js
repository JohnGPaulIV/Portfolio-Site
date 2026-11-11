"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const messages_1 = __importDefault(require("./routes/messages"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5491;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/messages", messages_1.default);
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map