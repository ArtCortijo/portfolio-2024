import { getTranslations } from 'next-intl/server';
import { client } from '../lib/sanity';
import { HomePage } from '../lib/interface';
import { Link } from '@/i18n/routing';
// import styles from '../app/page.module.scss';

// Get data from Sanity
async function getData(locale: string) {
	const query = `*[_type == 'homepage' && language == $locale][0] {
    language,
    title,
    "currentSlug": slug.current,
    publishedAt,
    introDescription,
    "skills": skills,
    "softSkills": softSkills,
    "education": education[]{ 
      program,
      specialization,
      school
    },
    "jobExperiences": jobExperiences[]{ 
      companyName,
      jobTitle,
      startDate,
      endDate,
      tasks
    }
  }`;

	const data = await client.fetch(query, { locale });
	return data;
}

interface HomeProps {
	params: {
		locale: string;
	};
}

export default async function Home({ params: { locale } }: HomeProps) {
	const t = await getTranslations('Homepage');
	const data: HomePage = await getData(locale);

	console.log('data', data);

	if (!data) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<h1>Content not found for {locale}</h1>
			</div>
		);
	}

	return (
		<div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
			<section className='h-screen flex flex-col justify-center'>
				<h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
				<Link href='/about' className='text-blue-600 hover:text-blue-800'>
					about
				</Link>
			</section>

			<section className='h-screen flex flex-col justify-center'>
				<div className='max-w-2xl mx-auto text-lg'>{data.introDescription}</div>
			</section>

			<section className='h-screen flex flex-col justify-center'>
				<h2 className='text-2xl font-bold mb-6'>Skills</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{data.skills?.map((skill, index) => (
						<div
							key={index}
							className='p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors'
						>
							{skill}
						</div>
					))}
				</div>
			</section>

			<section className='h-screen flex flex-col justify-center'>
				<h2 className='text-2xl font-bold mb-6'>Soft Skills</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{data.softSkills?.map((skill, index) => (
						<div
							key={index}
							className='p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors'
						>
							{skill}
						</div>
					))}
				</div>
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
	);
}
