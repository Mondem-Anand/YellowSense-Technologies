const bookmarkJob = (job) => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    localStorage.setItem("bookmarkedJobs", JSON.stringify([...savedJobs, job]));
  };
  