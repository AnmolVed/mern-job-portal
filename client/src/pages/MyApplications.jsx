import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function MyApplications(){

  const [apps,setApps] = useState([]);

  useEffect(()=>{       

        fetchApps();
    
  },[]);

  const fetchApps = async()=>{

  try{

    const token = localStorage.getItem("token");

    const res = await API.get("/applications/my",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });

    console.log(res.data);   // debug

    setApps(res.data);

  }catch(err){
    console.log(err);
  }

};

  return(

    <div>

      <Navbar/>

      <div className="max-w-5xl mx-auto mt-10">

        <h1 className="text-3xl font-bold mb-6">
          My Applications
        </h1>

       {apps.length === 0 ? (

  <p className="text-gray-500">
    You haven't applied to any jobs yet.
  </p>

) : (

  apps.map((app)=>(
    <div
      key={app._id}
      className="border p-4 mb-4 rounded"
    >

      <h2 className="text-xl">
        {app.jobId?.title}
      </h2>

      <p>{app.jobId?.company}</p>

      <p className="text-green-600">
        {app.status}
      </p>

    </div>
  ))

)}

      </div>

    </div>

  );

}

export default MyApplications;  
 
