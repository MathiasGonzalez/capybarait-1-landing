import React from 'react';
import { Users, Target, Laptop, Brain } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ServiceCard } from './components/ServiceCard';
import { ContactModal } from './components/ContactModal';
import { useDarkMode } from './hooks/useDarkMode';
import { translations } from './i18n/translations';

function App() {
  const [lang, setLang] = React.useState('en');
  const [isDark, setIsDark] = useDarkMode();
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const t = translations[lang as keyof typeof translations];

  const toggleDark = () => setIsDark(!isDark);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navigation 
        lang={lang} 
        onLanguageChange={setLang}
        isDark={isDark}
        onThemeToggle={toggleDark}
        t={t}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 to-transparent dark:from-primary-600/20 blur-3xl" />
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
              {t.hero.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          <button
            onClick={openContactModal}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Users className="w-8 h-8" />} title={t.services.consulting} />
            <ServiceCard icon={<Target className="w-8 h-8" />} title={t.services.development} />
            <ServiceCard icon={<Laptop className="w-8 h-8" />} title={t.services.cloud} />
            <ServiceCard icon={<Brain className="w-8 h-8" />} title={t.services.ai} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t.about.text}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent blur-2xl" />
            <h2 className="relative text-3xl font-bold mb-4 text-white">{t.contact.title}</h2>
            <p className="relative text-xl mb-8 text-primary-100">{t.contact.subtitle}</p>
            <button
              onClick={openContactModal}
              className="relative bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              {t.contact.button}
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        t={t}
      />
    </div>
  );
}

export default App;