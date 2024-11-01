interface EducationInfo {
	program: string;
	specialization: string;
	school: string;
}

interface JobExperience {
	companyName: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	tasks: string[];
}

export interface HomePage {
	language: string;
	title: string;
	currentSlug: string;
	publishedAt: string;
	introDescription: string;
	skills: { skill: string }[];
	softSkills: { softSkill: string }[];
	education: EducationInfo[];
	jobExperiences: JobExperience[];
}
