import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
    
      const role = localStorage.getItem("role");

  return (
    <div>

      <Navbar />

      {/* HERO SECTION */}
      <div className="text-center mt-20">

        <h1 className="text-5xl font-bold mb-6">
          Find Your Dream Job
        </h1>


        {/* Step 2 — Welcome message (after login only) */}
        {role && (
          <p className="mt-2 text-gray-500">
            Welcome back! Explore jobs tailored for you 🚀
          </p>
        )}
          
        <p className="mt-4 text-gray-600">
          Discover thousands of job opportunities
        </p>

        <a
          href="/jobs"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded"
        >
           {role ? "Explore Jobs" : "Browse Jobs"}
        </a>

      </div>

      {/* ⭐ CATEGORIES SECTION (YAHI ADD KIYA HAI) */}
      <div className="max-w-6xl mx-auto mt-16">

        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

           <Link to="/jobs?category=frontend">
          <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition">
            💻
            <p className="mt-2 font-semibold">Frontend</p>
          </div> </Link>

          <Link to="/jobs?category=backend">
          <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition">
            ⚙️
            <p className="mt-2 font-semibold">Backend</p>
          </div>  </Link>

          <Link to="/jobs?category=fullstack">
          <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition">
            🌐
            <p className="mt-2 font-semibold">Full Stack</p>
          </div> </Link>

           <Link to="/jobs?category=devops">
          <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition">
            ☁️
            <p className="mt-2 font-semibold">DevOps</p>
          </div> </Link>

        </div>

      </div>

      {/* ⭐ STATS SECTION */}
   <div className="bg-gray-100 mt-16 py-10">

    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    <div>
      <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
      <p className="text-gray-600">Live Jobs</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-600">500+</h2>
      <p className="text-gray-600">Companies</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-600">2000+</h2>
      <p className="text-gray-600">Job Seekers</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-600">300+</h2>
      <p className="text-gray-600">Employers</p>
    </div>

  </div>

</div>

    </div>
  );
}

export default Home;