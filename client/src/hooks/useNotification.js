// src/hooks/useNotification.js

import { useContext } from "react";
import NotificationContext from "../context/NotificationContext";

const useNotification = () => {
  return useContext(NotificationContext);
};

export default useNotification;