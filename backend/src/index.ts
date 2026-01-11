import express from "express";
import cors from "cors";
import prisma from "./prisma.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json({ status: "OK", users });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
