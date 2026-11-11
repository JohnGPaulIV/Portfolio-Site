import { Message, CreateMessageInput } from "./Message.schema";
import { PoolClient } from "pg";
export declare function insertMessage(client: PoolClient, input: CreateMessageInput): Promise<Message>;
//# sourceMappingURL=Message.repository.d.ts.map