export function AuraBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(214,204,190,0.12) 28%, rgb(255,255,255) 18%, rgb(196,181,160) 68%, rgb(168,148,122) 100%)",
          mixBlendMode: "multiply",
          filter: "blur(90px)",
          pointerEvents: "none",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(214,204,190,0.22) 34%, rgb(255,255,255) 66%, rgb(196,181,160) 82%, rgb(168,148,122) 100%)",
          mixBlendMode: "multiply",
          filter: "blur(90px)",
          pointerEvents: "none",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
