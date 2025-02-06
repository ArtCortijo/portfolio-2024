export const homePageQuery = `*[_type == "homepage" && language == $locale][0]{
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
