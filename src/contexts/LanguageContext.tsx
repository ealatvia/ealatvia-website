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

    'faq.q2': 'Kas tiek domāts ar "palīdzēšanu citiem" un "uzlabot pasauli"?',
    'faq.a2': 'Efektīvā altruisma mērķis ir uzlabot citu dzīves. Vairums piekristu, ka kopumā ciešanu samazināšana un labklājības veicināšana ir vērtējamas kā labas un ka pasaule būtu labāka vieta, ja tajā būtu mazāk ciešanu un vairāk labklājības. Cilvēki efektīvā altruisma kopienā bieži vien pavada daļu sava laika cenšoties reflektēt par savām vērtībām un pilnveidot savu skatījumu par to, kas skaitās labs.<br><br>Varētu būt arī citas lietas, kam cilvēki piešķir vērtību, piemēram, māksla vai dabiskās vides saglabāšana, taču efektīvie altruisti prioritizē dzīvību izglābšanu un ciešanu samazināšanu.<br><br>Var būt grūti palikt neitrālam, salīdzinot iespējas palīdzēt dažādām grupām, taču efektīvie altruisti cenšas būt cik objektīvi vien spēj.<br><br>Lasīt vairāk: <a href="https://80000hours.org/articles/the-meaning-of-making-a-difference/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Ko nozīmē radīt pozitīvu ietekmi</a>',

    'faq.q3': 'Kam efektīvie altruisti cenšas palīdzēt? Kas skaitās "citi"?',
    'faq.a3': 'Efektīvie altruisti apsvērumos nepārprotami iekļauj visus cilvēkus pasaulē, kas šobrīd eksistē. Vairums arī uzskata, ka dzīvnieki ir svarīgi, tāpat kā visi, kas varētu dzīvot nākotnē. Taču ar "citiem" parasti tiek domātas visas justspējīgās, ar apziņu apveltītās būtnes. Protams, kas ir apziņa un kurām būtnēm tā piemīt, nav līdz galam atbildēts jautājums. Kurām būtnēm piemīt spēja ciest un citas ētiski nozīmīgas īpašības, kā arī kurā brīdī tās rodas dzīvnieku valstī un citur, ir sarežģīts empīrisks jautājums.<br><br>Lasīt vairāk: <a href="http://animal-ethics.org/sentience-section/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kurām būtnēm piemīt apziņa</a>',
    'faq.q4': 'Vai mums nevajadzētu vispirms palīdzēt mūsu pašu sabiedrībā?',
    'faq.a4': 'Bieži cilvēkiem ir tendence dot priekšroku savai ģimenei, draugiem vai savas valsts pilsoņiem. Daudziem rūp arī citas būtnes ārpus mūsu pēc radniecības vai ģeogrāfiskā attāluma tuvākās sabiedrības. Ideālā pasaulē mēs varētu palīdzēt visiem, bet diemžēl mums ir ierobežoti resursi, tāpēc to izdarīt nevaram.<br><br>Ja neatrodam labdarības iniciatīvu, kura reizē ir gan efektīvākais veids, kā uzlabot pasauli, gan arī palīdz mums tuvajiem, šos atšķirīgos mērķus var sasniegt atsevišķi, piemēram, ziedojot efektīvākajām labdarībām un piedaloties kā brīvprātīgajam vietējā dzīvnieku patversmē.<br><br>Nereti mūsu iespējas panākt labu ir ievērojami lielākas, palīdzot citiem, kas atrodas daudz tālāk (piemēram, attīstības valstīs), nekā palīdzot tiem, kas atrodas mums tuvāk (piemēram, attīstītās valstīs). Piemēram, ar 750€ Tu vari <a href="https://www.givingwhatwecan.org/charities/givedirectly" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">divkāršot gada ienākumus</a> ģimenei Kenijā, kas cīnās nodrošināt sev iztiku ar zemkopību, vai ar 4000€ <a href="https://www.givewell.org/charities/top-charities" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">izglābt dzīvību</a> bērnam, kas būtu nomiris no malārijas.',

    'faq.q5': 'Vai šī pieeja nav pārāk analītiska un bezpersoniska?',
    'faq.a5': 'Efektīvais altruisms balstās vēlmē darīt labu un apņemšanās vadīties pēc pierādījumiem un rūpīgiem apsvērumiem, lai pārliecinātos par to, ka mūsu laba darīšanas centieni izdosies. Tiesa, reizēm tas ietver aprēķinus, lai saprastu, cik efektīvas dažādas iespējas varētu būt. Arī tiesa, ka mēs ne vienmēr pazīstam tos ļaudis, kam mēs palīdzam.<br><br>Taču lielākai daļai cilvēku efektīvais altruisms interesē tādēļ, ka tiem ir ļoti dziļa līdzjūtība pret citiem, un tādēļ, ka tie uzskata, ka mums vajadzētu palīdzēt citiem neskatoties uz to, vai mēs paši tos pazīstam.<br><br>Piedevām cilvēki veic aprēķinus dažādās dzīves un sabiedrības jomās, piemēram, veselības aprūpē vai valsts pārvaldē. Tas būtu visai bezatbildīgi izvairīties no aprēķiniem, it īpaši, kad daudziem tas var būt dzīves vai nāves jautājums.<br><br>Ja <em>mēs</em> būtu to ļaužu vidū, kam būtu nepieciešama palīdzība, tad mēs arī vēlētos, lai tiktu palīdzēts visvairāk indivīdiem, jo tādējādi arī mums būtu <em>lielākās izredzes</em> saņemt palīdzību.<br><br>Šī nav problēma efektīvā altruisma pieejai kā tādai. Tas ir bēdīgs fakts, ka mēs dzīvojam pasaulē, kurā mēs nespējam visiem palīdzēt vienlaikus. Tāpēc labākais, ko mēs varam šajā situācijā darīt, ir palīdzēt veidos, kas mazinās visvairāk ciešanu un uzlabos dzīves vislielākajā mērā. Un lai to panāktu, ir svarīgi veikt aprēķinus.<br><br>Lasīt vairāk: <a href="http://blog.givewell.org/2013/08/20/excited-altruism" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kas motivē efektīvos altruistus izmantot šādu pieeju</a>',

    'faq.q6': 'Vai tas nozīmē, ka man vajadzētu šim veltīt visu savu laiku un naudu?',
    'faq.a6': 'Cik daudz vajadzētu darīt, lai censtos padarīt pasauli par labāku vietu, ir sarežģīts jautājums, uz kuru katram pašam ir jāmēģina atbildēt. Populāra izvēle efektīvā altruisma kopienā ir <a href="https://80000hours.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">mainīt savus karjeras plānus</a> un/vai <a href="https://givingwhatwecan.org/get-involved/join" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">ziedot daļu no saviem ienākumiem</a>, lai panāktu lielāku pozitīvo ietekmi.<br><br>Daļai tā varētu šķist diezgan liela apņemšanās. Taču daudziem veltīt savu dzīvi pasaules uzlabošanai sniedz skaidru mērķi un spēcīgu aicinājuma un gandarījuma sajūtu. Kā arī efektīvais altruisms pulcē draudzīgu globālu kopienu, kurā smelties iespējas sadarboties un gūt atbalstu. Mēģināt palīdzēt citiem, cik vien iespējams, var radīt daudz lielāku jēgpilnību, gandarījumu un prieku nekā daudz kas cits, ko ar savu dzīvi varētu darīt.<br><br>Ziedošana nav pašmērķis, bet gan viens no veidiem, kā palīdzēt. Gluži kā ar citiem veidiem, kā darīt labu, tai nevajadzētu negatīvi ietekmēt tavu labklājību - tu noteikti nevēlies atteikties no lietām, kas padara tevi laimīgu, un tu nevēlies atstāt novārtā savu ģimeni vai draugus. Mērķis ir palīdzēt citiem, nevis likt sev justies slikti.<br><br>Tu vari uzskatīt efektīvā altruisma principus par svarīgiem, reizē arī papildus tiecoties pēc citiem mērķiem dzīvē. Jebkurā gadījumā ir svarīgi parūpēties arī par savām vajadzībām un labklājību, citādi pastāv risks zaudēt savu produktivitāti un altruistisko motivāciju.<br><br>Lasīt vairāk: <a href="http://crucialconsiderations.org/ethics/demandingness" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kāpēc efektīvais altruisms neprasa par daudz</a>',

    'faq.q7': 'Vai visiem vajadzētu kļūt par efektīvajiem altruistiem?',
    'faq.a7': 'Daudzi uzskata, ka mums ir pienākums maksimāli uzlabot pasauli, kamēr citi netic absolūtiem morāliem pienākumiem. Citi vienkārši redz efektīvo altruismu kā lielisku iespēju palīdzēt citiem un, rūpīgi apdomājot, arī par svarīgu daļu no savas dzīves mērķa.<br><br>Jo vairāk cilvēki atbalstīs efektīvo altruismu, lai arī kādu iemeslu dēļ, jo lielākas ir izredzes mums kopā padarīt pasauli par visiem labāku vietu. Protams, tas ir individuāls lēmums, vai un kādā veidā tu vēlies atbalstīt efektīvo altruismu. Lai arī ko tu domātu, tu esi laipni gaidīts mums pievienoties.',

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

    'faq.q2': 'What is meant by "helping others" and "improving the world"?',
    'faq.a2': 'The goal of effective altruism is to improve the lives of others. Most would agree that reducing suffering and promoting well-being are generally considered good, and that the world would be a better place with less suffering and more well-being. People in the effective altruism community often spend part of their time trying to reflect on their values and refine their view of what counts as good.<br><br>There may also be other things people value, such as art or the preservation of the natural environment, but effective altruists prioritize saving lives and reducing suffering.<br><br>It can be difficult to remain neutral when comparing opportunities to help different groups, but effective altruists try to be as objective as they can.<br><br>Read more: <a href="https://80000hours.org/articles/the-meaning-of-making-a-difference/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">What does it mean to make a difference</a>',

    'faq.q3': 'Who do effective altruists try to help? Who counts as "others"?',
    'faq.a3': 'Effective altruists explicitly include all people in the world who currently exist in their considerations. Most also believe that animals matter, as do all those who might live in the future. However, "others" usually entail all sentient, conscious beings. Of course, what consciousness is and which beings possess it is not completely understood. Which beings have the capacity to suffer and other ethically significant properties, as well as at what point these arise in the animal kingdom and elsewhere, is a complex empirical question.<br><br>Read more: <a href="http://animal-ethics.org/sentience-section/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Which beings are sentient</a>',

    'faq.q4': 'Should we not help our own community first?',
    'faq.a4': 'People often tend to give preference to their family, friends, or fellow citizens. Many also care about other beings outside of our nearest community by kinship or geographical distance. In an ideal world we could help everyone, but unfortunately we have limited resources, so we cannot.<br><br>If we cannot find a charitable initiative that is simultaneously the most effective way to improve the world and also helps those close to us, these different goals can be achieved separately — for example, by donating to the most effective charities and volunteering at a local animal shelter.<br><br>Often our ability to do good is considerably greater when helping others who are much further away (e.g., in developing countries) than helping those closer to us (e.g., in developed countries). For example, with €750 you can <a href="https://www.givingwhatwecan.org/charities/givedirectly" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">double the annual income</a> of a family in Kenya struggling to make a living through farming, or with €4,000 <a href="https://www.givewell.org/charities/top-charities" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">save a child\'s life</a> that would have died from malaria.',

    'faq.q5': 'Isn\'t this approach too analytical and impersonal?',
    'faq.a5': 'Effective altruism is based on the desire to do good and a commitment to being guided by evidence and careful consideration to ensure that our efforts to do good will succeed. It is true that this sometimes involves calculations to understand how effective different options might be. It is also true that we do not always personally know the people we are helping.<br><br>However, for most people, effective altruism is interesting precisely because they have a very deep compassion for others, and because they believe that we should help others regardless of whether we personally know them.<br><br>Moreover, people make calculations in many areas of life and society, such as healthcare or public administration. It would be quite irresponsible to avoid calculations, especially when it can be a matter of life or death.<br><br>If <em>we</em> were among those who needed help, we would want charities to reach as many individuals as possible, as that would give us the greatest <em>chance</em> of receiving help.<br><br>This is not a problem with the effective altruism approach as such. It is a sad fact that we live in a world where we cannot help everyone at the same time. Therefore, the best we can do in this situation is to help in ways that reduce the most suffering and improve lives to the greatest extent. And to achieve that, it is important to make calculations.<br><br>Read more: <a href="http://blog.givewell.org/2013/08/20/excited-altruism" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">What motivates effective altruists to use this approach</a>',

    'faq.q6': 'Does this mean I should dedicate all my time and money to this?',
    'faq.a6': 'How much one should do to try to make the world a better place is a complex question that each person must try to answer for themselves. A popular choice in the effective altruism community is to <a href="https://80000hours.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">change your career plans</a> and/or <a href="https://givingwhatwecan.org/get-involved/join" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">donate a portion of your income</a> to achieve greater positive impact.<br><br>For some, this might seem like quite a large commitment. However, for many, devoting their life to improving the world provides a clear sense of purpose and a strong feeling of calling and fulfillment. Effective altruism also brings together a friendly global community from which to draw opportunities for collaboration and support. Trying to help others as much as possible can create far greater meaning, satisfaction, and joy than many other things one could do with one\'s life.<br><br>Giving is not an end in itself, but rather one of the ways to help. Just as with other ways of doing good, it should not negatively affect your well-being — you certainly do not want to give up things that make you happy, and you do not want to neglect your family or friends. The goal is to help others, not to make yourself feel bad.<br><br>You can consider the principles of effective altruism important while also pursuing other goals in life. In any case, it is important to take care of your own needs and well-being, otherwise there is a risk of losing your productivity and altruistic motivation.<br><br>Read more: <a href="http://crucialconsiderations.org/ethics/demandingness" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Why effective altruism does not demand too much</a>',

    'faq.q7': 'Should everyone become an effective altruist?',
    'faq.a7': 'Many believe that we have a duty to improve the world as much as possible, while others do not believe in absolute moral duties. Others simply see effective altruism as a great opportunity to help others and, upon careful reflection, as an important part of their purpose.<br><br>The more people support effective altruism, for whatever reason, the greater the chances that we can together make the world a better place for everyone. Of course, it is an individual decision whether and in what way you wish to support effective altruism. Whatever you think, you are welcome to join us.',

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