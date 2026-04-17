import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "purple" | "neutral" | "red";
  className?: string;
}

export const Badge = ({ children, variant = "neutral", className }: BadgeProps) => {
  const styles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    neutral: "bg-neutral-900 text-neutral-400 border-neutral-800",
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border",
      styles[variant],
      className
    )}>
      {children}
    </span>
  );
};
