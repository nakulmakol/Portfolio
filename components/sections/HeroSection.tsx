"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/animations/AnimatedBackground";
import { TypeAnimation } from "react-type-animation";
import { personal } from "@/lib/data";

const typingSeq: (string | number)[] = [
  "AI/ML Engineer",          2200,
  "Software Developer",      2200,
  "Full Stack Developer",    2200,
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#14161A]">
      {/* Subtle blue-purple radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 85% 55% at 50% 42%, rgba(59,130,246,0.06) 0%, rgba(124,58,237,0.03) 60%, transparent 80%)"
      }} />
      <AnimatedBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow — from resume, exactly image-2 style */}
        <motion.p
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="eyebrow-hero mb-5"
        >
          Final Year Student&nbsp;·&nbsp;Thapar Institute&nbsp;·&nbsp;8.62 CGPA
        </motion.p>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 rounded-full border border-[#2A313C] bg-[#1C2128] text-[0.88rem] text-[#A1AAB8]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Available for internships &amp; full-time roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16,1,0.3,1] }}
          className="text-[3.6rem] sm:text-[5rem] lg:text-[6.5rem] font-bold tracking-tight leading-none mb-6"
        >
          <span style={{ color: "#F3F4F6" }}>Hi, I&apos;m </span>
          <span className="text-gradient">Nakul Makol</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-[1.4rem] sm:text-[1.7rem] font-medium mb-6 h-10"
          style={{ color: "#A1AAB8" }}
        >
          <TypeAnimation sequence={typingSeq} wrapper="span" speed={55} deletionSpeed={70} repeat={Infinity} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.54 }}
          className="text-[1rem] sm:text-[1.12rem] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "#A1AAB8" }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.66 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-9 py-3.5 rounded-xl font-semibold text-[1rem] text-white transition-all hover:-translate-y-0.5"
            style={{ background: "#3B82F6", boxShadow: "0 4px 24px rgba(59,130,246,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2563EB")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3B82F6")}
          >
            View my work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-9 py-3.5 rounded-xl font-semibold text-[1rem] transition-all hover:-translate-y-0.5"
            style={{ border: "1px solid #2A313C", background: "#1C2128", color: "#F3F4F6" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2A313C")}
          >
            Get in touch
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.82 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github,   href: personal.github,              label: "GitHub"   },
            { Icon: Linkedin, href: personal.linkedin,            label: "LinkedIn" },
            { Icon: Mail,     href: `mailto:${personal.email}`,   label: "Email"    },
          ].map(({ Icon, href, label }) => (
            <a
              key={label} href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer" aria-label={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid #2A313C", background: "#1C2128", color: "#A1AAB8" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#3B82F6";
                (e.currentTarget as HTMLElement).style.color = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A313C";
                (e.currentTarget as HTMLElement).style.color = "#A1AAB8";
              }}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors"
        style={{ color: "#A1AAB8" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3B82F6")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1AAB8")}
        aria-label="Scroll down"
      >
        <span className="text-[0.62rem] font-mono uppercase tracking-[0.28em]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
