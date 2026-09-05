"use client";

import React, { useEffect, useState } from "react";
import TiltCard from "./TiltCard";

// Matrix glyph characters for flip effect
const MATRIX_CHARS = "0123456789ABCDEFΞΨΩ010101<>$/#%&*+=~";

interface MatrixFlipTitleProps {
  text: string;
  resolvedCount?: number;
  className?: string;
}

function MatrixFlipTitle({ text, resolvedCount = 3, className = "" }: MatrixFlipTitleProps) {
  const [displayChars, setDisplayChars] = useState<string[]>(text.split(""));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayChars((prev) =>
        text.split("").map((char, index) => {
          if (char === " ") return " ";
          if (index < resolvedCount) return char;
          // Mid-transformation flip through matrix glyphs
          return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        })
      );
    }, 80);

    return () => clearInterval(interval);
  }, [text, resolvedCount]);

  return (
    <div className={`font-mono inline-flex flex-wrap items-center gap-[1px] tracking-tight ${className}`}>
      {text.split("").map((char, i) => {
        const isResolved = i < resolvedCount || char === " ";
        const isFlipping = !isResolved;
        return (
          <span
            key={i}
            className={`relative inline-block transition-all duration-150 ${
              isResolved
                ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] font-bold"
                : "text-cyan-300/80 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] font-mono animate-pulse"
            }`}
          >
            {/* Matrix Rain vertical micro-trail effect for flipping chars */}
            {isFlipping && (
              <span className="absolute -top-4 left-0 text-[10px] text-cyan-500/40 pointer-events-none select-none overflow-hidden">
                {MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]}
              </span>
            )}
            <span className={isFlipping ? "inline-block transform scale-y-110 border-b border-cyan-400/50" : ""}>
              {displayChars[i] || char}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full max-w-7xl mx-auto px-6 py-24 font-sans text-neutral-50 mb-32 overflow-hidden">
      {/* Background Circuit Grid & Cyan/Blue/Magenta Glow Traces */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Circuit Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08)_0%,transparent_70%),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glowing Lines (Cyan, Blue, Magenta) */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-magenta-500/15 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(217, 70, 239, 0.15)' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px]" />
      </div>

      {/* Structural Header */}
      <div className="relative z-10 mb-16 md:mb-20 text-left">
        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold tracking-widest text-cyan-400 uppercase">
          Futuristic Digital Solutions
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white">
          Our <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">Services</span>
        </h2>
        <p className="mt-4 max-w-xl text-neutral-400 text-lg md:text-xl">
          Precision-engineered digital growth systems featuring live matrix character transformation architecture.
        </p>
      </div>

      {/* Bento Grid Layout - 4 Semi-Transparent Dark Gray Container Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Web Design (Span 2) */}
        <TiltCard className="col-span-1 lg:col-span-2 group relative overflow-hidden rounded-3xl p-[1px] bg-neutral-800/60 backdrop-blur-2xl min-h-[360px] shadow-2xl border border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-500">
          {/* Edge Illumination (Cyan/Blue) */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          
          <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-neutral-900/80 p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between z-10">
            <div>
              {/* Matrix Rain / Flip Code Service Title */}
              <div className="mb-4 text-3xl md:text-4xl font-extrabold">
                <MatrixFlipTitle text="Web Design" resolvedCount={3} />
              </div>
              <p className="text-base md:text-lg leading-relaxed text-neutral-300 max-w-xl">
                Sleek, conversion-optimized interfaces that command authority and build instant trust with your local audience through high-impact visual design.
              </p>
            </div>
            <div className="mt-8">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/40">
                Learn More
              </button>
            </div>
          </div>
        </TiltCard>

        {/* Card 2: Web Development (Span 1) */}
        <TiltCard className="col-span-1 group relative overflow-hidden rounded-3xl p-[1px] bg-neutral-800/60 backdrop-blur-2xl min-h-[360px] shadow-2xl border border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-500">
          {/* Edge Illumination */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/40 via-cyan-500/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

          <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-neutral-900/80 p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between z-10">
            <div>
              <div className="mb-4 text-3xl font-extrabold">
                <MatrixFlipTitle text="Web Development" resolvedCount={4} />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-neutral-300">
                High-performance, scalable architectures engineered for lightning speed, robust security, and seamless mobile interactions.
              </p>
            </div>
            <div className="mt-8">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/40">
                Learn More
              </button>
            </div>
          </div>
        </TiltCard>

        {/* Card 3: SEO Optimization (Span 1) */}
        <TiltCard className="col-span-1 group relative overflow-hidden rounded-3xl p-[1px] bg-neutral-800/60 backdrop-blur-2xl min-h-[360px] shadow-2xl border border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-500">
          {/* Edge Illumination */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/40 via-magenta-500/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

          <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-neutral-900/80 p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between z-10">
            <div>
              <div className="mb-4 text-3xl font-extrabold">
                <MatrixFlipTitle text="SEO Optimization" resolvedCount={3} />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-neutral-300">
                Data-driven organic growth strategies that dominate search engine rankings and consistently capture high-intent client traffic.
              </p>
            </div>
            <div className="mt-8">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/40">
                Learn More
              </button>
            </div>
          </div>
        </TiltCard>

        {/* Card 4: AI Ads Creation (Span 2) with Purple ULTIMATE TIER tag */}
        <TiltCard className="col-span-1 lg:col-span-2 group relative overflow-hidden rounded-3xl p-[1px] bg-neutral-800/60 backdrop-blur-2xl min-h-[360px] shadow-2xl border border-neutral-800/80 hover:border-purple-500/60 transition-all duration-500">
          {/* Edge Illumination (Magenta/Purple/Cyan) */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-magenta-500/30 to-cyan-500/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

          <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-neutral-900/85 p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between z-10">
            <div>
              {/* Purple ULTIMATE TIER tag */}
              <div className="inline-block px-3.5 py-1 mb-4 rounded-full border border-purple-500/40 bg-purple-950/60 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                ULTIMATE TIER
              </div>

              <div className="mb-4 text-3xl md:text-4xl font-extrabold">
                <MatrixFlipTitle text="AI Ads Creation" resolvedCount={6} />
              </div>
              
              <p className="text-base md:text-lg leading-relaxed text-neutral-300 max-w-xl">
                For businesses serious about dominating their local market with laser-targeted, strictly AI-optimized dynamic ad campaigns.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/40">
                Learn More
              </button>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}

