import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import path from "path";
dotenv.config();

import * as kitchenData from "./data/kitchenData.json";
import * as wardrobeData from "./data/wardrobeData.json";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost",
  })
);
app.use(bodyParser.json());
// app.use(express.static(path.resolve(__dirname, "../client/dist")));
const PORT = process.env.PORT || 8000;

app.post("/api", async (req: Request, res: Response) => {
  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.PUBLIC_KEY,
    accessToken: process.env.PRIVATE_KEY,
    template_params: req.body,
  };
  const options = {
    method: "POST",
    url: "https://emailjs.p.rapidapi.com/api/v1.0/email/send",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "emailjs.p.rapidapi.com",
    },
    data: JSON.stringify(data),
  };
  try {
    await axios.request(options);
    res.status(200).end();
  } catch (e) {
    res.status(403);
  }
});
app.get("/kitchens", (req, res) => {
  res.status(200).json(kitchenData);
});

app.get("/wardrobes", (req, res) => {
  res.status(200).json(wardrobeData);
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
