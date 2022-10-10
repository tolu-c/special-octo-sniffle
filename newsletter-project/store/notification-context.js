import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const notificationValue = {
    activeNotification,
    showNotificationHandler,
    hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={notificationValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
