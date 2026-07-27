"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#14161A" }}>
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-center">
        <p className="text-8xl font-bold text-gradient mb-6">404</p>
        <h1 className="text-2xl font-bold mb-3" style={{ color: "#F3F4F6" }}>Page not found</h1>
        <p className="mb-8" style={{ color: "#A1AAB8" }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ border: "1px solid #2A313C", background: "#1C2128", color: "#F3F4F6" }}
          >
            <ArrowLeft className="w-4 h-4" /> Go back
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
            style={{ background: "#3B82F6" }}
          >
            <Home className="w-4 h-4" /> Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
