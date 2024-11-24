import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ score = 0, correctAnswers = [], totalQuestions = 10, restartQuiz }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    restartQuiz();
    navigate('/');
  };

  const getPerformanceMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "Perfect! You're a Quiz Master!";
    if (percentage >= 75) return "Great job! You're almost there!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Don't worry! Practice makes perfect!";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800">
      <div className="text-center p-8 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 rounded-3xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Quiz Completed</h2>
        <p className="text-xl text-white mb-2">
          Your Score: <span className="font-semibold">{score} / {totalQuestions}</span>
        </p>
        <p className="text-lg italic text-purple-300 mb-6">{getPerformanceMessage()}</p>

        {/* Correct Answers Section Removed */}

        <button
          onClick={handleRestart}
          className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transform hover:scale-105 transition-all duration-200"
        >
          Retry Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;
