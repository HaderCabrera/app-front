// components/LanguageSwitcher.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Moon, Sun, Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="p-1 border rounded text-primary-foreground bg-foreground"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
    </select>
  );
}