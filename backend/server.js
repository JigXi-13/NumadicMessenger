const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const { Server } = require("socket.io");

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
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
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3500;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);

const io = new Server(server, {
  /* options */
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Chat Room: " + room);
  });

  socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      // we do not have to broadcast the message to ourself
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
