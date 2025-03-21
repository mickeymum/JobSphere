import { useState } from "react";

function JobSeekerDashboard() {
  // Sample job listings (replace with real API later)
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCorp" },
    { id: 2, title: "Backend Engineer", company: "CodeMasters" },
  ]);

  const handleApply = (jobTitle) => {
    alert(`You have applied for ${jobTitle}!`);
  };

  return (
    <div>
      <h2>Job Seeker Dashboard</h2>
      <p>Browse and apply for jobs.</p>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company}
            <button onClick={() => handleApply(job.title)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSeekerDashboard;
