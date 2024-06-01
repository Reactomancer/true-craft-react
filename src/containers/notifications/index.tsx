import { FC } from "react";

import styles from "./index.module.scss";
import { Notification } from "./notification";
import { useNotificationsStore } from "../../utils/use-notification-store";

export const NotificationsContainer: FC = () => {
  const notifications = useNotificationsStore();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <ul className={styles.notifications_container}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </ul>
  );
};
