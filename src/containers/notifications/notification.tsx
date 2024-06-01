import { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

import styles from "./index.module.scss";
import { IconButton } from "@mui/material";
import {
  notificationsStore,
  Notification as NotificationType,
} from "../../utils/use-notification-store";

interface NotificationProps {
  notification: NotificationType;
}

const iconsVariants: Record<NotificationType["variant"], ReactNode> = {
  error: <ErrorIcon className={styles.notification__icon__error} />,
  success: <CheckCircleIcon className={styles.notification__icon__success} />,
  info: undefined,
  warning: undefined,
};

const colorsVariants: Record<NotificationType["variant"], string | undefined> =
  {
    error: "red",
    success: "green",
    info: undefined,
    warning: undefined,
  };

const handleRemoveNotification = (id: string) => () => {
  notificationsStore.actions.pop(id);
};

export const Notification: FC<NotificationProps> = ({
  notification: { variant, message, animationDuration, id },
}) => (
  <li className={styles.notification}>
    <IconButton
      className={styles.notification__close_icon}
      onClick={handleRemoveNotification(id)}
    >
      <CloseIcon />
    </IconButton>
    {iconsVariants[variant]}
    <p className={styles.notification__text}>{message}</p>
    <div
      style={{
        backgroundColor: colorsVariants[variant],
        animationDuration,
      }}
      className={styles.notification__progress_bar}
    />
  </li>
);
