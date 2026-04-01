import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	transpilePackages: ["@awake/design-system"],
	experimental: {
		optimizePackageImports: ["lucide-react", "@awake/design-system"],
	},
}

export default nextConfig
