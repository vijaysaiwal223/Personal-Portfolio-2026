import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The standalone About and Projects pages were retired; send old links to the home page.
  redirects() {
    return [
      { source: "/about", destination: "/", permanent: false },
      { source: "/projects", destination: "/#selected-work", permanent: false },
    ];
  },
};

export default nextConfig;
