"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled,    setScrolled]   = useState(false);
  const [active,      setActive]     = useState("");
  const [mobileOpen,  setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const goto = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#14161A]/90 backdrop-blur-xl border-b border-[#2A313C]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* Logo — text only, no pill */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[1.1rem] font-semibold text-[#F3F4F6] tracking-tight hover:text-[#3B82F6] transition-colors"
          >
            Nakul Makol
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => goto(item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-[0.92rem] font-medium transition-all duration-200",
                  active === item.href
                    ? "text-[#F3F4F6] bg-[#1C2128]"
                    : "text-[#A1AAB8] hover:text-[#F3F4F6] hover:bg-[#1A1D23]"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg border border-[#2A313C] flex items-center justify-center text-[#A1AAB8]"
              aria-label="Dark mode"
            >
              <Moon className="w-4 h-4" />
            </div>

            <a
              href="/resume.pdf"
              download="Nakul_Makol_Resume.pdf"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[0.88rem] font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg border border-[#2A313C] flex items-center justify-center text-[#A1AAB8]"
              aria-label="menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#14161A]/95 backdrop-blur-xl border-b border-[#2A313C] md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => goto(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-[0.92rem] text-[#A1AAB8] hover:text-[#F3F4F6] hover:bg-[#1A1D23] transition-all"
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf" download
                className="flex items-center gap-2 mt-2 px-4 py-3 text-[0.92rem] text-[#3B82F6]"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
