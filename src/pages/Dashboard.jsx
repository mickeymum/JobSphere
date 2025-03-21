import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerDashboard from "./JobSeekerDashboard";
import EmployerDashboard from "./EmployerDashboard";
import AdminDashboard from "./AdminDashboard";
import "./Dashboard.css"

function Dashboard() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole"); // Get role from storage
    if (role) {
      setUserRole(role);
    }
  }, []);

  if (!userRole) {
    return <h2>Please log in to access the dashboard.</h2>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to JobSphere Dashboard</h1>
      {userRole === "seeker" && <JobSeekerDashboard />}
      {userRole === "employer" && <EmployerDashboard />}
      {userRole === "admin" && <AdminDashboard />}
    </div>
  );
}

export default Dashboard;
