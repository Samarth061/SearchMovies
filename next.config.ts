import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default withFlowbiteReact(nextConfig);
