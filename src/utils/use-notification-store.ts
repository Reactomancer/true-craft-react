import { useSyncExternalStore } from "react";
import { createExternalStore } from "./create-external-store";

export type NotificationId = string;

export type NotificationVariants = "success" | "error" | "info" | "warning";

export interface BaseNotification {
  title: string;
  message?: string;
  variant: NotificationVariants;
  animationDuration?: string;
}

export interface Notification extends BaseNotification {
  id: NotificationId;
}

const notificationsInitialState: Notification[] = [];
const maximumNotifications = 3;
const autoHideDuration = 5000;

export const notificationsStore = createExternalStore({
  initialState: notificationsInitialState,
  actions: ({ setState }) => ({
    push: (draft, notification: BaseNotification) => {
      let newState = [...draft];

      if (newState.length === maximumNotifications) {
        newState = draft.filter(
          (notification) => notification.id !== draft[0]?.id
        );
      }

      const newNotificationId = new Date().getTime().toString();
      const newNotification = {
        ...notification,
        id: newNotificationId,
        animationDuration:
          notification.animationDuration ?? `${autoHideDuration}ms`,
      };

      newState.push(newNotification);

      setTimeout(() => {
        setState((previousState) =>
          previousState.filter(
            (notification) => notification.id !== newNotificationId
          )
        );
      }, autoHideDuration);

      return newState;
    },
    pop: (_, notificationId: string) => {
      setState((previousState) =>
        previousState.filter(
          (notification) => notification.id !== notificationId
        )
      );
    },
  }),
});

export const useNotificationsStore = () =>
  useSyncExternalStore(
    notificationsStore.subscribe,
    notificationsStore.getSnapshot,
    notificationsStore.getServerSnapshot
  );
