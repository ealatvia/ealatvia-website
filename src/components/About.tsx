import React from 'react';
import { Users, Calendar, Receipt, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    {
      text: t('about.point1'),
      icon: <Calendar className="w-6 h-6" />
    },
    {
      text: t('about.point2'),
      icon: <Receipt className="w-6 h-6" />
    },
    {
      text: t('about.point3'),
      icon: <Coffee className="w-6 h-6" />
    }
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
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <div className="text-blue-600">
                      {point.icon}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {point.text}
                  </p>
                </div>
              ))}
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
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGVI4jI8eNNLg/profile-displayphoto-shrink_800_800/B4DZQYIjFIHwAc-/0/1735571682163?e=1763596800&v=beta&t=yxuNgrzbg_GRiztja43CsRBFa1QwgHDvM3LFaU182Hs"
                    alt="Artūrs Kaņepājs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Artūrs Kaņepājs</h4>
                <p className="text-sm text-gray-600">({t('about.boardChairman')})</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQE1TXK86qkrjg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693560008372?e=1763596800&v=beta&t=sUYs15JlFD2SslPmvZV6hAV00NHAMyh03nlG1sNHhls"
                    alt="Kalvis Kalniņš"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Kalvis Kalniņš</h4>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C4E03AQE7xvyhT1ijAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647355835355?e=1763596800&v=beta&t=YthgZiWydq4BvKVlDncWWop_lBT27YhfY818qT2y6VY"
                    alt="Kirils Surovovs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Kirils Surovovs</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;