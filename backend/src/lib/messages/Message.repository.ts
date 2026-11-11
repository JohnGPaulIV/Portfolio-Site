import { z } from "zod";
import { MessageIdSchema, Message, CreateMessageInput } from "./Message.schema";
import { EmailSchema, MessageSchema, NameSchema } from "./Message.constants";
import { PoolClient } from "pg";

const MessageRowSchema = z.object({
    id: MessageIdSchema,
    name: NameSchema,
    email: EmailSchema,
    message: MessageSchema,
})
    .transform((row): Message => ({
        id: row.id,
        name: row.name,
        email: row.email,
        message: row.message,
    }));

export async function insertMessage(
    client: PoolClient,
    input: CreateMessageInput,
): Promise<Message> {
    const row = {
        name: input.name,
        email: input.email,
        message: input.message,
    };

    const columns = Object.keys(row);

    const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");

    const result = await client.query(
        `
        INSERT INTO public.messages (
            ${columns.join(", ")}
        )
        VALUES (${placeholders})
        RETURNING *
        `,
        Object.values(row)
    );

    return MessageRowSchema.parse(
        result.rows[0]
    );
}