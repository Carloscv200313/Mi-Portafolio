import { ImageResponse } from "next/og";

export const alt = "Carlos Calderón — Ingeniero de software full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a08",
          backgroundImage:
            "radial-gradient(1100px 700px at 8% -10%, rgba(214,255,63,0.16), transparent 60%), radial-gradient(900px 650px at 96% 8%, rgba(255,138,61,0.10), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d6ff3f",
            marginBottom: 28,
          }}
        >
          Disponible para nuevos proyectos — Lima, Perú
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#f3f1ea",
            letterSpacing: -2,
          }}
        >
          <span>Carlos Calderón,</span>
          <span>
            <span style={{ color: "#d6ff3f" }}>ingeniero&nbsp;</span>
            de software
          </span>
          <span>full&#8209;stack.</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 44,
          }}
        >
          {["Next.js", "TypeScript", "Supabase", "IA"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#96938b",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "10px 24px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
