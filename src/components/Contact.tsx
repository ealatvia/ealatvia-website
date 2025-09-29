import React, { useState } from 'react';
import { Facebook, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`${t('contact.form.message')} no ${formData.name}`);
    const body = encodeURIComponent(`${t('contact.form.name')}: ${formData.name}\n${t('contact.form.email')}: ${formData.email}\n\n${t('contact.form.message')}:\n${formData.message}`);
    const mailtoUrl = `mailto:effectivealtruismlatvia@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/EALatvia',
      icon: <Facebook className="w-6 h-6" />,
      color: 'hover:text-blue-600',
      description: t('contact.followDesc')
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/effective-altruism-latvia/',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'hover:text-blue-700',
      description: t('contact.followDesc')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#9D1B35]">{t('contact.title')}</span> {t('contact.titleHighlight')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t('contact.follow')}</h3>
            
            <div className="space-y-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${link.color}`}
                >
                  <div className="flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-current transition-colors duration-300">
                      {link.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {link.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-6 h-6 text-[#9D1B35]" />
                <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
              </div>
              <a 
                href="mailto:effectivealtruismlatvia@gmail.com" 
                className="text-[#9D1B35] hover:underline"
              >
                effectivealtruismlatvia@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('contact.form.thanks')}</h4>
                  <p className="text-gray-600">{t('contact.form.success')}</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D1B35] focus:border-transparent transition-colors duration-200"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D1B35] focus:border-transparent transition-colors duration-200"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D1B35] focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#9D1B35] text-white py-3 px-6 rounded-lg hover:bg-[#8A1530] transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('contact.form.send')}</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;