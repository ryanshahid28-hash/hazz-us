"use client";

import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Close modal on 'Escape' key press & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl my-8 text-zinc-100 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            Start A Project
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let's Talk About Your Next Big Move
          </h2>
          <p className="text-sm text-zinc-400 mt-2 font-medium">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form action="" onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@company.com"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Phone Number <span className="text-zinc-500 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Company / Brand <span className="text-zinc-500 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Acme Inc."
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>
          </div>

          {/* Row 3: Service Needed & Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Service Needed <span className="text-cyan-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              >
                <option value="" disabled className="bg-zinc-900 text-zinc-500">
                  Select a Service
                </option>
                <option value="Web Design" className="bg-zinc-900 text-white">Web Design</option>
                <option value="Web Development" className="bg-zinc-900 text-white">Web Development</option>
                <option value="SEO Optimization" className="bg-zinc-900 text-white">SEO Optimization</option>
                <option value="AI Ads" className="bg-zinc-900 text-white">AI Ads</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
                Budget Range <span className="text-zinc-500 font-normal lowercase">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              >
                <option value="" disabled className="bg-zinc-900 text-zinc-500">
                  Select Budget Range
                </option>
                <option value="< ₹3k" className="bg-zinc-900 text-white">Less than ₹3,000</option>
                <option value="₹5k - ₹8k" className="bg-zinc-900 text-white">₹5,000 - ₹8,000</option>
                <option value="₹8k - ₹15k" className="bg-zinc-900 text-white">₹8,000 - ₹15,000</option>
                <option value="₹20k+" className="bg-zinc-900 text-white">Above ₹20,000</option>
              </select>
            </div>
          </div>

          {/* Row 4: Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase text-zinc-300 mb-2 tracking-wider">
              Project Details <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              required
              rows={4}
              placeholder="Tell us about your goals, timelines, and requirements..."
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-extrabold text-base py-4 rounded-xl transition-all shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
