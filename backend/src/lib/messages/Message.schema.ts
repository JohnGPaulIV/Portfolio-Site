import { z } from "zod";
import { Brand } from "../shared/brand";
import { isUuid } from "../shared/identifier";
import { EmailSchema, MessageSchema, NameSchema } from "./Message.constants";

export type MessageId = Brand<string, "MessageId">;

function isMessageId(value: unknown): value is MessageId {
    return isUuid(value);
}

export const MessageIdSchema = z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.custom<MessageId>(isMessageId, "Must be a valid Message id"));

export const CreateMessageInputSchema = z.object({
    name: NameSchema,
    email: EmailSchema,
    message: MessageSchema,
});

export type CreateMessageInput = z.infer<typeof CreateMessageInputSchema>;

export interface Message {
    id: MessageId,
    name: string,
    email: string,
    message: string,
}