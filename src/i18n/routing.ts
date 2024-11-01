import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	locales: ['en', 'fr'],
	// Used when no locale matches
	defaultLocale: 'en',
	pathnames: {
		'/about': {
			en: '/about',
			fr: '/a-propos',
		},
		'/projects/[slug]': {
			en: '/projects/[slug]',
			fr: '/projets/[slug]',
		},
	},
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
