const applyFilters = (jobs, filters) => {
  // console.log(jobs)
  let filteredJobs = jobs;

  // Filter by Published date
  if (filters.publishedFilter === "yesterday") {
    filteredJobs = filteredJobs.filter((job) => {
      if (filters.publishedFilter === "yesterday") {
        const oneDayInSeconds = 24 * 60 * 60;
        const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds
        filteredJobs = filteredJobs.filter((job) => {
          const jobAgeInSeconds = currentTime - job.job_posted_at_timestamp;
          return jobAgeInSeconds <= oneDayInSeconds;
        });
      }
    });
  } else if (filters.publishedFilter === "1 week ago") {
    filteredJobs = filteredJobs.filter((job) => {});
  } else if (filters.publishedFilter === "4 weeks ago") {
    filteredJobs = filteredJobs.filter((job) => {});
  } else if (filters.publishedFilter === "1 month ago") {
    filteredJobs = filteredJobs.filter((job) => {});
  } else if (filters.publishedFilter === "older") {
    filteredJobs = filteredJobs.filter((job) => {});
  }

  // Filter by City
  if (filters.cityFilter !== "") {
    filteredJobs = filteredJobs.filter(
      (job) => job.job_city === filters.cityFilter
    );
    console.log(filteredJobs)
  }

  // Filter by Required Experience
  if (filters.experienceFilter === "experience_mentioned") {
    filteredJobs = filteredJobs.filter(
      (job) => job.job_required_experience.experience_mentioned === true
    );
  } else if (filters.experienceFilter === "experience_preferred") {
    filteredJobs = filteredJobs.filter(
      (job) => job.job_required_experience.experience_preferred === true
    );
  } else if (filters.experienceFilter === "no_experience_required") {
    filteredJobs = filteredJobs.filter(
      (job) => job.job_required_experience.no_experience_required === true
    );
  }

  // Filter by Level of Experience
  if (filters.levelOfExperienceFilter !== "") {
    filteredJobs = filteredJobs.filter((job) => {});
  }

  // Filter by Required Education
  if (filters.requiredEducationFilter !== "") {
    filteredJobs = filteredJobs.filter((job) => {});
  }

  return filteredJobs;
};

export { applyFilters };
