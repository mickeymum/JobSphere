import { useState } from "react";
import { Link } from "react-router-dom";
import "./JobList.css"; // Create this file for styling

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", type: "Full-time", salary: "$70,000" },
  { id: 2, title: "Backend Developer", company: "CodeBase", location: "New York, USA", type: "Part-time", salary: "$50,000" },
  { id: 3, title: "UI/UX Designer", company: "DesignHub", location: "London, UK", type: "Full-time", salary: "$60,000" },
];

function JobList() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-list-container">
      <h2>Available Jobs</h2>
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="job-cards">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <Link to={`/job/${job.id}`} className="details-button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
