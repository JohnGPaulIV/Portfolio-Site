import { pool } from "../../db";
import { insertMessage } from "./Message.repository";
import { CreateMessageInput, Message } from "./Message.schema";

export async function createMessage(
    input: CreateMessageInput
): Promise<Message> {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const message = await insertMessage(
            client,
            input
        );

        await client.query("COMMIT");

        return message;
    } catch (error) {
        await client.query("ROLLBACK");

        throw error;
    } finally {
        client.release();
    }
}