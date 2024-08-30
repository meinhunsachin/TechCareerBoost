import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SkillAssessment = ({ onSkillsChange }) => {
  const [skills, setSkills] = useState([
    { name: 'React', level: 0 },
    { name: 'JavaScript', level: 0 },
    { name: 'Python', level: 0 },
    { name: 'Data Structures', level: 0 },
    { name: 'Algorithms', level: 0 },
  ]);

  useEffect(() => {
    onSkillsChange(skills.filter(skill => skill.level > 0).map(skill => skill.name));
  }, [skills, onSkillsChange]);

  const handleSkillChange = (index, newLevel) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = newLevel;
    setSkills(updatedSkills);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Skill Assessment</h2>
      {skills.map((skill, index) => (
        <div key={skill.name} className="mb-4">
          <label className="block mb-2">{skill.name}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={skill.level}
            onChange={(e) => handleSkillChange(index, parseInt(e.target.value))}
            className="w-full"
          />
          <span>{skill.level}/10</span>
        </div>
      ))}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skills}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="level" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillAssessment;