import React, { useState, useEffect } from "react";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div>
      <h1>Bookmarked Jobs</h1>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet</p>
      ) : (
        bookmarks.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkList;
