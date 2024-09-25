"use client";
import toast, { ToastOptions } from "react-hot-toast";

type NotificationType = "error" | "success" | "default" | "warning";

type Props = Pick<ToastOptions, "icon"> & {
  message: string;
  type: NotificationType;
  key?: string;
};

const notificationStyles: { [key in NotificationType]: string } = {
  default: "bg-slate-300 text-slate-800",
  success: "bg-green-300 text-slate-800",
  warning: "bg-amber-300 text-slate-800",
  error: "bg-red-300 text-slate-800",
};

const notificationDuration: { [key in NotificationType]: number } = {
  default: 5000,
  success: 2000,
  warning: 4000,
  error: 4000,
};

export const showToast = (props: Props) => {
  const { type, message, icon, key } = props;

  const content = (
    <div
      data-id={key}
      className={`flex h-full items-center gap-2 p-4 shadow md:p-6 rounded-sm ${notificationStyles[type]}`}
    >
      <div>{message}</div>
    </div>
  );

  // toast(message);
  toast.custom(content, {
    icon: icon,
    position: "top-right",
    duration: notificationDuration[type],
  });
};

export const dismissToast = () => toast.dismiss();
