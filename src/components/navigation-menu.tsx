import React from "react"
import { Home, FolderKanban, Briefcase, Wrench, PenLine } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: Wrench },
  { name: "Contact", href: "/contact", icon: PenLine },
]

export function NavigationMenu() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform px-4 md:top-6 md:bottom-auto">
      <div className="flex items-center gap-1 rounded-[16px] bg-[#ffffff14] px-4 py-2 backdrop-blur-sm">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`
                group relative flex flex-col items-center justify-center px-3 py-2
                transition-all duration-300 ease-in-out
                hover:text-white
              `}
            >
              <Icon
                className={`
                  h-5 w-5 transition-all duration-300
                  ${isActive ? "text-white" : "text-gray-400"}
                `}
              />
              <span
                className={`
                  absolute bottom-0 text-xs opacity-0 transition-all duration-300
                  group-hover:-bottom-8 group-hover:opacity-100
                  ${isActive && " opacity-0"}
                  ${isActive ? "text-white" : "text-gray-400"}
                `}
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

