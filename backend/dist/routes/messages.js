"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Message_schema_1 = require("../lib/messages/Message.schema");
const zod_1 = __importDefault(require("zod"));
const Message_service_1 = require("../lib/messages/Message.service");
const router = (0, express_1.Router)();
router.post("/", async (_req, _res, _next) => {
    const parsed = Message_schema_1.CreateMessageInputSchema.safeParse(_req.body);
    if (!parsed.success) {
        _res.status(400).json({
            error: "Invalid input",
            fields: zod_1.default.flattenError(parsed.error).fieldErrors,
        });
        return;
    }
    try {
        const message = await (0, Message_service_1.createMessage)(parsed.data);
        _res.status(201).json(message);
    }
    catch (error) {
        _next(error);
    }
});
exports.default = router;
//# sourceMappingURL=messages.js.map