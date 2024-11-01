import { getTranslations } from 'next-intl/server';

async function About() {
	const t = await getTranslations('Homepage');

	return (
		<div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
			<section className='h-screen flex flex-col justify-center'>
				About Page
				<h1>{t('title')}</h1>
				<h2>{t('about')}</h2>
			</section>
		</div>
	);
}

export default About;
