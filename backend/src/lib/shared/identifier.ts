import { z } from "zod";
import type { Brand } from "./brand.js";

export type Uuid = Brand<string, "Uuid">;

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function isUuid(value: unknown): value is Uuid {
    return typeof value === "string" && UUID_PATTERN.test(value);
}

export const UuidSchema = z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.custom<Uuid>(isUuid, "Must be a valid UUID"));