"use client";

import { MapPin } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #2A313C", background: "#14161A" }}>
      <div
        className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <span
          className="flex items-center gap-1.5 text-[0.83rem] font-mono"
          style={{ color: "#A1AAB8", opacity: 0.5 }}
        >
          <MapPin className="w-3.5 h-3.5" />
          {personal.location}
        </span>
        <span
          className="text-[0.83rem] font-mono"
          style={{ color: "#A1AAB8", opacity: 0.5 }}
        >
          Designed &amp; Built by{" "}
          <span style={{ color: "#A1AAB8", opacity: 0.8 }}>Nakul Makol</span>
        </span>
      </div>
    </footer>
  );
}
