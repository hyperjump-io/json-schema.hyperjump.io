let nextId = 0;

export type NotificationType = "info" | "warning" | "error";

export type Notification = {
  id: number;
  message: string;
  type: NotificationType;
  duration: number;
};

export let notifications: Notification[] = $state([]);

export const pushNotification = (
  message: string,
  type: NotificationType = "info",
  duration = 4000
) => {
  const id = nextId++;
  notifications.push({ id, message, type, duration });

  setTimeout(() => {
    dismissNotification(id);
  }, duration);
};

export const dismissNotification = (id: number) => {
  const index = notifications.findIndex((n) => n.id === id);
  if (index !== -1) {
    notifications.splice(index, 1);
  }
};
