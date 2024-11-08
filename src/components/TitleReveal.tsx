'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type TitleRevealProps = {
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: ReactNode;
};

const TitleReveal: React.FC<TitleRevealProps> = ({
	as: Tag = 'p',
	children,
}) => {
	const text = typeof children === 'string' ? children : '';
	const characters = text.split('');
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: '0px 0px -20% 0px',
		once: true,
	});

	return (
		<Tag
			ref={ref}
			aria-label={text}
			role='text'
			className={`font-[family-name:var(--font-lexend)] overflow-hidden title-reveal ${isInView ? 'active' : ''}`}
		>
			{characters.map((char, index) => (
				<motion.span
					key={index}
					initial={{ y: '100%', opacity: 0 }}
					animate={isInView ? { y: 0, opacity: 1 } : {}}
					transition={{
						ease: [0.19, 1, 0.22, 1],
						duration: 1,
						delay: index * 0.02,
					}}
					className={char === ' ' ? 'space' : 'char'}
				>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</Tag>
	);
};

export default TitleReveal;
