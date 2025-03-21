import { useParams } from "react-router-dom";
import "./JobDetails.css"; // Ensure this file exists for styling

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", type: "Full-time", salary: "$70,000", description: "Looking for a skilled frontend developer with React experience." },
  { id: 2, title: "Backend Developer", company: "CodeBase", location: "New York, USA", type: "Part-time", salary: "$50,000", description: "Hiring a backend developer with Node.js and Express skills." },
  { id: 3, title: "UI/UX Designer", company: "DesignHub", location: "London, UK", type: "Full-time", salary: "$60,000", description: "Seeking a creative UI/UX designer with Figma expertise." },
];

function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2>Job not found.</h2>;
  }

  const handleApply = () => {
    const userEmail = localStorage.getItem("userEmail"); // Get logged-in user
    if (!userEmail) {
      alert("Please log in to apply for jobs.");
      return;
    }

    const application = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      userEmail: userEmail,
    };

    const savedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    savedApplications.push(application);
    localStorage.setItem("applications", JSON.stringify(savedApplications));

    alert("Application Submitted!");
  };

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <button className="apply-button" onClick={handleApply}>
        Apply for Job
      </button>
    </div>
  );
}

export default JobDetails;