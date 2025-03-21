import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Discover thousands of job opportunities that match your skills.</p>
        <div className="search-bar">
          <input type="text" placeholder="Job title or keyword" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </div>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <h2>Explore Job Categories</h2>
        <div className="categories">
          <div className="category">Tech</div>
          <div className="category">Marketing</div>
          <div className="category">Design</div>
          <div className="category">Finance</div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Google - San Francisco</p>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Meta - Remote</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
