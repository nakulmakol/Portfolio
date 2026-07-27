"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { personal } from "@/lib/data";

const specialties = [
  "AI / ML Engineering",
  "Computer Vision",
  "Full-Stack Development",
  "RAG & NLP",
  "Data Analytics",
  "Software Development",
];

const aboutLinks = [
  { label: "Mail",     href: `mailto:${personal.email}`, Icon: Mail,     download: undefined },
  { label: "GitHub",   href: personal.github,             Icon: Github,   download: undefined },
  { label: "LinkedIn", href: personal.linkedin,           Icon: Linkedin, download: undefined },
  { label: "Resume",   href: "/resume.pdf",               Icon: FileText, download: "Nakul_Makol_Resume.pdf" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-4xl mx-auto">

        {/* Large body text */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <p className="text-[1.25rem] sm:text-[1.45rem] leading-relaxed font-normal" style={{ color: "#A1AAB8" }}>
            I build intelligent systems — from industrial computer vision pipelines to
            production-ready AI-powered web applications — that are fast, reliable, and
            easy to scale. My work spans production-ready software engineering and applied
            machine learning.{" "}
            <span style={{ color: "#F3F4F6", fontWeight: 600, textDecoration: "underline", textDecorationColor: "rgba(243,244,246,0.25)", textUnderlineOffset: "4px" }}>
              an AI/ML project
            </span>{" "}
            that brings practical ideas to life through clean code and real-world engineering.
          </p>
        </motion.div>

        {/* Specialty pill chips */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 mb-12">
          {specialties.map((s) => (
            <span key={s} className="spec-tag">{s}</span>
          ))}
        </motion.div>

        {/* Contact buttons */}
        <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-3">
          {aboutLinks.map(({ label, href, Icon, download }) => (
            <a
              key={label}
              href={href}
              target={download || href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              download={download}
              className="about-btn"
            >
              <Icon />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
