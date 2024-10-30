/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import withPlaiceholder from '@plaiceholder/next';

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(withPlaiceholder(nextConfig));
