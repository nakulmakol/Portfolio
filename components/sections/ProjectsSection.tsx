"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/data";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

type Project = typeof projects[number];

export function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-5xl mx-auto">

        <motion.p {...fadeUp()} className="eyebrow mb-3">Selected Work</motion.p>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[2.8rem] sm:text-[3.5rem] font-bold tracking-tight mb-20"
          style={{ color: "#F3F4F6" }}
        >
          Two projects I&apos;d want<br />you to read closely.
        </motion.h2>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <motion.div key={p.id} {...fadeUp(0.1 + i * 0.1)}>
              <div className="grid lg:grid-cols-[2fr_3fr] gap-6 items-start">

                {/* ── Left col ── */}
                <div>
                  {/* Index */}
                  <p className="text-[1.05rem] font-mono mb-3" style={{ color: "#A1AAB8", opacity: 0.4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="text-[2rem] sm:text-[2.4rem] font-bold mb-3 leading-tight" style={{ color: "#F3F4F6" }}>
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[1rem] leading-relaxed mb-6" style={{ color: "#A1AAB8" }}>
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="skill-pill">{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="skill-pill">+{p.tech.length - 4} more</span>
                    )}
                  </div>

                  {/* ── Links — both Visit site AND View repo ── */}
                  <div className="flex flex-wrap gap-5">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.9rem] font-medium transition-colors"
                        style={{ color: "#A1AAB8" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3B82F6")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1AAB8")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit site
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.9rem] font-medium transition-colors"
                        style={{ color: "#A1AAB8" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#7C3AED")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1AAB8")}
                      >
                        <Github className="w-4 h-4" />
                        View repo
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Right col — bullet panel ── */}
                <div className="card-dark p-7">
                  <ul className="space-y-4 mb-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[1rem] leading-relaxed" style={{ color: "#A1AAB8" }}>
                        {/* Blue accent bullet */}
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                          style={{ background: "#3B82F6", opacity: 0.75 }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technical details accordion */}
                  <button
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    className="flex items-center gap-2 text-[0.83rem] transition-colors"
                    style={{ color: "#A1AAB8" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3B82F6")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1AAB8")}
                  >
                    {expanded === p.id
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />}
                    Technical details
                  </button>

                  <AnimatePresence>
                    {expanded === p.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="mt-4 text-[0.88rem] leading-relaxed pt-4"
                          style={{ color: "#A1AAB8", opacity: 0.75, borderTop: "1px solid #2A313C" }}
                        >
                          {p.architecture}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {p.features.slice(0, 4).map((f) => (
                            <span
                              key={f}
                              className="px-2.5 py-1 rounded-lg text-[0.76rem] font-mono"
                              style={{ border: "1px solid #2A313C", background: "#1A1D23", color: "#A1AAB8", opacity: 0.7 }}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
