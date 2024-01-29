const applyFilters = (jobs, filters) => {
  let filteredJobs = [...jobs];

  // Filter by City
  if (filters.cityFilter !== "") {
    filteredJobs = filteredJobs.filter((job) => {
      return job.job_city === filters.cityFilter;
    });
  }

  // Filter by remote Jobs
  if (filters.remoteFilter !== "") {
    filteredJobs = filteredJobs.filter((job) => {
      console.log(filters.remoteFilter);
      if (filters.remoteFilter === "Remote") {
        return job.job_is_remote === true;
      } else if (filters.remoteFilter === "On Site") {
        return job.job_is_remote === false;
      }
    });
  }

  if (filters.publishedFilter !== "") {
    const currentTime = Date.now() / 1000;

    switch (filters.publishedFilter) {
      case "yesterday":
        filteredJobs = filteredJobs.filter(
          (job) => currentTime - job.job_posted_at_timestamp <= 86400 // 1 day in seconds
        );
        break;
      case "1 week ago":
        filteredJobs = filteredJobs.filter(
          (job) => currentTime - job.job_posted_at_timestamp <= 604800 // 1 week in seconds
        );
        break;
      case "4 weeks ago":
        filteredJobs = filteredJobs.filter(
          (job) => currentTime - job.job_posted_at_timestamp <= 2419200 // 4 weeks in seconds
        );
        break;
      case "1 month ago":
        filteredJobs = filteredJobs.filter(
          (job) => currentTime - job.job_posted_at_timestamp <= 2678400 // 1 month in seconds
        );
        break;
      case "older":
        filteredJobs = filteredJobs.filter(
          (job) => currentTime - job.job_posted_at_timestamp > 2678400 // 1 month in seconds
        );
        break;
      default:
        break;
    }
  }

  if (filters.experienceFilter !== "") {
    switch (filters.experienceFilter) {
      case "mentioned":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_experience.experience_mentioned === true
        );
        break;

      case "experience preferred":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_experience.experience_preferred === true
        );
        break;

      case "no experience required":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_experience.no_experience_required === true
        );
        break;

      default:
        break;
    }
  }

  if (filters.requiredEducationFilter !== "") {
    switch (filters.requiredEducationFilter) {
      case "associates degree":
        filteredJobs = filteredJobs.filter((job) => {
          job.job_required_education.associates_degree === true;
          console.log(job);
        });
        break;
      case "bachelors degree":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_education.bachelors_degree === true
        );
        break;
      case "degree mentioned":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_education.degree_mentioned === true
        );
        break;
      case "degree referred":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_education.degree_preferred === true
        );
        break;
      case "high school":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_education.high_school === true
        );
        break;
      case "postgraduate degree":
        filteredJobs = filteredJobs.filter(
          (job) => job.job_required_education.postgraduate_degree === true
        );
        break;
      case "professional certification":
        filteredJobs = filteredJobs.filter(
          (job) =>
            job.job_required_education.professional_certification === true
        );
        break;
      case "professional certification mentioned":
        filteredJobs = filteredJobs.filter(
          (job) =>
            job.job_required_education.professional_certification_mentioned ===
            true
        );
        break;

      default:
        break;
    }
  }

  console.log(filteredJobs);

  return filteredJobs;
};

export { applyFilters };
