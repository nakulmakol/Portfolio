"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-5xl mx-auto">

        <motion.p {...fadeUp()} className="eyebrow mb-3">Experience</motion.p>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[2.8rem] sm:text-[3.5rem] font-bold tracking-tight mb-20"
          style={{ color: "#F3F4F6" }}
        >
          Where I&apos;ve worked.
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div key={exp.id} {...fadeUp(0.1 + i * 0.1)}>
              <div className="card-dark p-8">

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    {/* Company in accent blue */}
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "#3B82F6" }}>
                      {exp.company}
                    </p>
                    <h3 className="text-[1.55rem] font-bold" style={{ color: "#F3F4F6" }}>{exp.role}</h3>
                  </div>
                  <span
                    className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium capitalize"
                    style={{ border: "1px solid #2A313C", background: "#1A1D23", color: "#A1AAB8" }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-5 mb-6 text-[0.88rem]" style={{ color: "#A1AAB8" }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3.5 mb-7">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex gap-3 text-[1rem] leading-relaxed" style={{ color: "#A1AAB8" }}>
                      {/* Accent blue dot */}
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#3B82F6", opacity: 0.7 }} />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-[0.8rem] font-mono"
                      style={{ border: "1px solid #2A313C", background: "#1A1D23", color: "#A1AAB8" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
