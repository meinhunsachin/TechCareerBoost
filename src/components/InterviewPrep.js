import React, { useState } from 'react';

const questions = [
  { id: 1, question: 'What are your strengths and weaknesses?' },
  { id: 2, question: 'Why do you want to work for our company?' },
  { id: 3, question: 'Describe a challenging work situation and how you overcame it.' },
];

const InterviewPrep = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserAnswer('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Interview Preparation</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Question:</h3>
        <p>{questions[currentQuestion].question}</p>
      </div>
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full p-2 mb-2 border rounded"
        rows={4}
      ></textarea>
      <button
        onClick={nextQuestion}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Next Question
      </button>
    </div>
  );
};

export default InterviewPrep;