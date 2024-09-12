import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      setJobs((prevJobs) => [...prevJobs, ...response.data.jobs]); // Append new jobs
    } catch (err) {
      setError("Error fetching jobs.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && jobs.length === 0 && <p>No jobs found.</p>}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
};

export default Jobs;
