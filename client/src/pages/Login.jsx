import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{

      const res = await API.post("/auth/login",formData);

     localStorage.setItem("token",res.data.token);
     localStorage.setItem("role",res.data.user.role);

      alert("Login successful");

      navigate("/dashboard");

    }catch{

      alert("User not found. Please register first.");

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
            Login
          </h2>

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

          <button
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;