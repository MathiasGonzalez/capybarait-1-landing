import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer text-gray-600 dark:text-gray-300"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};