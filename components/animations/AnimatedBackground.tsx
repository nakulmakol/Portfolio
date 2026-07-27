"use client";
import { useEffect, useRef } from "react";

interface Dot { x:number; y:number; vx:number; vy:number; r:number; alpha:number; }

export function AnimatedBackground() {
  const ref  = useRef<HTMLCanvasElement>(null);
  const raf  = useRef<number>(0);
  const dots = useRef<Dot[]>([]);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;

    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const n = Math.min(60, Math.floor(window.innerWidth / 22));
    dots.current = Array.from({ length: n }, () => ({
      x: Math.random() * c.width,  y: Math.random() * c.height,
      vx: (Math.random()-0.5)*0.22, vy: (Math.random()-0.5)*0.22,
      r: Math.random()*1.4+0.4,    alpha: Math.random()*0.18+0.04,
    }));

    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      const ds = dots.current;
      const { x: mx, y: my } = mouse.current;

      for (const d of ds) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > c.width)  d.vx *= -1;
        if (d.y < 0 || d.y > c.height) d.vy *= -1;
        const dx = d.x - mx, dy = d.y - my, dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 80) {
          const f = (80-dist)/80*0.012;
          d.vx += dx/dist*f; d.vy += dy/dist*f;
          const s = Math.sqrt(d.vx*d.vx+d.vy*d.vy);
          if (s > 1.1) { d.vx = d.vx/s*1.1; d.vy = d.vy/s*1.1; }
        }
      }

      /* connecting lines — palette grid colour #1A1D23 → blue tint */
      for (let i = 0; i < ds.length; i++) {
        for (let j = i+1; j < ds.length; j++) {
          const dx = ds[i].x-ds[j].x, dy = ds[i].y-ds[j].y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(ds[i].x, ds[i].y);
            ctx.lineTo(ds[j].x, ds[j].y);
            /* #3B82F6 at low opacity */
            ctx.strokeStyle = `rgba(59,130,246,${(1-dist/110)*0.09})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      /* dots — #A1AAB8 secondary text colour */
      for (const d of ds) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(161,170,184,${d.alpha})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden />;
}
