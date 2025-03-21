import { useState } from "react";

function EmployerDashboard() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobListings, setJobListings] = useState([]);

  const handlePostJob = (e) => {
    e.preventDefault();
    if (!jobTitle || !company) return alert("Please fill in all fields.");
    
    const newJob = { id: Date.now(), title: jobTitle, company };
    setJobListings([...jobListings, newJob]);

    setJobTitle("");
    setCompany("");
  };

  return (
    <div>
      <h2>Employer Dashboard</h2>
      <p>Post and manage job listings.</p>
      
      <form onSubmit={handlePostJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="submit">Post Job</button>
      </form>

      <h3>Job Listings</h3>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployerDashboard;
