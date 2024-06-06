import React from 'react';

const NavigationArrow = ({ direction, onClick, label, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 ${className}`}
  >
    {direction === 'left' ? (
      <>
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-200 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span className="text-gray-700 dark:text-gray-200">{label}</span>
      </>
    ) : (
      <>
        <span className="text-gray-700 dark:text-gray-200">{label}</span>
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-200 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </>
    )}
  </button>
);

export default NavigationArrow;
