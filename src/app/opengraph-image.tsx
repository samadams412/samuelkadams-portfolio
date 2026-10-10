import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 600 }}>Sam Adams</div>
      <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 16 }}>
        Full-Stack Developer
      </div>
    </div>,
    size,
  );
}
