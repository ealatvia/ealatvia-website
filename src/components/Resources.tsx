import React from 'react';
import { ExternalLink, Users, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Resources: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    {
      title: t('resources.ea.title'),
      url: 'http://effectivealtruism.org/',
      description: t('resources.ea.desc'),
      icon: <Users className="w-6 h-6" />
    },
    {
      title: t('resources.forum.title'),
      url: 'http://effective-altruism.com/',
      description: t('resources.forum.desc'),
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('resources.title')} <span className="text-[#9D1B35]">{t('resources.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9D1B35] transition-colors duration-300">
                    {resource.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;