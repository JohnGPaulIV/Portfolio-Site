"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = createMessage;
const db_1 = require("../../db");
const Message_repository_1 = require("./Message.repository");
async function createMessage(input) {
    const client = await db_1.pool.connect();
    try {
        await client.query("BEGIN");
        const message = await (0, Message_repository_1.insertMessage)(client, input);
        await client.query("COMMIT");
        return message;
    }
    catch (error) {
        await client.query("ROLLBACK");
        throw error;
    }
    finally {
        client.release();
    }
}
//# sourceMappingURL=Message.service.js.map