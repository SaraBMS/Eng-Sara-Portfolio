import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#faf9f7",
          color: "#1c1917",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ width: 56, height: 6, backgroundColor: "#b45309" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 34, fontWeight: 500, color: "#78716c" }}>{site.title}</div>
          <div style={{ fontSize: 26, color: "#a8a29e", maxWidth: 900 }}>{site.tagline}</div>
        </div>
        <div style={{ fontSize: 24, fontWeight: 600, color: "#b45309" }}>{site.location}</div>
      </div>
    ),
    { ...size }
  );
}
