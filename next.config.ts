/**
 * Next.js configuration.
 *
 * standalone output produces a minimal server bundle at
 * .next/standalone, containing only the dependencies actually reached
 * at runtime. The Docker image copies that instead of the full
 * node_modules tree.
 *
 * @author Awa Precious
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
