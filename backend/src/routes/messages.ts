import { Router } from "express";
import cors from "cors";
import { pool } from "../db"
import { CreateMessageInputSchema } from "../lib/messages/Message.schema";
import z from "zod";
import { createMessage } from "../lib/messages/Message.service";

const router = Router();

router.post("/", async (_req, _res, _next) => {
    const parsed = CreateMessageInputSchema.safeParse(
        _req.body
    );

    if (!parsed.success) {
        _res.status(400).json({
            error: "Invalid input",

            fields: z.flattenError(
                parsed.error
            ).fieldErrors,
        });

        return;
    }

    try {
        const message = await createMessage(
            parsed.data
        );

        _res.status(201).json(
            message
        );
    } catch (error) {
        _next(error);
    }
});

export default router;