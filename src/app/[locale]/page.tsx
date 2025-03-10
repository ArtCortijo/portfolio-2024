'use client';
// import { getTranslations } from 'next-intl/server';
import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';
import { homePageQuery } from '@/utils/queries';
import { HomePage } from '../lib/types';
import { Link } from '@/i18n/routing';
// import styles from '../app/page.module.scss';

type HomePageProps = {
	params: {
		locale: string;
	};
};

export default function Home({ params: { locale } }: HomePageProps) {
	// const t = await getTranslations('Homepage');
	const { data, isLoading, error } = useQuery<HomePage>({
		queryKey: ['homepage', locale],
		queryFn: async () => {
			console.log('Fetching data for locale:', locale);
			const data = await client.fetch(homePageQuery, { locale });
			return data;
		},
	});
	console.log('Query state:', { isLoading, error, data });

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!data) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<h1>Content not found for {locale}</h1>
			</div>
		);
	}

	return (
		<>
			<div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-lexend)]'>
				<section className='h-screen flex flex-col justify-center'>
					<h1 className='text-4xl mb-4 font-[family-name:var(--font-open-sans)]'>
						{data.title}
					</h1>
					<Link href='/about' className='text-blue-600 hover:text-blue-800'>
						about
					</Link>
				</section>

				<section className='h-screen flex flex-col justify-center'>
					<div className='max-w-2xl mx-auto text-lg'>
						{data.introDescription}
					</div>
				</section>

				<section className='h-screen flex flex-col justify-center'>
					<h2 className='text-2xl font-bold mb-6'>Skills</h2>
					<ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
						{data.skills?.map((skill, index) => (
							<div
								key={index}
								className='p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-colors'
							>
								{skill}
							</div>
						))}
					</ul>
				</section>

				<section className='h-screen flex flex-col justify-center'>
					<h2 className='text-2xl font-bold mb-6'>Soft Skills</h2>
					<ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
						{data.softSkills?.map((skill, index) => (
							<div
								key={index}
								className='p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-colors'
							>
								{skill}
							</div>
						))}
					</ul>
				</section>

				<section className='h-screen flex flex-col justify-center'>
					<h2 className='text-2xl font-bold mb-6'>Education</h2>
					<div className='space-y-6'>
						{data.education?.map((edu, index) => (
							<div
								key={index}
								className='border-l-4 border-gray-300 pl-4 py-2 hover:border-blue-500 transition-colors'
							>
								<h3 className='font-bold text-xl'>{edu.program}</h3>
								<p className='text-gray-600 text-lg'>{edu.specialization}</p>
								<p className='text-gray-500'>{edu.school}</p>
							</div>
						))}
					</div>
				</section>

				<section className='h-screen flex flex-col justify-center'>
					<h2 className='text-2xl font-bold mb-6'>Experience</h2>
					<div className='space-y-8'>
						{data.jobExperiences?.map((job, index) => (
							<div
								key={index}
								className='border-l-4 border-gray-300 pl-4 py-2 hover:border-blue-500 transition-colors'
							>
								<h3 className='font-bold text-xl'>{job.jobTitle}</h3>
								<p className='text-gray-600 text-lg'>{job.companyName}</p>
								<p className='text-gray-500'>
									{new Date(job.startDate).toLocaleDateString(locale, {
										year: 'numeric',
										month: 'long',
									})}{' '}
									-{' '}
									{job.endDate
										? new Date(job.endDate).toLocaleDateString(locale, {
												year: 'numeric',
												month: 'long',
											})
										: 'Present'}
								</p>
								<ul className='list-disc list-inside mt-2 space-y-1'>
									{job.tasks?.map((task, taskIndex) => (
										<li key={taskIndex} className='text-gray-700'>
											{task}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
