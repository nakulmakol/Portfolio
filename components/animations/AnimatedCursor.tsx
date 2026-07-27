"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedCursor() {
  const [pos,    setPos]    = useState({ x:0, y:0 });
  const [isPtr,  setIsPtr]  = useState(false);
  const [hidden, setHidden] = useState(true);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(window.matchMedia("(pointer: coarse)").matches);
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
      const t = e.target as Element;
      setIsPtr(["A","BUTTON"].includes(t.tagName) || !!t.closest("a") || !!t.closest("button"));
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", () => setHidden(true));
    document.addEventListener("mouseenter", () => setHidden(false));
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  if (mobile) return null;
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x:pos.x-18, y:pos.y-18, opacity:hidden?0:1, scale:isPtr?1.5:1 }}
        transition={{ type:"spring", mass:0.3, stiffness:200, damping:22, opacity:{duration:0.1} }}
      >
        <div className="w-9 h-9 rounded-full border border-white/70" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x:pos.x-2.5, y:pos.y-2.5, opacity:hidden?0:1, scale:isPtr?0:1 }}
        transition={{ type:"spring", mass:0.1, stiffness:800, damping:30, opacity:{duration:0.1} }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  );
}
