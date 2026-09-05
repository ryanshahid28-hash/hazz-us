"use client";

import React from "react";
import TiltCard from "./TiltCard";

export default function Services() {
  return (
    <section id="services" className="relative w-full max-w-7xl mx-auto px-6 py-24 font-sans text-neutral-50 mb-32">

      
      {/* Structural Header */}
      <div className="mb-16 md:mb-24 text-left">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Our <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Services</span>
        </h2>
        <p className="mt-6 max-w-xl text-neutral-400 text-lg md:text-xl">
          Precision-engineered digital growth systems tailored for time-poor local business titans.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Web Design */}
        <TiltCard className="col-span-1 lg:col-span-2 group relative overflow-hidden rounded-[2rem] p-[2px] bg-neutral-900 min-h-[380px] shadow-2xl block border border-transparent">
          {/* Spinning Glow Flow Background */}
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_75%,#0ea5e9_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Inner Card Content */}
          <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-neutral-950 p-8 md:p-12 backdrop-blur-xl flex flex-col justify-between z-10 border border-neutral-950">
            <div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">Web Design</h3>
              <p className="text-lg leading-relaxed text-neutral-400 max-w-lg">
                Sleek, conversion-optimized interfaces that command authority and build instant trust with your local audience.
              </p>
            </div>
            <button className="relative overflow-hidden rounded-lg bg-neutral-800/50 px-8 py-4 text-sm font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 w-max mt-8">
              Learn More
            </button>
          </div>
        </TiltCard>

        {/* Card 2: Web Dev */}
        <TiltCard className="col-span-1 group relative overflow-hidden rounded-[2rem] p-[2px] bg-neutral-900 min-h-[380px] shadow-2xl border border-transparent">
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_75%,#0ea5e9_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-neutral-950 p-8 md:p-12 backdrop-blur-xl flex flex-col justify-between z-10 border border-neutral-950">
            <div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">Web Development</h3>
              <p className="text-base leading-relaxed text-neutral-400">
                High-performance, scalable architectures engineered for speed, security, and seamless mobile interactions.
              </p>
            </div>
            <button className="relative overflow-hidden rounded-lg bg-neutral-800/50 px-8 py-4 text-sm font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 w-max mt-8">
              Learn More
            </button>
          </div>
        </TiltCard>

        {/* Card 3: SEO Optimization */}
        <TiltCard className="col-span-1 group relative overflow-hidden rounded-[2rem] p-[2px] bg-neutral-900 min-h-[380px] shadow-2xl border border-transparent">
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_75%,#0ea5e9_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-neutral-950 p-8 md:p-12 backdrop-blur-xl flex flex-col justify-between z-10 border border-neutral-950">
            <div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">SEO Optimization</h3>
              <p className="text-base leading-relaxed text-neutral-400">
                Data-driven organic growth strategies that dominate local search rankings and capture high-intent traffic.
              </p>
            </div>
            <button className="relative overflow-hidden rounded-lg bg-neutral-800/50 px-8 py-4 text-sm font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10 hover:text-cyan-300 w-max mt-8">
              Learn More
            </button>
          </div>
        </TiltCard>

        {/* Card 4: AI Ads (Premium Tech Vibe) */}
        <TiltCard className="col-span-1 lg:col-span-2 group relative overflow-hidden rounded-[2rem] p-[2px] bg-neutral-900 min-h-[380px] shadow-2xl block border border-transparent">
          {/* Advanced Multi-color Spinning Glow for Premium Tier */}
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_40%,#8b5cf6_60%,#0ea5e9_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Inner Layer */}
          <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-neutral-950 p-8 md:p-12 backdrop-blur-xl flex flex-col justify-between z-10 border border-neutral-950 overflow-hidden">
            
            {/* Subtle inner grid pattern for AI tech feel */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(10,10,10,0.8)_100%),url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] bg-repeat opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-4 py-1 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-bold uppercase tracking-widest text-violet-400">
                Ultimate Tier
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                AI Ads Creation
              </h3>
              
              <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-xl mb-8 leading-relaxed">
                For businesses serious about dominating their local market with laser-targeted, strictly AI-optimized ad campaigns.
              </p>
              
              <ul className="space-y-4 text-neutral-300 font-medium mb-8">
                <li className="flex items-center gap-3"><span className="text-violet-500 text-xl font-bold">+</span> Everything in standard packages</li>
                <li className="flex items-center gap-3"><span className="text-violet-500 text-xl font-bold">+</span> Dedicated Campaign Tracking</li>
                <li className="flex items-center gap-3"><span className="text-violet-500 text-xl font-bold">+</span> Exclusive High-Intent Leads</li>
              </ul>
            </div>
            
            <button className="relative z-10 bg-violet-600 text-white font-bold py-4 px-10 text-lg rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all w-full md:w-max uppercase tracking-wider mt-auto border border-violet-400/50">
              Transform Your Growth
            </button>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
