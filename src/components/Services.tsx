import Link from "next/link";

export default function Services() {
  return (
    // Main Wrapper
    <section id="services" className="relative w-full max-w-5xl mx-auto px-6 py-24">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          What We Do
        </h2>
        <p className="text-zinc-400 mt-4 text-lg max-w-xl">
          We strip away the fat and focus on high-impact services that bring local customers straight to your door.
        </p>
      </div>

      {/* Sticky Cards Container */}
      <div className="relative flex flex-col gap-6 pb-32">
        
        {/* 1. Large Card (Featured - Web Design) */}
        <div className="sticky top-24 md:top-32 w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 z-10 transition-all">
          <div className="flex-1 flex gap-6">
            <span className="text-zinc-800 text-7xl md:text-9xl font-black leading-none select-none">
              1
            </span>
            <div className="mt-2 md:mt-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Web Design
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-xl text-base md:text-lg mb-6">
                Unleash your brand's potential with a custom, high-converting design. No templates. No bloat. Just pure aesthetics that turn local visitors into paying customers.
              </p>
              <ul className="space-y-3 text-zinc-300 font-medium">
                 <li className="flex items-center gap-3"><span className="text-zinc-500">+</span> Custom Branding Integration</li>
                 <li className="flex items-center gap-3"><span className="text-zinc-500">+</span> Mobile-First Experiences</li>
                 <li className="flex items-center gap-3"><span className="text-zinc-500">+</span> Conversion-Optimized UI</li>
              </ul>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto mt-6 md:mt-0">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center w-full md:w-auto bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* The Grid for remaining basic cards */}
        {/* We make this grid sticky as well, so it slides over Card 1 like a deck of cards! */}
        <div className="sticky top-28 md:top-40 z-20 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all">

          {/* 2. Web Development */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-6 left-6 text-zinc-800/40 text-8xl font-black pointer-events-none select-none z-0 transition-transform group-hover:scale-110">2</div>
            <div className="relative z-10 pl-16">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Web Development</h3>
              <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Full-Stack Next.js Builds</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Blazing Fast Performance</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Secure & Scalable Architecture</li>
              </ul>
            </div>
          </div>

          {/* 3. AI Ads */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-6 right-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]">New</span>
            </div>
            <div className="absolute top-6 left-6 text-zinc-800/40 text-8xl font-black pointer-events-none select-none z-0 transition-transform group-hover:scale-110">3</div>
            <div className="relative z-10 pl-16">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">AI Ads Creation</h3>
              <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Hyper-Targeted Campaigns</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> AI-Generated High-Converting Copy</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Continuous A/B Testing</li>
              </ul>
            </div>
          </div>

          {/* 4. SEO Optimization */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-6 left-6 text-zinc-800/40 text-8xl font-black pointer-events-none select-none z-0 transition-transform group-hover:scale-110">4</div>
            <div className="relative z-10 pl-16">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">SEO Optimization</h3>
              <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Local SEO Domination</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> On-page & Technical Audits</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> High-Intent Keyword Strategy</li>
              </ul>
            </div>
          </div>

          {/* 5. Social Media Management */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-6 left-6 text-zinc-800/40 text-8xl font-black pointer-events-none select-none z-0 transition-transform group-hover:scale-110">5</div>
            <div className="relative z-10 pl-16">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Social Media Management</h3>
              <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Strategic Content Planning</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Community Engagement</li>
                <li className="flex items-start gap-3"><span className="text-zinc-600 mt-0.5">+</span> Organic Follower Growth</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Empty space block just to force scrolling so you can test the sticky effect locally */}
        <div className="h-[50vh] flex items-center justify-center border border-dashed border-zinc-800/30 rounded-3xl mt-8 sticky top-[50%] z-0">
            <p className="text-zinc-600 font-mono text-sm opacity-50">Keep scrolling to see the stack effect</p>
        </div>

      </div>
    </section>
  );
}
