import express from "express";
import cors from "cors";

import messageRoutes from "./routes/messages";

const app = express();

const PORT = Number(process.env.PORT) || 5491;

app.use(cors());
app.use(express.json());

app.use("/api/messages", messageRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend listening on port ${PORT}`)
});