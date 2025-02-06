export type HomePage = {
	language: string;
	title: string;
	currentSlug: string;
	publishedAt: string;
	introDescription: string;
	skills: string[];
	softSkills: string[];
	education: Array<{
		program: string;
		specialization: string;
		school: string;
	}>;
	jobExperiences: Array<{
		companyName: string;
		jobTitle: string;
		startDate: string;
		endDate: string;
		tasks: string[];
	}>;
};
