import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 5000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello from server pern stack"));

app.post("/add", async (req, res) => {
  try {
    const newUser = await prisma.MyNewUser.create({
      data: { username: req.body.username },
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const fetchUsers = await prisma.MyNewUser.findMany();
    res.status(200).json(fetchUsers);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
