import React from 'react';
import { BookOpen, Target, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Definition: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="definition" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('definition.title')} <span className="text-[#9D1B35]">{t('definition.titleHighlight')}</span>?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('definition.text')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('definition.evidence')}</h3>
              <p className="text-gray-600">
                {t('definition.evidenceDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#9D1B35]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#9D1B35]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('definition.focus')}</h3>
              <p className="text-gray-600">
                {t('definition.focusDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smile className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('definition.analysis')}</h3>
              <p className="text-gray-600">
                {t('definition.analysisDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;