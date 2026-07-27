"use client";

import { motion } from "framer-motion";

const skillCols = [
  {
    left:  { label: "LANGUAGES",       skills: ["Python","C++","C","JavaScript","TypeScript","SQL","HTML/CSS"] },
    right: { label: "AI / ML",          skills: ["TensorFlow","PyTorch","Scikit-learn","LangChain","FAISS","Hugging Face","NumPy","Pandas"] },
  },
  {
    left:  { label: "COMPUTER VISION", skills: ["OpenCV","YOLO","ResNet","DINOv2","RF-DETR","CNN","Stereo Vision","GLCM"] },
    right: { label: "FRAMEWORKS",      skills: ["Flask","FastAPI","React","Next.js"] },
  },
  {
    left:  { label: "TOOLS",           skills: ["Git","GitHub","Docker","Linux","VS Code","Jupyter","Postman","Power BI"] },
    right: { label: "DATABASES",       skills: ["PostgreSQL","SQL"] },
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16,1,0.3,1] as number[] },
  };
}

function SkillGroup({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div>
      {/* "— LANGUAGES" in accent blue */}
      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: "#3B82F6", fontSize: "1.1rem", lineHeight: 1 }}>—</span>
        <span
          className="text-[0.72rem] font-bold tracking-[0.2em] uppercase"
          style={{ color: "#3B82F6" }}
        >
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#14161A]">
      <div className="max-w-5xl mx-auto">

        <motion.p {...fadeUp()} className="eyebrow mb-3">Toolbox</motion.p>
        <motion.h2
          {...fadeUp(0.07)}
          className="text-[2.8rem] sm:text-[3.5rem] font-bold tracking-tight mb-20"
          style={{ color: "#F3F4F6" }}
        >
          What I actually reach for.
        </motion.h2>

        <div className="space-y-14">
          {skillCols.map((row, i) => (
            <motion.div key={i} {...fadeUp(0.1 + i * 0.08)} className="grid sm:grid-cols-2 gap-12">
              <SkillGroup label={row.left.label}  skills={row.left.skills}  />
              <SkillGroup label={row.right.label} skills={row.right.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
