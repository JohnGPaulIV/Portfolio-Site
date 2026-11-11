import { z } from "zod";


export const NameSchema = z
    .string()
    .trim()
    .min(1, "You must insert a name before sending message.")
    .max(128, "A name must not exceed 128 characters.");

export const EmailSchema = z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email("Must be a valid email address."));

export const MessageSchema = z
    .string()
    .trim()
    .min(1, "You must insert a message before sending.");