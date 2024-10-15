/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
		],
	},
};

export default withPlaiceholder(nextConfig);

// const nextConfig = {};

// export default nextConfig;
