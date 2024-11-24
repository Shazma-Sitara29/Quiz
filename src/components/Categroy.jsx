import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ["Web Development", "Graphic Design", "AI & Digital Marketing"];

function CategorySelection({ setCategory }) {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setCategory(category);
    navigate('/quiz');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://img.pikbest.com/wp/202408/program-code-3d-rendering-of-abstract-purple-coding-background-with-mock-up-and-big-data-illuminating-the-concept-programming_9762612.jpg!w700wp')",
      }}
    >
      <div className="relative bg-gradient-to-r from-purple-800 to-purple-600 p-16 rounded-xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">Select Quiz Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-6 px-8 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelection;
