import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz({ category, setScore, setQuizStarted }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // Timer (15 seconds per question)
  const [showAnswer, setShowAnswer] = useState(false); // Highlight correct answer
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const questions = {
    'Web Development': [
      { question: 'What is React?', options: ['Library', 'Framework', 'Language'], answer: 'Library' },
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Home Text Markup Language', 'Hyper Tool Markup Language'], answer: 'HyperText Markup Language' },
      { question: 'Which language is used for styling web pages?', options: ['HTML', 'CSS', 'JavaScript'], answer: 'CSS' },
      { question: 'What is JSX in React?', options: ['JavaScript XML', 'Java Style Expressions', 'Java Source Extensions'], answer: 'JavaScript XML' },
      { question: 'What is a CSS selector used for?', options: ['To select HTML elements', 'To add animations', 'To change the background color'], answer: 'To select HTML elements' },
      { question: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Mapping', 'Document Oriented Markup'], answer: 'Document Object Model' },
      { question: 'Which hook is used for managing side effects in React?', options: ['useEffect', 'useState', 'useRef'], answer: 'useEffect' },
      { question: 'What is the purpose of React Router?', options: ['Routing', 'State Management', 'Styling'], answer: 'Routing' },
      { question: 'Which HTML tag is used to define a JavaScript script?', options: ['<script>', '<js>', '<code>'], answer: '<script>' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Color Style Sheets', 'Creative Style Syntax'], answer: 'Cascading Style Sheets' },
    ],
    'Graphic Design': [
      { question: 'What is the full form of RGB?', options: ['Red Green Blue', 'Red Gold Blue', 'Red Green Black'], answer: 'Red Green Blue' },
      { question: 'Which software is primarily used for graphic design?', options: ['Adobe Photoshop', 'Microsoft Excel', 'Google Chrome'], answer: 'Adobe Photoshop' },
      { question: 'What is DPI in design?', options: ['Dots Per Inch', 'Data Per Inch', 'Dimensions Per Image'], answer: 'Dots Per Inch' },
      { question: 'What is the purpose of layers in Photoshop?', options: ['To organize elements', 'To create animations', 'To edit code'], answer: 'To organize elements' },
      { question: 'What is a vector image?', options: ['Created using mathematical paths', 'Pixel-based image', 'Layer-based design'], answer: 'Created using mathematical paths' },
      { question: 'Which tool in Photoshop selects an area?', options: ['Lasso Tool', 'Brush Tool', 'Pen Tool'], answer: 'Lasso Tool' },
      { question: 'What does CMYK stand for?', options: ['Cyan Magenta Yellow Black', 'Color Mapping Yellow Key', 'Cyan Mapping Yellow Black'], answer: 'Cyan Magenta Yellow Black' },
      { question: 'What is the shortcut for copy in design tools?', options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+Z'], answer: 'Ctrl+C' },
      { question: 'What is the use of typography in design?', options: ['Arranging fonts', 'Adding color', 'Drawing'], answer: 'Arranging fonts' },
      { question: 'Which file type is commonly used for logos?', options: ['SVG', 'JPEG', 'BMP'], answer: 'SVG' },
    ],
    'AI & Digital Marketing': [
      { question: 'What does AI stand for?', options: ['Artificial Intelligence', 'Artificial Interaction', 'Auto Information'], answer: 'Artificial Intelligence' },
      { question: 'Which programming language is widely used in AI?', options: ['Python', 'Java', 'C++'], answer: 'Python' },
      { question: 'What is the purpose of SEO?', options: ['Improve search rankings', 'Build websites', 'Generate graphics'], answer: 'Improve search rankings' },
      { question: 'What does PPC stand for?', options: ['Pay Per Click', 'Post Per Campaign', 'Public Paid Content'], answer: 'Pay Per Click' },
      { question: 'Which platform is best for B2B marketing?', options: ['LinkedIn', 'Instagram', 'Twitter'], answer: 'LinkedIn' },
      { question: 'What is a neural network in AI?', options: ['A system modeled on the human brain', 'A programming language', 'A cloud platform'], answer: 'A system modeled on the human brain' },
      { question: 'What does Google Analytics help with?', options: ['Track website traffic', 'Build websites', 'Optimize databases'], answer: 'Track website traffic' },
      { question: 'Which is an AI-powered voice assistant?', options: ['Siri', 'Excel', 'Photoshop'], answer: 'Siri' },
      { question: 'What is the key benefit of AI in marketing?', options: ['Personalization', 'Cost Reduction', 'Speed'], answer: 'Personalization' },
      { question: 'What does chatbot technology help with?', options: ['Customer interaction', 'Programming', 'SEO'], answer: 'Customer interaction' },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleTimeout(); // Move to next question if time runs out
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [questionIndex]);

  const handleTimeout = () => {
    setShowAnswer(true);
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === questions[category][questionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const moveToNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (questionIndex < questions[category].length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(15);
    } else {
      setQuizStarted(true);
      navigate('/result');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('https://img.pikbest.com/wp/202408/program-code-3d-rendering-of-abstract-purple-coding-background-with-mock-up-and-big-data-illuminating-the-concept-programming_9762612.jpg!w700wp')", // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-6 sm:p-12 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 rounded-3xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">{category} Quiz</h2>
        <p className="text-xl sm:text-2xl mb-8 text-center text-white">Time left: {timeLeft}s</p>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl mb-6 text-center text-purple-700 font-semibold">
            {questions[category][questionIndex].question}
          </h3>
          {questions[category][questionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full py-4 px-6 sm:px-8 rounded-xl mb-4 transition-all duration-300 transform ${
                showAnswer
                  ? option === questions[category][questionIndex].answer
                    ? 'bg-green-500 text-white'
                    : option === selectedOption
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-300'
                  : 'bg-purple-600 text-white hover:bg-purple-500 hover:scale-105'
              }`}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
