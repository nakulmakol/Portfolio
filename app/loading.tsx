export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#14161A" }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg font-mono animate-pulse"
          style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
        >N</div>
        <p className="text-sm font-mono animate-pulse" style={{ color: "#A1AAB8" }}>Loading...</p>
      </div>
    </div>
  );
}
