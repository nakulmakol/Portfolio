"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

// education is a plain object — NOT an array. EducationSection.tsx was
// previously calling education.map(...) which threw a runtime error and
// blanked every section below the navbar.

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  };
}

export function EducationSection() {
  return (
    <section id="education" className="py-28 px-5 bg-[#070d1a]">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.p {...fadeUp()} className="section-label mb-3 text-center">Education</motion.p>
        <motion.h2 {...fadeUp(0.08)} className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Academic background
        </motion.h2>
        <motion.p {...fadeUp(0.14)} className="text-white/40 text-center mb-16 max-w-xl mx-auto">
          Building a strong engineering foundation with a specialisation in AI and intelligent systems.
        </motion.p>

        {/* Single education card — education is an object, not an array */}
        <motion.div {...fadeUp(0.2)}
          whileHover={{ y: -2 }}
          className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{education.institution}</h3>
                  <p className="text-indigo-400 font-medium">{education.degree}</p>
                </div>
                {education.gpa && (
                  <div className="text-center px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <p className="text-xl font-bold text-gradient">{education.gpa}</p>
                    <p className="text-xs text-white/40 font-mono">CGPA</p>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <p className="text-xs font-mono uppercase tracking-widest text-white/30">
                    Relevant Coursework
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-xs text-white/50 hover:border-indigo-500/30 hover:text-white/70 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Graduation note — "final year" not "3rd year" */}
        <motion.div {...fadeUp(0.32)} className="mt-5">
          <div className="text-center p-4 rounded-xl border border-dashed border-white/[0.07] text-sm text-white/35">
            Expected graduation:{" "}
            <span className="text-white/70 font-medium">June 2027</span>
            {" · "}
            Currently in <span className="text-white/70 font-medium">final year</span> (2023 batch)
          </div>
        </motion.div>

      </div>
    </section>
  );
}
