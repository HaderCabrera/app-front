'use client';


import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
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
      className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2"
    >
      {/* Muestra el ícono correspondiente al tema */}
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6" /> // Ícono para el tema oscuro
      ) : (
        <SunIcon className="h-6 w-6" /> // Ícono para el tema claro
      )}
    </button>
  );
}