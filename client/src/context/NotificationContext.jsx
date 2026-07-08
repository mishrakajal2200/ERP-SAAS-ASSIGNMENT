// src/context/NotificationContext.jsx

import { createContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;