"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = exports.EmailSchema = exports.NameSchema = void 0;
const zod_1 = require("zod");
exports.NameSchema = zod_1.z
    .string()
    .trim()
    .min(1, "You must insert a name before sending message.")
    .max(128, "A name must not exceed 128 characters.");
exports.EmailSchema = zod_1.z
    .string()
    .trim()
    .toLowerCase()
    .pipe(zod_1.z.email("Must be a valid email address."));
exports.MessageSchema = zod_1.z
    .string()
    .trim()
    .min(1, "You must insert a message before sending.");
//# sourceMappingURL=Message.constants.js.map