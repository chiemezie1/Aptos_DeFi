import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
