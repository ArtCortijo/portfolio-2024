import type { Metadata } from 'next';
// import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import '../globals.css';
import '../../styles/index.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ReactQueryClientProvider from '../providers/ReactQueryClientProvider';
import { notFound } from 'next/navigation';
import SmoothScrolling from '@/components/SmoothScrolling';
import Header from '@/components/Header';
import Image from 'next/image';
import TitleReveal from '@/components/TitleReveal';

// const lexend = Lexend({
// 	subsets: ['latin'],
// 	variable: '--font-lexend',
// 	display: 'swap',
// });

const lexend = localFont({
	src: '../fonts/Lexend-VariableFont_wght.ttf',
	// src: '../fonts/Lexend-Regular.woff2',
	variable: '--font-lexend',
	display: 'block',
});

const openSans = localFont({
	src: '../fonts/OpenSans-Regular.woff',
	variable: '--font-open-sans',
	display: 'block',
});

export const metadata: Metadata = {
	title: 'Arturo Cortijo P. | Front-end developer',
	description: 'Generated by create next app',
};

export default async function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as 'en' | 'fr')) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} className='dark'>
			<body className={`${lexend.variable} ${openSans.variable} bg-[#161618]`}>
				<ReactQueryClientProvider>
					<NextIntlClientProvider messages={messages}>
						<Header />
						<SmoothScrolling>
							<TitleReveal as='h1'>Hello World!</TitleReveal>
							<main>{children}</main>
						</SmoothScrolling>
						<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
							<a
								className='flex items-center gap-2 hover:underline hover:underline-offset-4'
								href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Image
									aria-hidden
									src='https://nextjs.org/icons/file.svg'
									alt='File icon'
									width={16}
									height={16}
								/>
								Learn
							</a>
							<a
								className='flex items-center gap-2 hover:underline hover:underline-offset-4'
								href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Image
									aria-hidden
									src='https://nextjs.org/icons/window.svg'
									alt='Window icon'
									width={16}
									height={16}
								/>
								Examples
							</a>
							<a
								className='flex items-center gap-2 hover:underline hover:underline-offset-4'
								href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Image
									aria-hidden
									src='https://nextjs.org/icons/globe.svg'
									alt='Globe icon'
									width={16}
									height={16}
								/>
								Go to nextjs.org →
							</a>
						</footer>
					</NextIntlClientProvider>
				</ReactQueryClientProvider>
			</body>
		</html>
	);
}
