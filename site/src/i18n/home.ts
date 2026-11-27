import type { Locale } from './routes';

export const home = {
  fr: {
    title: 'Neura Mobilis : votre téléphone à la voix, sans le tenir',
    description:
      "Mobilis, l'assistant vocal de Neura Mobilis, contrôle tout votre téléphone à la voix et vous répond à l'oral. Pensé pour les personnes blessées médullaires.",
    orgDescription:
      'Start-up qui développe des IA pour redonner autonomie et mobilité aux personnes vivant avec une lésion de la moelle épinière.',
    h1: 'Votre téléphone, à la voix, sans avoir à le tenir.',
    lead: "Mobilis est un assistant vocal qui contrôle entièrement le téléphone et répond à voix haute. Nous le construisons avec et pour les personnes vivant avec une lésion de la moelle épinière.",
    ctaTester: 'Devenir testeur',
    ctaMobilis: 'Découvrir Mobilis',
    status: 'En test sur Android',
    problemTitle: 'Un geste banal peut demander de l’aide',
    problemBefore: 'En France,',
    problemCount: '40 000 personnes',
    problemMiddle: 'vivent avec une paraplégie ou une tétraplégie, à 28 ans en moyenne, et',
    problemNew: '1 500 nouveaux cas',
    problemAfter:
      "surviennent chaque année. Quand on ne peut plus tenir son téléphone ni se pencher dessus, lire un message ou passer un appel suppose souvent qu'un proche soit là.",
    source: 'Source : Assemblée nationale, question écrite n° 43389.',
    whatTitle: 'Ce que fait Mobilis',
    whatLead: 'Une seule chose, mais en entier : vous rendre la main sur votre téléphone.',
    features: [
      { icon: 'mic', title: 'Tout le téléphone, à la voix', text: 'Ouvrir une application, écrire un message, appeler : vous le demandez avec vos mots, Mobilis le fait.' },
      { icon: 'speaker', title: 'Des réponses à l’oral', text: "Mobilis vous lit l'information. Pas besoin de regarder l'écran pour savoir ce qui s'y passe." },
      { icon: 'lock', title: 'Vos données restent chez vous', text: "L'essentiel de vos données est stocké sur votre téléphone, pas sur nos serveurs." },
    ],
    whatLink: 'Comment fonctionne Mobilis',
    nextTitle: 'Et ensuite',
    steps: [
      { when: "Aujourd'hui", title: 'Mobilis', text: "L'assistant vocal, en test sur Android." },
      { when: 'Prochaine étape', title: 'Le décodage des signaux', text: "Capter l'intention de mouvement sans chirurgie, par des capteurs posés sur la peau." },
      { when: 'À terme', title: 'Le matériel de rééducation', text: 'Piloté par ces IA, fourni et suivi par un centre médical.' },
    ],
    nextLink: 'Notre approche en détail',
    joinTitle: 'Construisez Mobilis avec nous',
    joinText:
      "Vous vivez avec une lésion médullaire, ou vous accompagnez quelqu'un qui en vit une ? Vos retours décident de ce que nous améliorons en premier.",
    joinButton: 'Devenir testeur',
  },
  en: {
    title: 'Neura Mobilis: control your phone by voice, hands-free',
    description:
      'Mobilis, by Neura Mobilis, controls your whole phone by voice and answers out loud. Designed for people living with a spinal cord injury.',
    orgDescription: 'Start-up building AI that restores autonomy and mobility to people living with a spinal cord injury.',
    h1: 'Your phone, by voice, without having to hold it.',
    lead: 'Mobilis is a voice assistant that fully controls the phone and answers out loud. We are building it with and for people living with a spinal cord injury.',
    ctaTester: 'Become a tester',
    ctaMobilis: 'Discover Mobilis',
    status: 'In testing on Android',
    problemTitle: 'An everyday gesture can require help',
    problemBefore: 'In France alone,',
    problemCount: '40,000 people',
    problemMiddle: 'live with paraplegia or tetraplegia, at an average age of 28, and',
    problemNew: '1,500 new cases',
    problemAfter:
      'occur every year. When you can no longer hold your phone or lean over it, reading a message or making a call often means someone has to be there.',
    source: 'Source: French National Assembly, written question no. 43389.',
    whatTitle: 'What Mobilis does',
    whatLead: 'One thing, done completely: giving you back control of your phone.',
    features: [
      { icon: 'mic', title: 'The whole phone, by voice', text: 'Open an app, write a message, make a call: you ask in your own words, Mobilis does it.' },
      { icon: 'speaker', title: 'Spoken answers', text: 'Mobilis reads the information to you. No need to look at the screen to know what is on it.' },
      { icon: 'lock', title: 'Your data stays with you', text: 'Most of your data is stored on your phone, not on our servers.' },
    ],
    whatLink: 'How Mobilis works',
    nextTitle: 'What comes next',
    steps: [
      { when: 'Today', title: 'Mobilis', text: 'The voice assistant, in testing on Android.' },
      { when: 'Next', title: 'Signal decoding', text: 'Detecting the intention to move without surgery, with sensors placed on the skin.' },
      { when: 'Later', title: 'Rehabilitation hardware', text: 'Driven by this AI, provided and monitored by a medical centre.' },
    ],
    nextLink: 'Our approach in detail',
    joinTitle: 'Build Mobilis with us',
    joinText: 'Do you live with a spinal cord injury, or support someone who does? Your feedback decides what we improve first.',
    joinButton: 'Become a tester',
  },
} as const satisfies Record<Locale, unknown>;
