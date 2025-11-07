import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-[70vh] relative flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.freepik.com/free-photo/business-report-graphs-charts-business-reports-pile-documents-business-concept_1150-2254.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Business reports and analytics" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-gray-100/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            <span className="text-[#9D1B35]">{t('hero.title')}</span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-12">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;