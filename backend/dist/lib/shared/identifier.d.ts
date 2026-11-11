import { z } from "zod";
import type { Brand } from "./brand.js";
export type Uuid = Brand<string, "Uuid">;
export declare function isUuid(value: unknown): value is Uuid;
export declare const UuidSchema: z.ZodPipe<z.ZodString, z.ZodCustom<Uuid, Uuid>>;
//# sourceMappingURL=identifier.d.ts.map