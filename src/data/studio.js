export const studioContact = {
  email: 'luxxtattoostudio@gmail.com',
  phone: '7353315690',
  phoneHref: 'tel:+917353315690',
  instagramHandle: '@luxx_tattoo_studio',
  instagramUrl: 'https://www.instagram.com/luxx_tattoo_studio/',
  facebookUrl: 'https://www.facebook.com/share/1DEr2ZWq6K/?mibextid=wwXIfr',
};

export const demoWorks = [
  { src: '/mountain.png?v=2', category: 'Fine-Line Divinity', title: 'Mountain Wanderer' },
  { src: '/greco.png?v=2', category: 'Greco-Roman Realism', title: 'The Greco Sleeve' },
  { src: '/cupid.png?v=2', category: 'Renaissance Study', title: 'Cupid & Psyche' },
  { src: '/anubis.png?v=2', category: 'Ancient Blackwork', title: 'Anubis Eternal' },
  { src: '/elephant.png?v=2', category: 'Micro-Realism', title: 'The Great Elephant' },
];

const clientPortfolioFiles = [
  'WhatsApp Image 2026-05-29 at 6.00.15 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.15 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.16 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.16 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.16 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.17 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.17 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.17 PM (3).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.17 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.18 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.18 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.18 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.19 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.19 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.19 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.20 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.20 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.20 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.21 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.21 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.21 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.22 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.22 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.22 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.23 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.23 PM (2).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.23 PM.jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.24 PM (1).jpeg',
  'WhatsApp Image 2026-05-29 at 6.00.24 PM.jpeg',
  'portfolio1.png',
  'portfolio2.png',
  'portfolio3.png',
  'portfolio4.png',
  'portfolio5.png',
  'tattoo1.png',
  'tattoo2.png',
];

const clientPortfolioWorks = clientPortfolioFiles.map((file, index) => ({
  src: `/${file}`,
  category: 'Client Portfolio',
  title: `Custom Tattoo ${String(index + 1).padStart(2, '0')}`,
}));

export const galleryWorks = Array.from(
  new Map([...demoWorks, ...clientPortfolioWorks].map((work) => [work.src, work])).values()
);
