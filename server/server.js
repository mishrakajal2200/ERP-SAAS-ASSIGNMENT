import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);


const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});


const startServer = async () => {
  await connectDB();

  httpServer.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();

