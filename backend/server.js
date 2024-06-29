const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const chats = require("./data/data");

app.get("/", (req, res) => {
  res.send("hi from server");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const requestedChatId = req.params.id;
  const chat = chats.find((chat) => chat._id === requestedChatId);
  res.send(chat);
});

const PORT = process.env.PORT || 3500;
app.listen(3500, console.log(`Server listening on port number ${PORT}`));
