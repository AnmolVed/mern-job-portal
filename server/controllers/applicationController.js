const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {

    const existing = await Application.findOne({
      jobId: req.body.jobId,
      userId: req.user.id
    });

    if (existing) {
      return res.json({
        message: "You already applied for this job"
      });
    }

    const application = await Application.create({
      jobId: req.body.jobId,
      userId: req.user.id
    });

    res.json({
      message: "Application submitted",
      application
    });

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMyApplications = async(req,res)=>{

  try{

    const apps = await Application.find({
      userId:req.user.id
    }).populate("jobId");

    res.json(apps);

  }catch(err){

    res.status(500).json(err);

  }

}; 
