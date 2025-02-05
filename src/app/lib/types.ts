type EducationInfo = {
	program: string;
	specialization: string;
	school: string;
};

type JobExperience = {
	companyName: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	tasks: string[];
};

export type HomePage = {
	language: string;
	title: string;
	currentSlug: string;
	publishedAt: string;
	introDescription: string;
	skills: Array<string>;
	softSkills: Array<string>;
	education: EducationInfo[];
	jobExperiences: JobExperience[];
};
