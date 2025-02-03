"use client"
import { Home, FolderKanban, Briefcase, Wrench, PenLine } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "../../lib/utils"
import React from "react"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: Wrench },
  { name: "Contact", href: "/contact", icon: PenLine },
]

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform px-4 md:top-6 md:bottom-auto">
      <div className="flex items-center gap-1 rounded-full bg-black/80 px-4 py-2 backdrop-blur-sm">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex flex-col items-center justify-center px-3 py-2",
                "transition-all duration-300 ease-in-out",
                "hover:text-white",
              )}
            >
              <Icon className={cn("h-5 w-5 transition-all duration-300", isActive ? "text-white" : "text-gray-400")} />
              <span
                className={cn(
                  "absolute -bottom-4 text-xs opacity-0 transition-all duration-300",
                  "group-hover:bottom-0 group-hover:opacity-100",
                  isActive && "bottom-0 opacity-100",
                  isActive ? "text-white" : "text-gray-400",
                )}
              >
                {item.name}
              </span>
              {isActive && <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300" />}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

