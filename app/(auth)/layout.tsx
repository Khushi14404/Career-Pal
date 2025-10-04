import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="flex justify-center pt-40">{children}</div>;
}
