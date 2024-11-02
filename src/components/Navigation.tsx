import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  lang: string;
  onLanguageChange: (lang: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  t: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  lang,
  onLanguageChange,
  isDark,
  onThemeToggle,
  t,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Capybara<span className="text-gray-900 dark:text-white">IT</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              {t.nav.services}
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              {t.nav.contact}
            </a>
            <LanguageSelector currentLang={lang} onLanguageChange={onLanguageChange} />
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector currentLang={lang} onLanguageChange={onLanguageChange} />
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              {t.nav.services}
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              {t.nav.about}
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};