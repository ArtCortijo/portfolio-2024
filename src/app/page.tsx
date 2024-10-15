import Image from 'next/image';
// import styles from '../app/page.module.scss';

export default function Home() {
	return (
		<div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
			<main>
				<section className='h-screen flex flex-col justify-center'>
					Section Head
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Section Intro
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Section Skills
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Section Soft Skills
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Education
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Experience
				</section>
				<section className='h-screen flex flex-col justify-center'>
					Languages
				</section>
			</main>
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
		</div>
	);
}
