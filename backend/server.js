const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

app.use(express.json()); // to accept json data

// const chats = require("./data/data");

app.get("/", (req, res) => {
  res.send("hi from server");
});

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chats/:id", (req, res) => {
//   const requestedChatId = req.params.id;
//   const chat = chats.find((chat) => chat._id === requestedChatId);
//   res.send(chat);
// });

app.use("/api/user", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3500;
app.listen(
  PORT,
  console.log(`Server listening on port number ${PORT}`.yellow.bold)
);
