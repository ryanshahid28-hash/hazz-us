import Link from "next/link";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="w-full bg-zinc-950 mt-32 relative">

      {/* 
        ========================================
        Final CTA Section 
        ========================================
      */}
      <div className="relative max-w-5xl mx-auto px-6 mb-24 z-20">
        <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl flex flex-col items-center group">
          {/* Subtle background glow hidden exactly behind the text that swells on hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-700 rounded-full blur-[80px] pointer-events-none" />

          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Ready to upgrade your <br className="hidden md:block" /> business?
          </h2>

          <button
            type="button"
            onClick={onOpenContact}
            className="relative z-10 inline-block bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-xl font-black px-12 py-5 rounded-full transition-all shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] hover:scale-105 cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* 
        ========================================
        The Footer Section
        ========================================
      */}
      <div className="border-t border-zinc-800/50 pt-16 pb-8 bg-black/20">
        {/* We use CSS Grid on large screens, dropping into Flex-Col on mobile */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Left Side: Logo & Mission (- Stacks FIRST on Mobile) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="text-white text-2xl font-black italic tracking-widest uppercase mb-4"
            >
              HAZZ<span className="text-cyan-400">-</span>US
            </Link>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm font-medium">
              We design, build, and scale high-performing digital presences for your business if you value growth over guesswork.
            </p>
          </div>

          {/* Middle: Quick Links (- Stacks SECOND on Mobile) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#services" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Services</Link></li>
              <li><Link href="#work" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Our Work</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Right Side: Contact & Social (- Stacks THIRD on Mobile) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="flex flex-col gap-3 mb-6">
              <li>
                <a href="mailto:hazzus17@gmail.com" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hazzus17@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 8608640695 | 9365829579
                </a>
              </li>
            </ul>

            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <a href="#" className="text-zinc-600 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="text-zinc-600 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="max-w-5xl mx-auto px-6 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            &copy; 2026 HAZZ-US. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
