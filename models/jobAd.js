const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  employer_name: {
    type: String,
  },
  employer_logo: {
    type: String,
  },
  employer_website: {
    type: String,
  },
  employer_company_type: {
    type: String,
  },
  job_publisher: {
    type: String,
  },
  job_id: {
    type: String,
  },
  job_employment_type: {
    type: String,
  },
  job_title: {
    type: String,
  },
  job_apply_link: {
    type: String,
  },
  job_apply_is_direct: {
    type: Boolean,
  },
  job_apply_quality_score: {
    type: Number,
  },
  job_description: {
    type: String,
  },
  job_is_remote: {
    type: Boolean,
  },
  job_posted_at_timestamp: {
    type: Number,
  },
  job_posted_at_datetime_utc: {
    type: Date,
  },
  job_city: {
    type: String,
  },
  job_state: {
    type: String,
  },
  job_country: {
    type: String,
  },
  job_latitude: {
    type: Number,
  },
  job_longitude: {
    type: Number,
  },
  job_benefits: {
    type: String,
  },
  job_google_link: {
    type: String,
  },
  job_offer_expiration_datetime_utc: {
    type: Date,
  },
  job_offer_expiration_timestamp: {
    type: Number,
  },
  job_required_experience: {
    type: Object,
  },
  job_required_skills: {
    type: String,
  },
  job_required_education: {
    type: Object,
  },
  job_experience_in_place_of_education: {
    type: Boolean,
  },
  job_min_salary: {
    type: Number,
  },
  job_max_salary: {
    type: Number,
  },
  job_salary_currency: {
    type: String,
  },
  job_salary_period: {
    type: String,
  },
  job_highlights: {
    type: Object,
  },
  job_job_title: {
    type: String,
  },
  job_posting_language: {
    type: String,
  },
  job_onet_soc: {
    type: String,
  },
  job_onet_job_zone: {
    type: String,
  },
  job_occupational_categories: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
