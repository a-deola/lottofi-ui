// components/Notification.tsx
"use client";
import { useEffect } from "react";

interface NotificationProps {
  message: string;
  link?: { href: string; label: string };
  onClose: () => void;
  duration?: number;
  type?: "success" | "error" | "info";
}

const bgStyles = {
  success: "text-green-600",
  error: "text-red-600",
  info: "text-blue-600",
};

export default function Notification({
  message,
  link,
  onClose,
  duration = 5000,
  type = "success",
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`z-50 ${bgStyles[type]} flex flex-col justify-center items-center absolute top-5 left-1/2 -translate-x-1/2  bg-white w-[300px] p-4 rounded shadow-md`}
    >
      <button
        onClick={onClose}
        className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 text-lg"
      >
        &times;
      </button>
      <p className="text-center">{message}</p>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 mt-1"
        >
          {link.label}
        </a>
      )}
    </div>
  );
}
