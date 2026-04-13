import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function PostJob(){

  const [job,setJob] = useState({
    title:"",
    company:"",
    location:"",
    salary:"",
    description:""
  });

  const handleChange = (e)=>{
    setJob({
      ...job,
      [e.target.name]:e.target.value
    });
  };

const handleSubmit = async (e)=>{
  e.preventDefault();

  try{

    const token = localStorage.getItem("token");

    await API.post("/jobs",job,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });

    alert("Job posted successfully");

    setJob({
      title:"",
      company:"",
      location:"",
      salary:"",
      description:""
    });

    window.location.href="/jobs";

  }catch(err){

    console.log(err);

  }

};

  return(

    <div>

      <Navbar/>

      <div className="flex justify-center mt-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-8 rounded w-96"
        >

          <h2 className="text-2xl font-bold mb-6 text-center">
            Post Job
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Job Description"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />
           

          <button
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Post Job
          </button>

        </form>

      </div>

    </div>

  );
}

export default PostJob;