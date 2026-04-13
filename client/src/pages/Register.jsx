import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";



function Register() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    role:"jobseeker"
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e)=>{
  e.preventDefault();

  try{

    const res = await API.post("/auth/register", formData);

    alert(res.data.message);

    navigate("/login");

  }catch(err){

    alert(err.response.data.message);

  }

};

  return (
    <div>

      <Navbar/>

      <div className="flex justify-center mt-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-8 rounded w-96"
        >

          <h2 className="text-2xl font-bold mb-6 text-center">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          />

          <select
            name="role"
            className="border p-2 w-full mb-4"
            onChange={handleChange}
          >

            <option value="jobseeker">
              Job Seeker
            </option>

            <option value="employer">
              Employer
            </option>

          </select>

          <button
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;

