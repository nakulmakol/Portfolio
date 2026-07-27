"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github, FileText } from "lucide-react";
import { personal } from "@/lib/data";

// 4-column link grid exactly like image 4
const links = [
  { label: "LINKEDIN", name: "Nakul Makol",   href: personal.linkedin,          Icon: Linkedin, download: undefined },
  { label: "EMAIL",    name: "Mail",           href: `mailto:${personal.email}`, Icon: Mail,     download: undefined },
  { label: "GITHUB",   name: "NakulMakol",    href: personal.github,            Icon: Github,   download: undefined },
  { label: "RESUME",   name: "Resume",         href: "/resume.pdf",              Icon: FileText, download: "Nakul_Makol_Resume.pdf" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-5xl mx-auto">

        {/* Header row */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14"
        >
          <div className="flex items-center gap-3">
            <span style={{ color: "#3B82F6", fontSize: "1.2rem" }}>◆</span>
            <span className="eyebrow">Connect</span>
          </div>
          <p
            className="text-[1rem] max-w-sm sm:text-right leading-relaxed"
            style={{ color: "#A1AAB8" }}
          >
            Looking for opportunities to build meaningful software, learn continuously,
            and grow alongside exceptional teams.
          </p>
        </motion.div>

        {/* 4-column bordered grid — image 4 */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #2A313C", background: "#1C2128" }}
        >
          {links.map(({ label, name, href, Icon, download }, i) => (
            <a
              key={label}
              href={href}
              target={download || href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              download={download}
              className="flex flex-col gap-3 p-7 group transition-all"
              style={{
                borderRight: i < 3 ? "1px solid #2A313C" : "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#202830")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              {/* Upper label */}
              <p
                className="text-[0.68rem] font-bold tracking-[0.2em] uppercase"
                style={{ color: "#A1AAB8", opacity: 0.5 }}
              >
                {label}
              </p>
              {/* Icon + name */}
              <div
                className="flex items-center gap-2.5 text-[1.05rem] font-bold transition-colors"
                style={{ color: "#F3F4F6" }}
              >
                {/* Accent blue icons */}
                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: "#3B82F6" }} />
                {name}
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
