import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN ?? "http://localhost:3000" }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
  console.log(`MurdoCodes API listening on port ${PORT}`);
});
