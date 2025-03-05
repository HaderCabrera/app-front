
import Ico from './Ico.module.css'

import { SunIcon, MoonIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className= {`${Ico.ico} px-2 py-2 rounded`}
    >
      {/* Muestra el ícono correspondiente al tema */}
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6" /> 
      ) : (
        <SunIcon className="h-6 w-6" /> 
      )}
    </button>
  );
}