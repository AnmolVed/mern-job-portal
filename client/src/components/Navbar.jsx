import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [role,setRole] = useState(null);

  useEffect(()=>{
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  },[]);

  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href="/login";
  };

  return (

    <nav className="bg-gray-900 text-white p-4">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">
          JobPortal
        </h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>

          <Link to="/jobs">Jobs</Link>

          {role === "employer" && (
            <Link to="/post-job">Post Job</Link>
          )}

          {role === "jobseeker" && (
            <Link to="/applications">My Applications</Link>
          )}

          {!role && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {role && (
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>

  );

}

export default Navbar;