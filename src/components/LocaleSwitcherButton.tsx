'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';

type Props = {
	currentLocale: Locale;
	oppositeLocale: Locale;
	label: string;
	localeLabel: string;
};

export default function LocaleSwitcherButton({
	currentLocale,
	oppositeLocale,
	label,
	localeLabel,
}: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function handleLanguageChange() {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- Same type error handling as before
				{ pathname, params },
				{ locale: oppositeLocale }
			);
		});
	}

	return (
		<button
			onClick={handleLanguageChange}
			disabled={isPending}
			className={clsx(
				'inline-flex items-center px-4 py-2 rounded-md',
				'text-sm font-medium text-gray-700 hover:text-gray-900',
				'bg-white hover:bg-gray-50',
				'border border-gray-300 hover:border-gray-400',
				'transition-colors duration-200',
				isPending && 'opacity-30 cursor-not-allowed'
			)}
			aria-label={label}
		>
			{currentLocale === 'en' ? '🇫🇷' : '🇬🇧'}
			<span className='ml-2'>{localeLabel}</span>
		</button>
	);
}
