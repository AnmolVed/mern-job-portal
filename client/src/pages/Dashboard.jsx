import Navbar from "../components/Navbar";

function Dashboard() {

  return (
    <div>

      <Navbar/>

      <div className="text-center mt-20">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to Job Portal
        </p>

      </div>

    </div>
  );

}

export default Dashboard;