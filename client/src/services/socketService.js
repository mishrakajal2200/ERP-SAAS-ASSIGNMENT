// src/services/socketService.js

import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (token) => {
  socket = io(
    import.meta.env.VITE_SOCKET_URL || 
    "http://localhost:5000",
    {
      auth: {
        token,
      },
    }
  );

  socket.on("connect", () => {
    console.log(
      "✅ Socket Connected:",
      socket.id
    );
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket Disconnected");
  });

  return socket;
};

export const getSocket = () => {
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};