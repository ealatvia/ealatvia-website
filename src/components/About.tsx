import React from 'react';
import { Users, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
    t('about.point4')
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')} <span className="text-[#9D1B35]">{t('about.titleHighlight')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-[#9D1B35]/10 p-4 rounded-full">
                <Users className="w-12 h-12 text-[#9D1B35]" />
              </div>
            </div>
            
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('about.text')}
            </p>

            <div className="space-y-6">
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3 text-gray-700 leading-relaxed">
                    <span className="w-2 h-2 bg-[#9D1B35] rounded-full flex-shrink-0 mt-3"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              {t('about.boardTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="public/arturs.jpg"
                    alt="Artūrs Kaņepājs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Artūrs Kaņepājs</h4>
                <a 
                  href="https://www.linkedin.com/in/arturs-kanepajs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-1"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <p className="text-sm text-gray-600">({t('about.boardChairman')})</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="public/kalvis.jpg"
                    alt="Kalvis Kalniņš"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Kalvis Kalniņš</h4>
                <a 
                  href="https://www.linkedin.com/in/kalvis-kalnins-lv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="public/kirils.jpg"
                    alt="Kirils Surovovs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Kirils Surovovs</h4>
                <a 
                  href="https://www.linkedin.com/in/kirils-surovovs-092b69a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;