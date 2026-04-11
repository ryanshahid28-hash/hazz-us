"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      {/* Main Pill Container */}
      <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-white text-xl font-black italic tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          HAZZ<span className="text-cyan-400">-</span>US
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="#about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle Dropdown Button */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-4 shadow-xl backdrop-blur-md">
          <Link href="#services" className="text-zinc-300 hover:text-cyan-400 font-medium p-2 transition-colors" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#work" className="text-zinc-300 hover:text-cyan-400 font-medium p-2 transition-colors" onClick={() => setIsOpen(false)}>
            Our Work
          </Link>
          <Link href="#about" className="text-zinc-300 hover:text-cyan-400 font-medium p-2 transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#contact" className="bg-cyan-400 text-zinc-950 text-center font-bold px-6 py-3 rounded-xl mt-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
