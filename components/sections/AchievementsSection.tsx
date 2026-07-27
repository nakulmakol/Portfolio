"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

// Show only #2 (Sales Head), #3 (95% RAG), #6 (Global Exchange) — indexes 1,2,5
const SHOW = [1, 2, 5];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

export function AchievementsSection() {
  const shown = achievements.filter((_, i) => SHOW.includes(i));

  return (
    <section id="achievements" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-5xl mx-auto">

        <motion.p {...fadeUp()} className="eyebrow mb-3">Achievements</motion.p>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[2.8rem] sm:text-[3.5rem] font-bold tracking-tight mb-20"
          style={{ color: "#F3F4F6" }}
        >
          Milestones &amp; highlights.
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {shown.map((ach, i) => (
            <motion.div key={ach.id} {...fadeUp(0.1 + i * 0.1)}>
              <div className="card-dark p-8 h-full">
                <div className="text-[2.5rem] mb-5">{ach.icon}</div>
                <h3
                  className="text-[1.18rem] font-bold mb-3 leading-snug"
                  style={{ color: "#F3F4F6" }}
                >
                  {ach.title}
                </h3>
                <p className="text-[0.93rem] leading-relaxed" style={{ color: "#A1AAB8" }}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
