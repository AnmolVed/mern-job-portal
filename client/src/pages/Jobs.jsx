import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Jobs() {

  const [jobs,setJobs] = useState([]);
  const [appliedJobs,setAppliedJobs] = useState([]);

  const fetchJobs = async ()=>{

    try{

      const res = await API.get("/jobs");

      setJobs(res.data);

    }catch(err){

      console.log(err);

    }

  };
  const fetchAppliedJobs = async ()=>{

  try{

    const token = localStorage.getItem("token");

    const res = await API.get("/applications/my",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });

    const ids = res.data.map(app => app.jobId._id);

    setAppliedJobs(ids);

  }catch(err){
    console.log(err);
  }

};

  useEffect(()=>{
    fetchJobs();
     fetchAppliedJobs();
  },[]);


  const applyJob = async(id)=>{

     const token = localStorage.getItem("token");

     // ⭐ LOGIN CHECK (YAHI ADD KARNA HAI)
  if(!token){
    alert("Please login first to apply");
    return;
  }

    try{

      const token = localStorage.getItem("token");

      await API.post(
        "/applications/apply",
        {jobId:id},
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      alert("Application submitted");
     
   // ⭐ REAL TIME UPDATE
    setAppliedJobs([...appliedJobs,id]);

    }catch(err){

      console.log(err);

    }

  };

  return (

    <div>

      <Navbar/>

      <div className="max-w-6xl mx-auto mt-10">

        <h1 className="text-3xl font-bold mb-6">
          Available Jobs
        </h1>

        <div className="grid grid-cols-3 gap-6">

          {jobs.map((job)=>(
            
            <div
              key={job._id}
             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 "
            >

              <h2 className="text-xl font-bold mb-1">
               {job.title}
             </h2>

             <p className="text-gray-700 font-medium">
              💼 {job.company}
             </p>

              <p className="text-sm text-gray-500 mt-1">
                📍 {job.location}
              </p>

              <p className="mt-2 text-green-600 font-semibold">
                💰 {job.salary}
               </p>

              <button
         disabled={appliedJobs.includes(job._id)}
         onClick={()=>applyJob(job._id)}
         className={`mt-4 px-4 py-2 rounded text-white ${
         appliedJobs.includes(job._id)
            ? "bg-gray-400"
            : "bg-blue-500"
          }`}
>
         {appliedJobs.includes(job._id) ? "Applied ✅" : "Apply"}
       </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Jobs;