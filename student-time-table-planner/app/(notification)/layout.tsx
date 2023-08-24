"use client";

import { Notifications } from "@mantine/notifications";

export default function NotificationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Notifications position="top-center" />
      {children}
    </>
  )
}
