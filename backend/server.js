import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.get("/", (req, res) => {
  res.send("Backend Gemini attivo");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(message);

    const reply = result.response.text();

    res.json({
      reply
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      reply: "Errore Gemini"
    });

  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server avviato");
});
