const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("API running on 5000");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Up at PORT ${PORT}!!`));
