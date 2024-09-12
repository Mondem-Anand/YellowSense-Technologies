import React from "react";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
    </div>
  );
};

export default JobDetails;
