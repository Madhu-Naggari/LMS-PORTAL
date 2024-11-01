import React, { useState } from 'react';

const questionsAndAnswers = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
  },
  {
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application. They can be class-based or functional."
  },
  {
    question: "What is the difference between state and props?",
    answer: "State is local data storage that is local to the component, while props are used to pass data between components."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML. It allows you to write HTML structures in the same file as JavaScript code."
  },
  {
    question: "How do you manage side effects in React?",
    answer: "You can manage side effects in React using the useEffect hook."
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Frequently Asked Questions</h2>
      <div className="bg-white shadow-md rounded-lg">
        {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left p-4 border-b border-gray-200 hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-semibold">{item.question}</h3>
            </button>
            {openIndex === index && (
              <div className="p-4">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
