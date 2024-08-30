import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import SkillAssessment from './components/SkillAssessment';
import JobListings from './components/JobListings';
import ResumeBuilder from './components/ResumeBuilder';
import InterviewPrep from './components/InterviewPrep';
import { fetchJobListings } from './utils/api';

const companies = ['Microsoft', 'Amazon', 'Google', 'Apple', 'Facebook', 'Netflix', 'Tesla', 'IBM', 'Oracle', 'Adobe'];

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [advice, setAdvice] = useState('');
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    if (selectedCompany) {
      fetchJobListings(selectedCompany).then(setJobListings);
    }
  }, [selectedCompany]);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const generateAdvice = () => {
    if (!selectedCompany || selectedSkills.length === 0) {
      setAdvice('Please select a company and at least one skill.');
      return;
    }

    const adviceText = `To increase your chances of getting hired at ${selectedCompany}, focus on strengthening your skills in ${selectedSkills.join(', ')}. Tailor your resume to highlight relevant experiences and practice coding interviews specific to ${selectedCompany}.`;

    setAdvice(adviceText);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">TechCareerBoost</h1>
      
      <div className="mb-4">
        <label className="block mb-2">Select a company:</label>
        <select
          value={selectedCompany}
          onChange={handleCompanyChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Choose a company</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>

      <SkillAssessment onSkillsChange={setSelectedSkills} />

      <button
        onClick={generateAdvice}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Get Career Advice
      </button>

      {advice && (
        <div className="mt-4 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
          <div className="flex">
            <AlertCircle className="h-6 w-6 mr-2" />
            <div>
              <p className="font-bold">Career Advice</p>
              <p>{advice}</p>
            </div>
          </div>
        </div>
      )}

      <JobListings listings={jobListings} />
      <ResumeBuilder skills={selectedSkills} targetCompany={selectedCompany} />
      <InterviewPrep />
    </div>
  );
};

export default App;
