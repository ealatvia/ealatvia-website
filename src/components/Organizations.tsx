import React from 'react';
import { ExternalLink, Award, DollarSign, Heart, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Organizations: React.FC = () => {
  const { t } = useLanguage();

  const organizations = [
    {
      title: 'GiveWell',
      url: 'http://givewell.org/',
      description: t('organizations.givewell.desc'),
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Giving What We Can',
      url: 'http://givingwhatwecan.org/',
      description: t('organizations.gwwc.desc'),
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Animal Charity Evaluators',
      url: 'http://animalcharityevaluators.org/',
      description: t('organizations.ace.desc'),
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: '80,000 Hours',
      url: 'http://80000hours.org/',
      description: t('organizations.80k.desc'),
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section id="organizations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('organizations.title')} <span className="text-[#9D1B35]">{t('organizations.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('organizations.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {organizations.map((org, index) => (
            <a
              key={index}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 group border border-transparent hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#9D1B35]/10 p-3 rounded-full mr-4 group-hover:bg-[#9D1B35]/20 transition-colors duration-300">
                  <div className="text-[#9D1B35]">
                    {org.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9D1B35] transition-colors duration-300">
                    {org.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" />
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {org.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;