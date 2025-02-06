import { createClient } from '@sanity/client';

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	withCredentials: true,
	perspective: 'published',
});
