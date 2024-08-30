import React from 'react';

const JobListings = ({ listings }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Job Listings</h2>
      {listings.length > 0 ? (
        <ul>
          {listings.map((job, index) => (
            <li key={index} className="mb-2">
              <strong>{job.title}</strong> - {job.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>No job listings available at the moment.</p>
      )}
    </div>
  );
};

export default JobListings;