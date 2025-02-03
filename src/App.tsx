import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavigationMenu } from "./components/navigation-menu"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
import "./styles/globals.css"

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <NavigationMenu />
        <main className="container mx-auto px-4 py-8 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

