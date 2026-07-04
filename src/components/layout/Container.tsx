import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
};
