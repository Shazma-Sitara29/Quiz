import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CategorySelection from './components/Categroy';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // Function to restart quiz
  const restartQuiz = () => {
    setCategory(null);
    setScore(0);
    setQuizStarted(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-purple-900 text-white">
        <Routes>
          <Route path="/" element={!user ? <Login setUser={setUser} /> : <CategorySelection setCategory={setCategory} />} />
          <Route
            path="/quiz"
            element={category && !quizStarted ? (
              <Quiz category={category} setScore={setScore} setQuizStarted={setQuizStarted} />
            ) : null}
          />
          <Route
            path="/result"
            element={quizStarted ? <Result score={score} restartQuiz={restartQuiz} /> : null}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
