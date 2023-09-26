"use client";

import { cn } from "@/lib/utils";
import {
  Code2Icon,
  ImageIcon,
  ImageMinus,
  LayoutDashboard,
  MessageCircleIcon,
  MessageSquareIcon,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const montsserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-purple-500",
  },
  {
    label: "Chat",
    icon: MessageSquareIcon,
    href: "/chat",
    color: "text-blue-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-green-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-yellow-500",
  },
  {
    label: "Audio Generation",
    icon: MusicIcon,
    href: "/audio",
    color: "text-orange-500",
  },
  {
    label: "Code Generation",
    icon: Code2Icon,
    href: "/code",
    color: "text-red-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-2 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-2 flex flex-col justify-start items-start flex-1">
        <Link href="/dashboard" className="flex w-full items-center justify-center gap-4 mb-16 mt-6">
          <div className="relative w-16 h-8 ">
            <Image fill alt="Logo" src="/logo-new.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montsserrat.className)}>
            Munab AI
          </h1>
        </Link>
        <div className="space-y-3 text-zinc-400 ps-[5%]">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "group flex p-3 w-full justify-start cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all duration-150",
                  pathname === route.href ? "bg-white/10 text-white" : ""
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-8 w-8 mr-3", route.color)} />
                  <p className="text-xl font-semibold">{route.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
