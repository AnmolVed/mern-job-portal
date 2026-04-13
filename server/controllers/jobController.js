const Job = require("../models/Job");

/* Create Job */

exports.createJob = async (req,res)=>{

  if(req.user.role !== "employer"){
    return res.status(403).json({
      message:"Only employers can post jobs"
    });
  }

  const job = await Job.create({
    ...req.body,
    createdBy:req.user.id
  });

  res.json(job);

};

/* Get All Jobs */

exports.getJobs = async (req, res) => {

  try {

    const jobs = await Job.find().populate("createdBy", "name email");

    res.json(jobs);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};