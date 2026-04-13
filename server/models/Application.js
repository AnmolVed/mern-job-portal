const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

  jobId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Job"
  },

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  status:{
    type:String,
    default:"Applied"
  }

},{timestamps:true});

module.exports = mongoose.model("Application",ApplicationSchema);