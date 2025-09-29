import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-[#9D1B35]" fill="currentColor" />
            <span className="text-xl font-semibold">Effective Altruism Latvia</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;