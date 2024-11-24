import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz({ category, setScore, setQuizStarted }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Timer (10 seconds per question)
  const navigate = useNavigate();

  const questions = {
    'Web Development': [
      { question: 'What is React?', options: ['Library', 'Framework', 'Language'], answer: 'Library' },
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Home Text Markup Language', 'Hyper Tool Markup Language'], answer: 'HyperText Markup Language' },
      { question: 'Which language is used for styling web pages?', options: ['HTML', 'CSS', 'JavaScript'], answer: 'CSS' },
      { question: 'What is a CSS selector used for?', options: ['To select HTML elements', 'To add animations', 'To change the background color'], answer: 'To select HTML elements' },
      { question: 'What is the use of JavaScript?', options: ['Web development', 'Database management', 'Server-side programming'], answer: 'Web development' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Color Styling Sheets', 'Coded Style Sheets'], answer: 'Cascading Style Sheets' },
      { question: 'Which one is used for routing in React?', options: ['React-Router', 'React-Route', 'React-Redux'], answer: 'React-Router' },
      { question: 'What is the purpose of the `useEffect` hook?', options: ['Side effects', 'Event handling', 'State management'], answer: 'Side effects' },
      { question: 'Which method is used to update the state in React?', options: ['setState()', 'updateState()', 'changeState()'], answer: 'setState()' },
      { question: 'What is JSX?', options: ['JavaScript XML', 'Java Style Expressions', 'Java Source Extensions'], answer: 'JavaScript XML' },
    ],
    'Graphic Design': [
      { question: 'What is the full form of RGB?', options: ['Red Green Blue', 'Red Gold Blue', 'Red Green Black'], answer: 'Red Green Blue' },
      { question: 'Which software is used for graphic design?', options: ['Adobe Photoshop', 'Microsoft Word', 'Google Chrome'], answer: 'Adobe Photoshop' },
      { question: 'What is the meaning of vector graphics?', options: ['Images created with mathematical equations', 'Images created with pixels', 'Images that use layers'], answer: 'Images created with mathematical equations' },
      { question: 'Which tool in Photoshop is used to select an area?', options: ['Lasso Tool', 'Brush Tool', 'Eraser Tool'], answer: 'Lasso Tool' },
      { question: 'What does DPI stand for?', options: ['Dots Per Inch', 'Dots Per Image', 'Dimensions Per Inch'], answer: 'Dots Per Inch' },
      { question: 'What is the shortcut to copy in Photoshop?', options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z'], answer: 'Ctrl + C' },
      { question: 'Which color model is used in printing?', options: ['CMYK', 'RGB', 'HSB'], answer: 'CMYK' },
      { question: 'What is the process of adjusting the brightness of an image?', options: ['Exposure', 'Hue', 'Saturation'], answer: 'Exposure' },
      { question: 'What is a layer in Photoshop?', options: ['A level of image composition', 'A color palette', 'A filter effect'], answer: 'A level of image composition' },
      { question: 'Which file extension is used for vector images?', options: ['.ai', '.jpg', '.png'], answer: '.ai' },
    ],
    'AI & Digital Marketing': [
      { question: 'What does AI stand for?', options: ['Artificial Intelligence', 'Artificial Interaction', 'Auto Image'], answer: 'Artificial Intelligence' },
      { question: 'Which company developed TensorFlow?', options: ['Google', 'Microsoft', 'Apple'], answer: 'Google' },
      { question: 'What is SEO?', options: ['Search Engine Optimization', 'Social Engagement Operations', 'Software Enterprise Operations'], answer: 'Search Engine Optimization' },
      { question: 'Which of the following is a programming language used in AI?', options: ['Python', 'HTML', 'CSS'], answer: 'Python' },
      { question: 'Which social media platform is best for B2B marketing?', options: ['LinkedIn', 'Instagram', 'Facebook'], answer: 'LinkedIn' },
      { question: 'What is a neural network in AI?', options: ['A system that mimics the human brain', 'A type of computer hardware', 'A network of online content creators'], answer: 'A system that mimics the human brain' },
      { question: 'What is the purpose of Google Analytics?', options: ['Track website performance', 'Create websites', 'Design ads'], answer: 'Track website performance' },
      { question: 'What does PPC stand for in digital marketing?', options: ['Pay Per Click', 'Private Paid Campaign', 'Public Post Click'], answer: 'Pay Per Click' },
      { question: 'What is the main advantage of using AI in marketing?', options: ['Automation', 'Personalization', 'Cost Reduction'], answer: 'Personalization' },
      { question: 'What does chatbot technology help with?', options: ['Customer service automation', 'Sales process', 'Product development'], answer: 'Customer service automation' },
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          nextQuestion();
          return 10; // Reset timer for next question
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const nextQuestion = () => {
    if (questionIndex < questions[category].length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizStarted(true);
      navigate('/result');
    }
  };

  const handleAnswer = (option) => {
    if (option === questions[category][questionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    nextQuestion();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800">
      <div className="p-8 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 rounded-3xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">{category} Quiz</h2>
        <p className="text-lg mb-6 text-center text-white">Time left: {timeLeft}s</p>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl mb-6 text-center text-purple-700 font-semibold">{questions[category][questionIndex].question}</h3>
          {questions[category][questionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-purple-500 text-white py-3 px-6 rounded-xl mb-3 hover:bg-purple-400 transition-all duration-300 transform hover:scale-105"
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
