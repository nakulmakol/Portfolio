"use client";
import { motion } from "framer-motion";
export function SectionHeader({ label, title, description }: { label:string; title:string; description?:string }) {
  return (
    <div className="text-center mb-16">
      <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="eyebrow mb-3">{label}</motion.p>
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.08}}
        className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{color:"#F3F4F6"}}>{title}</motion.h2>
      {description && (
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.14}}
          className="max-w-xl mx-auto" style={{color:"#A1AAB8"}}>{description}</motion.p>
      )}
    </div>
  );
}
