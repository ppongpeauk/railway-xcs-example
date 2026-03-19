const nextConfig = {
	trailingSlash: false,
	images: {
		remotePatterns: []
	},
	async rewrites() {
		return [
			// legacy oauth endpoints
			{
				source: "/platform/verify/:slug*",
				destination: "/verify/:slug*"
			},
			{
				source: "/@:username/avatar",
				destination: "/users/:username/avatar"
			},
			{
				source: "/@:username",
				destination: "/users/:username"
			}
		];
	},
	async redirects() {
		return [
			{
				source: "/auth",
				destination: "/auth/login",
				permanent: true
			},
			{
				source: "/settings",
				destination: "/settings/profile",
				permanent: true
			},
			{
				source: "/user/:slug",
				destination: "/@:slug",
				permanent: false
			},
			{
				source: "/invite/:slug*",
				destination: "/invitation/:slug*",
				permanent: false
			},
			{
				source: "/AxesysAPI/:slug*",
				destination: "/api/v1/axesys/:slug*",
				permanent: false
			},
			{
				source: "/api/v1/AxesysAPI/:slug*",
				destination: "/api/v1/axesys/:slug*",
				permanent: false
			}
		];
	}
};

const withPWA = require("next-pwa")({
	dest: "public", // Service worker output directory
	register: true, // Auto-register service worker
	skipWaiting: true // Update service worker immediately on new deploy
});

export default withPWA(nextConfig);
