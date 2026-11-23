import { ImageResponse } from "next/og";

export const alt = "AxStudios — AI automation and software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 64,
          color: "#fff",
          background: "linear-gradient(135deg, #0a0a0f 0%, #171319 58%, #28140f 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: 48,
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 28,
            background: "rgba(255,255,255,.035)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#ff947d", fontSize: 27, fontWeight: 700 }}>
            <div style={{ display: "flex", width: 48, height: 48, alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#eb6a50", color: "#171014", fontSize: 28 }}>A</div>
            AxStudios
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 62, lineHeight: 1.08, fontWeight: 700, letterSpacing: -2 }}>
              <span style={{ display: "block" }}>Build smarter.</span>
              <span style={{ display: "block" }}>Automate everything.</span>
            </div>
            <div style={{ color: "#d0c8c9", fontSize: 25 }}>AI automation · Intelligent software · Dubai</div>
          </div>
          <div style={{ display: "flex", color: "#ff947d", fontSize: 20 }}>axstudios.tech</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
