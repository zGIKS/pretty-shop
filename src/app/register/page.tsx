"use client";

import { Alert } from "@/components/ui/alert";
import LoginCard, { SignUpNotification } from "@/components/app/login/login-card";
import LoginIconPanel from "@/components/app/login/login-icon-panel";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [notification, setNotification] = useState<SignUpNotification | null>(
    null,
  );

  useEffect(() => {
    if (!notification) return;
    const timeout = window.setTimeout(() => setNotification(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [notification]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10">
      {notification ? (
        <div className="fixed right-4 sm:right-8 top-6 sm:top-10 z-40 w-full max-w-xs px-2 sm:px-0">
          <Alert
            variant={notification.type === "success" ? "success" : "destructive"}
            title={notification.title}
            description={notification.description}
          />
        </div>
      ) : null}

      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-24">
        <LoginCard onNotify={setNotification} />
        <LoginIconPanel />
      </div>
    </div>
  );
}
