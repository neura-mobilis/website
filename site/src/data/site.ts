// Single place for facts that change once the company and the domain exist.
// TODO: the domain is not bought yet; neura-mobilis.com and its mailbox are placeholders.
export const site = {
  name: 'Neura Mobilis',
  url: 'https://neura-mobilis.com',
  email: 'contact@neura-mobilis.com',
  publisher: 'Ethan Orain',
  host: {
    name: 'Cloudflare, Inc.',
    address: '101 Townsend St, San Francisco, CA 94107, USA',
    url: 'https://www.cloudflare.com',
  },
} as const;
