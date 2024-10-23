import { createClient } from '@sanity/client';

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: '8hj38m3z',
	useCdn: false,
});
