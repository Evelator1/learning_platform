const Job = require("../models/jobAd");




const getAllJobs=async(req,res)=>{
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve jobs" });
  }
}

const getJobById=async(req,res)=>{
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve the job" });
  }

}

const createJob=async(req,res)=>{
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: "Failed to create the job entry" });
  }
}


module.exports={createJob, getAllJobs, getJobById}

