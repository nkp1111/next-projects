import { notifications } from "@mantine/notifications";
export function showNotification(
  { title, message, loading = false, error = false }
    : { title: string, message: string, loading?: boolean, error?: boolean }
) {
  notifications.show({
    withCloseButton: true,
    autoClose: !loading && 4000,
    title,
    message,
    loading,
    color: error ? "red" : "blue",
  })
}


export function hideNotification() {
  notifications.clean();
}