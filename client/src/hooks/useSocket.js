import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  autoConnect: true,
});

const useSocket = (eventName, callback) => {
  useEffect(() => {
    if (!eventName || !callback) return;

    socket.on(eventName, callback);

    return () => {
      socket.off(eventName, callback);
    };
  }, [eventName, callback]);

  return socket;
};

export default useSocket;