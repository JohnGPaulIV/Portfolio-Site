"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageInputSchema = exports.MessageIdSchema = void 0;
const zod_1 = require("zod");
const identifier_1 = require("../shared/identifier");
const Message_constants_1 = require("./Message.constants");
function isMessageId(value) {
    return (0, identifier_1.isUuid)(value);
}
exports.MessageIdSchema = zod_1.z
    .string()
    .trim()
    .toLowerCase()
    .pipe(zod_1.z.custom(isMessageId, "Must be a valid Message id"));
exports.CreateMessageInputSchema = zod_1.z.object({
    name: Message_constants_1.NameSchema,
    email: Message_constants_1.EmailSchema,
    message: Message_constants_1.MessageSchema,
});
//# sourceMappingURL=Message.schema.js.map