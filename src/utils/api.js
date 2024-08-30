export const fetchJobListings = async (company) => {
    // Simulating an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: `Software Engineer at ${company}`, location: 'San Francisco, CA' },
          { title: `Data Scientist at ${company}`, location: 'Seattle, WA' },
          { title: `Product Manager at ${company}`, location: 'New York, NY' },
        ]);
      }, 1000);
    });
  };