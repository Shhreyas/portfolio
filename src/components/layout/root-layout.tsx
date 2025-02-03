import React from "react"
import { Inter } from "next/font/google"
import { NavigationMenu } from "./navigation-menu"

const inter = Inter({ subsets: ["latin"] })

export function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <NavigationMenu />
        <main className="container mx-auto px-4 py-8 pt-24">{children}</main>
      </div>
    </div>
  )
}

