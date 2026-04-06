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
    'nav.definition': 'Kas tas ir',
    'nav.about': 'Kas mēs esam',
    'nav.resources': 'Resursi',
    'nav.organizations': 'Organizācijas',
    'nav.faq': 'Jautājumi',
    'nav.contact': 'Kontakti',
    
    // Hero
    'hero.title': 'Effective Altruism Latvia',
    'hero.subtitle': 'Mēs katrs varam radīt jēgpilnu, pozitīvu ietekmi plašā mērogā, atbalstot labdarības organizācijas, kuru efektivitāte ir pierādīta.',
    'hero.global': 'Globāla ietekme',
    'hero.scientific': 'Empātija un rūpes',
    
    // Definition
    'definition.title': 'Kas ir',
    'definition.titleHighlight': 'efektīvais altruisms',
    'definition.text': 'Efektīvais altruisms (EA) ir filozofija un sociālā kustība, kas izmanto datos balstītu pieeju un rūpīgu analīzi, lai atklātu efektīvākos veidus, kā uzlabot pasauli. Efektīvā altruisma piekritēji izvērtē dažādas iespējas palīdzēt citiem un tad rīkojas, lai radītu pēc iespējas lielākas pozitīvās pārmaiņas. Šī plašā, zinātnē balstītā pieeja atšķir efektīvo altruismu no tradicionāla altruisma vai labdarības.',
    'definition.evidence': 'Pierādījumi',
    'definition.evidenceDesc': 'Izmantojam zinātniskos pētījumus un datus, lai pieņemtu informētus lēmumus.',
    'definition.focus': 'Mērķtiecība',
    'definition.focusDesc': 'Fokusējamies uz darbībām, kas rada vislielāko pozitīvo ietekmi.',
    'definition.analysis': 'Kopiena',
    'definition.analysisDesc': 'Tiekamies, komunicējam un atbalstam viens otru.',
    
    // About
    'about.title': 'Kas mēs esam',
    'about.titleHighlight': ' ',
    'about.text': 'Effective Altruism Latvia ir NVO, kas dibināta 2023. gadā un kopš tā laika',
    'about.point1': 'organizē EA popularizēšanas pasākumus,',
    'about.point2': 'nodrošina iespēju saņemt nodokļu atmaksu par ziedojumiem efektīvajām labdarības organizācijām,',
    'about.point3': 'uztur efektīvās ziedošanas platformu <a href="https://ziedoefektivi.lv/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">ziedoefektivi.lv</a>,',
    'about.point4': 'organizē neformālas tikšanās cilvēkiem, kas interesējas par EA.',
    'about.boardTitle': 'Valdes locekļi',
    'about.boardChairman': 'valdes priekšsēdētājs',
    
    // Resources
    'resources.title': 'Starptautiskie',
    'resources.titleHighlight': 'resursi',
    'resources.subtitle': 'Uzziniet vairāk par efektīvo altruismu no uzticamiem starptautiskiem avotiem',
    'resources.ea.title': 'Effective Altruism',
    'resources.ea.desc': 'Galvenā starptautiskā EA mājaslapā ar resursiem un informāciju',
    'resources.forum.title': 'EA Forum',
    'resources.forum.desc': 'Diskusiju forums EA kopienas dalībniekiem un ekspertiem',
    
    // Organizations
    'organizations.title': 'Populāras',
    'organizations.titleHighlight': 'organizācijas',
    'organizations.subtitle': 'Uzziniet par vadošajām EA organizācijām un to ieguldījumu pasaules uzlabošanā',
    'organizations.givewell.desc': 'Pēta un iesaka efektīvākās labdarības organizācijas, kas izglābj dzīvības un uzlabo cilvēku labklājību.',
    'organizations.gwwc.desc': 'Kopiena cilvēkiem, kas apņēmušies ziedot ievērojamu daļu no saviem ienākumiem efektīvām labdarības organizācijām.',
    'organizations.ace.desc': 'Pēta un iesaka efektīvākās organizācijas, kas aizstāv dzīvnieku tiesības un labklājību.',
    'organizations.80k.desc': 'Palīdz cilvēkiem atrast karjeru, kurā viņi var sasniegt vislielāko pozitīvo ietekmi.',

    // FAQ
    'faq.title': 'Biežāk uzdotie',
    'faq.titleHighlight': 'jautājumi',
    'faq.subtitle': 'Atbildes uz biežāk uzdotajiem jautājumiem',

    'faq.q1': 'Kādi ir efektīvā altruisma pamatprincipi?',
    'faq.a1': '<ul class="mt-2 space-y-3"><li>• <strong>Nozīmīgums:</strong> cik daudziem šis palīdzētu un cik lielā mērā?</li><li>• <strong>Izmaksu efektivitāte:</strong> vai šis ir vislabākais veids, kā rīkoties? Dažādi projekti bieži vien stipri atšķiras efektivitātes ziņā, un labākie ir daudz labāki par vidusmēra.</li><li>• <strong>Hipotētiskā spriešana:</strong> kas notiktu, ja es būtu rīkojies citādi? Ja sekas, kuras vēlos panākt, notiktu arī bez manas rīcības, tad tai nebūtu nekādas ietekmes.</li><li>• <strong>Pievienotā vērtība:</strong> kāda būtu manas rīcības pievienotā vērtība? Iniciatīvas varētu būt ļoti labas, taču papildus finansējums var arī nenest lielu atdevi.</li><li>• <strong>Sagaidāmā vērtība:</strong> cik labs būtu iznākums un kādas ir izredzes to sasniegt? Pastāv idejas, kurām ir relatīvi zema varbūtība izdoties, taču lieli potenciālie ieguvumi. Tās var "atmaksāties" tikpat labi, cik iniciatīvas ar augstu varbūtību, bet vidējiem ieguvumiem.</li></ul><br><br>Lasīt vairāk: <a href="https://80000hours.org/articles/problem-framework/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kā salīdzināt dažādas globālās problēmas pēc to potenciālās ietekmes</a>',

    'faq.q2': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?',
    'faq.a2': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    'faq.q3': 'Kam efektīvie altruisti cenšas palīdzēt? Kas skaitās "citi"?',
    'faq.a3': 'Efektīvie altruisti apsvērumos nepārprotami iekļauj visus cilvēkus pasaulē, kas šobrīd eksistē. Vairums arī uzskata, ka dzīvnieki ir svarīgi, tāpat kā visi, kas varētu dzīvot nākotnē. Taču ar "citiem" parasti tiek domātas visas justspējīgās, ar apziņu apveltītās būtnes. Protams, kas ir apziņa un kurām būtnēm tā piemīt, nav līdz galam atbildēts jautājums. Kurām būtnēm piemīt spēja ciest un citas ētiski nozīmīgas īpašības, kā arī kurā brīdī tās rodas dzīvnieku valstī un citur, ir sarežģīts empīrisks jautājums.<br><br>Lasīt vairāk: <a href="http://animal-ethics.org/sentience-section/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kurām būtnēm piemīt apziņa</a>',

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
    'nav.definition': 'What is it',
    'nav.about': 'Who we are',
    'nav.resources': 'Resources',
    'nav.organizations': 'Organizations',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Effective Altruism Latvia',
    'hero.subtitle': 'Each of us can make a meaningful, positive impact on a large scale by supporting causes with proven efficiency.',
    'hero.global': 'Global impact',
    'hero.scientific': 'Empathy and care',
    
    // Definition
    'definition.title': 'What is',
    'definition.titleHighlight': 'effective altruism',
    'definition.text': 'Effective altruism (EA) is a philosophy and social movement that uses data-based approach and careful analysis to discover the most effective ways to improve the world. Effective altruists commit to evaluating various opportunities to help others, and then act to create the greatest possible positive changes. This broad, science-based approach distinguishes effective altruism from traditional altruism or charity.',
    'definition.evidence': 'Evidence',
    'definition.evidenceDesc': 'We use scientific research and data to make informed decisions.',
    'definition.focus': 'Focus',
    'definition.focusDesc': 'We focus on actions that create the greatest positive impact.',
    'definition.analysis': 'Community',
    'definition.analysisDesc': 'We meet, communicate and support each other.',
    
    // About
    'about.title': 'Who we are',
    'about.titleHighlight': ' ',
    'about.text': 'Effective Altruism Latvia is an NGO, which has been founded in 2023 and',
    'about.point1': 'organizes EA promotion events,',
    'about.point2': 'provides the opportunity to receive tax refunds for donations to effective charities,',
    'about.point3': 'manages the effective giving platform <a href="https://ziedoefektivi.lv/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">ziedoefektivi.lv</a>,',
    'about.point4': 'organizes informal meetings for people interested in EA.',
    'about.boardTitle': 'Board Members',
    'about.boardChairman': 'chairman of the board',
    
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

    // FAQ
    'faq.title': 'Frequently asked',
    'faq.titleHighlight': 'questions',
    'faq.subtitle': 'Find answers to the most common questions',

    'faq.q1': 'What are the core principles of effective altruism?',
    'faq.a1': '<ul class="mt-2 space-y-3"><li>• <strong>Significance:</strong> how many people would this help and to what extent?</li><li>• <strong>Cost-effectiveness:</strong> is this the best way to act? Different projects often vary greatly in effectiveness, and the best ones are much better than average.</li><li>• <strong>Counterfactual reasoning:</strong> what would happen if I had acted differently? If the outcomes I want to achieve would happen without my action, then it would have no impact.</li><li>• <strong>Additionality:</strong> what would be the added value of my action? Initiatives might be very good, but additional funding may not yield great returns.</li><li>• <strong>Expected value:</strong> how good would the outcome be and what are the chances of achieving it? There are ideas with a relatively low probability of success but large potential gains. These can "pay off" just as well as initiatives with a high probability but average gains.</li></ul><br><br>Read more: <a href="https://80000hours.org/articles/problem-framework/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">A framework for comparing global problems in terms of expected impact</a>',

    'faq.q2': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?',
    'faq.a2': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    'faq.q3': 'Who do effective altruists try to help? Who counts as "others"?',
    'faq.a3': 'Effective altruists explicitly include all people in the world who currently exist in their considerations. Most also believe that animals matter, as do all those who might live in the future. However, "others" usually entail all sentient, conscious beings. Of course, what consciousness is and which beings possess it is not completely understood. Which beings have the capacity to suffer and other ethically significant properties, as well as at what point these arise in the animal kingdom and elsewhere, is a complex empirical question.<br><br>Read more: <a href="http://animal-ethics.org/sentience-section/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Which beings are sentient</a>',

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