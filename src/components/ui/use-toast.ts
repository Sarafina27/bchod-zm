// src/hooks/use-toast.ts
import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); // auto-hide after 3s
  };

  return { message, showToast };
}

// Optional helper if you want a quick global toast trigger
export function toast(msg: string) {
  // For now, just use alert — later you can replace this with Radix Toast or a custom UI
  alert(msg);
}