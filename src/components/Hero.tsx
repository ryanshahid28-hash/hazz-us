import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-zinc-950">
      
      {/* Background Glow / Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-500/15 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Trust Badge / Availability */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-zinc-900 border border-zinc-800 shadow-[0_0_15px_rgba(34,211,238,0.05)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[11px] md:text-xs font-semibold text-zinc-300 tracking-wider uppercase">
            Accepting New Local Clients
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          You always HAZZ-US behind <br className="hidden sm:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Local Businesses</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed font-medium">
          Stop worrying about the tech side. We handle your Web Design, SEO, and AI Ads so you can focus on what matters most: running your business.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-sm md:text-base font-bold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <Link 
            href="#services" 
            className="w-full sm:w-auto bg-transparent hover:bg-zinc-900 text-white border border-zinc-700 hover:border-zinc-500 text-sm md:text-base font-semibold px-8 py-3.5 rounded-full transition-all text-center"
          >
            View Our Services
          </Link>
        </div>
        
        {/* Social Proof (Minimal Placeholder) */}
        <div className="mt-20 pt-8 border-t border-zinc-800/50 w-full flex flex-col items-center">
          <p className="text-xs text-zinc-500 font-semibold mb-6 tracking-widest uppercase">Trusted by businesses in your city</p>
          <div className="flex gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-opacity duration-300 flex-wrap justify-center items-center">
             <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Little Arabia</span>
             <span className="text-xl md:text-2xl font-bold tracking-widest font-serif text-cyan-400">Lume Leafs</span>
             <span className="text-xl md:text-2xl font-semibold tracking-wide text-zinc-300 uppercase">Golden Fancy</span>
          </div>
        </div>

      </div>
    </section>
  );
}
