import React, { useState } from 'react';

const ResumeBuilder = ({ skills, targetCompany }) => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    experience: '',
    education: '',
  });

  const handleInputChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const generateResume = () => {
    // Logic to generate resume based on input data, skills, and target company
    console.log('Generating resume...', { resumeData, skills, targetCompany });
    alert('Resume generated! Check the console for details.');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
      <form>
        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          name="experience"
          value={resumeData.experience}
          onChange={handleInputChange}
          placeholder="Work Experience"
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <textarea
          name="education"
          value={resumeData.education}
          onChange={handleInputChange}
          placeholder="Education"
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <button
          type="button"
          onClick={generateResume}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeBuilder;