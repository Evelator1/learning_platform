const express = require("express");


const {createJob, getAllJobs, getJobById}=require("../controllers/jobs")

const jobRouter = express.Router();

// Route to create a new job entry
jobRouter.post("/newJob", createJob);

// Route to get all jobs
jobRouter.get("/jobs", getAllJobs);

// Route to get a single job entry by ID
jobRouter.get("/jobs/:id", getJobById);

module.exports = jobRouter;
