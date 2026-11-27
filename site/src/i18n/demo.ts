import type { Locale } from './routes';

// Synthetic demo exchanges for the interactive phone. Labelled as simulated on the page.
export const demo = {
  fr: {
    label: 'Démonstration simulée de Mobilis',
    statusTime: '17:19',
    reactivate: 'Réactiver « Mobilis »',
    settings: 'Réglages',
    idle: 'Appuyez sur le gros bouton et parlez-moi.',
    talk: 'Appuyez pour parler',
    listening: "J'écoute…",
    again: 'Appuyez pour parler',
    you: 'Vous',
    sound: 'Entendre la réponse',
    caption: 'Démonstration simulée : les échanges sont des exemples. Appuyez sur le bouton bleu du téléphone.',
    voiceLang: 'fr-FR',
    exchanges: [
      {
        ask: 'Lis-moi mon dernier message.',
        answer: 'Message de Camille, reçu à 17 h 12 : « Je passe vers 19 h, tu veux que je rapporte quelque chose ? »',
      },
      { ask: 'Réponds-lui : oui, du pain, merci !', answer: "C'est envoyé à Camille : « Oui, du pain, merci ! »" },
      { ask: 'Appelle Camille.', answer: "J'appelle Camille." },
    ],
  },
  en: {
    label: 'Simulated Mobilis demo',
    statusTime: '17:19',
    reactivate: 'Reactivate “Mobilis”',
    settings: 'Settings',
    idle: 'Press the big button and talk to me.',
    talk: 'Press to talk',
    listening: 'Listening…',
    again: 'Press to talk',
    you: 'You',
    sound: 'Hear the answer',
    caption: 'Simulated demo: the exchanges are examples. Press the blue button on the phone.',
    voiceLang: 'en-GB',
    exchanges: [
      {
        ask: 'Read me my last message.',
        answer: 'Message from Camille, received at 5:12 pm: “I’ll drop by around 7, do you need anything?”',
      },
      { ask: 'Reply: yes, some bread, thanks!', answer: 'Sent to Camille: “Yes, some bread, thanks!”' },
      { ask: 'Call Camille.', answer: 'Calling Camille.' },
    ],
  },
} as const satisfies Record<Locale, unknown>;
