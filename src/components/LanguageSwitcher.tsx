import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('lv')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'lv'
            ? 'bg-white text-[#9D1B35] shadow-sm'
            : 'text-gray-600 hover:text-[#9D1B35]'
        }`}
      >
        LV
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'en'
            ? 'bg-white text-[#9D1B35] shadow-sm'
            : 'text-gray-600 hover:text-[#9D1B35]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;