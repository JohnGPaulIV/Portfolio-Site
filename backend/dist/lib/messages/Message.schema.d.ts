import { z } from "zod";
import { Brand } from "../shared/brand";
export type MessageId = Brand<string, "MessageId">;
export declare const MessageIdSchema: z.ZodPipe<z.ZodString, z.ZodCustom<MessageId, MessageId>>;
export declare const CreateMessageInputSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodPipe<z.ZodString, z.ZodEmail>;
    message: z.ZodString;
}, z.core.$strip>;
export type CreateMessageInput = z.infer<typeof CreateMessageInputSchema>;
export interface Message {
    id: MessageId;
    name: string;
    email: string;
    message: string;
}
//# sourceMappingURL=Message.schema.d.ts.map