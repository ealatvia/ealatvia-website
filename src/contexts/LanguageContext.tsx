import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'lv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  lv: {
    // Header
    'nav.home': 'Sākums',
    'nav.definition': 'Definīcija',
    'nav.resources': 'Resursi',
    'nav.organizations': 'Organizācijas',
    'nav.contact': 'Kontakti',
    
    // Hero
    'hero.title': 'Effective Altruism Latvia',
    'hero.subtitle': 'Mēs katrs varam radīt jēgpilnu, pozitīvu ietekmi plašā mērogā. Lai to panāktu, jāatbalsta labdarības organizācijas, kuru efektivitāte ir pierādīta un apstiprināta.',
    'hero.global': 'Globāla ietekme',
    'hero.scientific': 'Empātija un rūpes',
    
    // Definition
    'definition.title': 'Kas ir',
    'definition.titleHighlight': 'efektīvais altruisms',
    'definition.text': 'Efektīvais altruisms ir filozofija un sociālā kustība, kas izmanto datos balstītu pieeju un rūpīgu analīzi, lai atklātu efektīvākos veidus, kā uzlabot pasauli. Efektīvā altruisma piekritēji apņemas izvērtēt dažādas iespējas palīdzēt citiem, un tad rīkoties, lai radītu pēc iespējas lielākas pozitīvās pārmaiņas. Šī plašā, zinātnē balstītā pieeja atšķir efektīvo altruismu no tradicionāla altruisma vai labdarības.',
    'definition.evidence': 'Pierādījumi',
    'definition.evidenceDesc': 'Izmantojam zinātniskos pētījumus un datus, lai pieņemtu informētus lēmumus.',
    'definition.focus': 'Mērķtiecība',
    'definition.focusDesc': 'Fokusējamies uz darbībām, kas rada vislielāko pozitīvo ietekmi.',
    'definition.analysis': 'Kopiena',
    'definition.analysisDesc': 'Tiekamies, komunicējam un atbalstām viens otru.',
    
    // Resources
    'resources.title': 'Starptautiskie',
    'resources.titleHighlight': 'resursi',
    'resources.subtitle': 'Uzziniet vairāk par efektīvo altruismu no uzticamiem starptautiskiem avotiem',
    'resources.ea.title': 'Effective Altruism',
    'resources.ea.desc': 'Galvenā starptautiskā EA mājaslapā ar resursiem un informāciju',
    'resources.forum.title': 'EA Forum',
    'resources.forum.desc': 'Diskusiju forums EA kopienas dalībniekiem un ekspertiem',
    
    // Organizations
    'organizations.title': 'Populārās',
    'organizations.titleHighlight': 'organizācijas',
    'organizations.subtitle': 'Uzziniet par vadošajām EA organizācijām un to ieguldījumu pasaules uzlabošanā',
    'organizations.givewell.desc': 'Pēta un iesaka efektīvākās labdarības organizācijas, kas izglābj dzīvības un uzlabo cilvēku labklājību.',
    'organizations.gwwc.desc': 'Kopiena cilvēkiem, kas apņēmušies ziedot ievērojamu daļu no saviem ienākumiem efektīvām labdarības organizācijām.',
    'organizations.ace.desc': 'Pēta un iesaka efektīvākās organizācijas, kas aizstāv dzīvnieku tiesības un labklājību.',
    'organizations.80k.desc': 'Palīdz cilvēkiem atrast karjeru, kurā viņi var sasniegt vislielāko pozitīvo ietekmi.',
    
    // Contact
    'contact.title': 'Kontakti',
    'contact.titleHighlight': 'un saziņa',
    'contact.subtitle': 'Sazinies ar mums, lai uzzinātu vairāk vai pievienotos mūsu kopiena',
    'contact.follow': 'Sekojiet mums',
    'contact.followDesc': 'Sekojiet mūsu jaunumiem',
    'contact.email': 'E-pasts',
    'contact.form.title': 'Sazinies ar mums',
    'contact.form.name': 'Vārds',
    'contact.form.email': 'E-pasts',
    'contact.form.message': 'Ziņojums',
    'contact.form.namePlaceholder': 'Jūsu vārds',
    'contact.form.emailPlaceholder': 'jūsu@epasts.lv',
    'contact.form.messagePlaceholder': 'Jūsu ziņojums...',
    'contact.form.send': 'Sūtīt ziņojumu',
    'contact.form.thanks': 'Paldies!',
    'contact.form.success': 'Jūsu e-pasta programma tiks atvērta ar sagatavotu ziņojumu.',
    
    // Footer
    'footer.description': 'Mēs cenšamies radīt pozitīvas pārmaiņas pasaulē, atbalstot zinātniski pamatotu pieeju globālo problēmu risināšanā.',
    'footer.copyright': '© 2025 Effective Altruism Latvia'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.definition': 'Definition',
    'nav.resources': 'Resources',
    'nav.organizations': 'Organizations',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Effective Altruism Latvia',
    'hero.subtitle': 'Each of us can make a meaningful, positive impact on a large scale. Everyone has the opportunity to save lives and prevent unnecessary suffering.',
    'hero.global': 'Global impact',
    'hero.scientific': 'Empathy and care',
    
    // Definition
    'definition.title': 'What is',
    'definition.titleHighlight': 'effective altruism',
    'definition.text': 'Effective altruism is a philosophy and social movement that uses data-based approach and careful analysis to discover the most effective ways to improve the world. Effective altruists commit to evaluating various opportunities to help others, and then act to create the greatest possible positive changes. This broad, science-based approach distinguishes effective altruism from traditional altruism or charity.',
    'definition.evidence': 'Evidence',
    'definition.evidenceDesc': 'We use scientific research and data to make informed decisions.',
    'definition.focus': 'Focus',
    'definition.focusDesc': 'We focus on actions that create the greatest positive impact.',
    'definition.analysis': 'Community',
    'definition.analysisDesc': 'We meet, communicate and support each other.',
    
    // Resources
    'resources.title': 'International',
    'resources.titleHighlight': 'resources',
    'resources.subtitle': 'Learn more about effective altruism from trusted international sources',
    'resources.ea.title': 'Effective Altruism',
    'resources.ea.desc': 'The main international EA website with resources and information',
    'resources.forum.title': 'EA Forum',
    'resources.forum.desc': 'Discussion forum for EA community members and experts',
    
    // Organizations
    'organizations.title': 'Popular',
    'organizations.titleHighlight': 'organizations',
    'organizations.subtitle': 'Learn about leading EA organizations and their contribution to improving the world',
    'organizations.givewell.desc': 'Researches and recommends the most effective charities that save lives and improve well-being.',
    'organizations.gwwc.desc': 'A community of people who have pledged to donate a significant portion of their income to effective charities.',
    'organizations.ace.desc': 'Researches and recommends the most effective organizations that advocate for animal rights and welfare.',
    'organizations.80k.desc': 'Helps people find careers where they can make the greatest positive impact on the world.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.titleHighlight': 'and communication',
    'contact.subtitle': 'Get in touch with us to learn more or join our community',
    'contact.follow': 'Follow us',
    'contact.followDesc': 'Follow our updates',
    'contact.email': 'Email',
    'contact.form.title': 'Get in touch',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.send': 'Send message',
    'contact.form.thanks': 'Thank you!',
    'contact.form.success': 'Your email program will open with a prepared message.',
    
    // Footer
    'footer.description': 'We try to create positive change in the world by supporting evidence-based approaches to global problems.',
    'footer.copyright': '© 2025 Effective Altruism Latvia. All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('lv');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};