"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMessage = insertMessage;
const zod_1 = require("zod");
const Message_schema_1 = require("./Message.schema");
const Message_constants_1 = require("./Message.constants");
const MessageRowSchema = zod_1.z.object({
    id: Message_schema_1.MessageIdSchema,
    name: Message_constants_1.NameSchema,
    email: Message_constants_1.EmailSchema,
    message: Message_constants_1.MessageSchema,
})
    .transform((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    message: row.message,
}));
async function insertMessage(client, input) {
    const row = {
        name: input.name,
        email: input.email,
        message: input.message,
    };
    const columns = Object.keys(row);
    const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");
    const result = await client.query(`
        INSERT INTO public.messages (
            ${columns.join(", ")}
        )
        VALUES (${placeholders})
        RETURNING *
        `, Object.values(row));
    return MessageRowSchema.parse(result.rows[0]);
}
//# sourceMappingURL=Message.repository.js.map