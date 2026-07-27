"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#14161A" }}>
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>⚠️</div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: "#F3F4F6" }}>Something went wrong</h1>
        <p className="mb-8" style={{ color: "#A1AAB8" }}>An unexpected error occurred.</p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={reset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
            style={{ background: "#3B82F6" }}>
            <RefreshCw className="w-4 h-4" /> Try again
          </button>
          <Link href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ border: "1px solid #2A313C", background: "#1C2128", color: "#F3F4F6" }}>
            <Home className="w-4 h-4" /> Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
