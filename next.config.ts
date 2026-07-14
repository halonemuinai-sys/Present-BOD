import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder slides ship as SVG; real screenshots will typically be PNG/JPG.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
