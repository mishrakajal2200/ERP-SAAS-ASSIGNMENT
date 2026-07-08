import { createContext, useEffect } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

let socket; // ✅ stable singleton outside component

export const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;