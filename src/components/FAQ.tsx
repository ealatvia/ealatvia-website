import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') },
    { question: t('faq.q9'), answer: t('faq.a9') },
    { question: t('faq.q10'), answer: t('faq.a10') },
    { question: t('faq.q11'), answer: t('faq.a11') },
    { question: t('faq.q12'), answer: t('faq.a12') },
    { question: t('faq.q13'), answer: t('faq.a13') },
    { question: t('faq.q14'), answer: t('faq.a14') },
    { question: t('faq.q15'), answer: t('faq.a15') },
    { question: t('faq.q16'), answer: t('faq.a16') },
    { question: t('faq.q17'), answer: t('faq.a17') },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')} <span className="text-[#9D1B35]">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-[#9D1B35] transition-colors duration-200 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#9D1B35] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
