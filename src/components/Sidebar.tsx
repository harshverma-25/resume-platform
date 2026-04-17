"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  Globe, 
  Settings,
  PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/builder", label: "Build Resume", icon: PlusCircle },
  { href: "/resumes", label: "My Resumes", icon: FileText },
  { href: "/ats-checker", label: "ATS Checker", icon: Search },
  { href: "/feed", label: "Community", icon: Globe },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-neutral-800 flex flex-col h-screen fixed left-0 top-0 bg-black/50 backdrop-blur-xl z-50">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-bold">R</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Antigravity</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-white text-black font-semibold" 
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-black" : "text-neutral-400 group-hover:text-white")} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">My Account</span>
            <span className="text-xs text-neutral-500">View profile</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
