"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidSchema = void 0;
exports.isUuid = isUuid;
const zod_1 = require("zod");
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function isUuid(value) {
    return typeof value === "string" && UUID_PATTERN.test(value);
}
exports.UuidSchema = zod_1.z
    .string()
    .trim()
    .toLowerCase()
    .pipe(zod_1.z.custom(isUuid, "Must be a valid UUID"));
//# sourceMappingURL=identifier.js.map