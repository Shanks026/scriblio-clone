import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:3001");

    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, []);

  const getSocket = () => socketRef.current;

  return { getSocket };
};
