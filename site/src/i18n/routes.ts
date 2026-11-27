export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

// Every page exists in both languages; slugs are translated for search in each language.
export const routes = {
  home: { fr: '/', en: '/en/' },
  mobilis: { fr: '/mobilis/', en: '/en/mobilis/' },
  approach: { fr: '/approche/', en: '/en/approach/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  tester: { fr: '/devenir-testeur/', en: '/en/become-a-tester/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
  accessibility: { fr: '/accessibilite/', en: '/en/accessibility/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export function toLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'fr';
}
