import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12141A",
          borderRadius: 36,
          border: "4px solid #FF6B35",
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FF6B35",
            letterSpacing: "-0.04em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MC
        </span>
      </div>
    ),
    { ...size }
  );
}
