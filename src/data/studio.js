export const studioContact = {
  email: 'luxxtattoostudio@gmail.com',
  phone: '7353315690',
  phoneHref: 'tel:+917353315690',
  instagramHandle: '@luxx_tattoo_studio',
  instagramUrl: 'https://www.instagram.com/luxx_tattoo_studio/',
  facebookUrl: 'https://www.facebook.com/share/1DEr2ZWq6K/?mibextid=wwXIfr',
};

export const demoWorks = [];

const clientPortfolioFiles = [
  'tattoo-spartan.png',
  'tattoo-memento-mori.jpg',
  'tattoo-snake.png',
  'tattoo-lion.png',
  'tattoo-fairy-tail.png',
  'tattoo-cat-dora.jpg',
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
];

const clientPortfolioWorks = clientPortfolioFiles.map((file, index) => ({
  src: `/${file}`,
  category: 'Client Portfolio',
  title: `Custom Tattoo ${String(index + 1).padStart(2, '0')}`,
}));

export const galleryWorks = Array.from(
  new Map([...demoWorks, ...clientPortfolioWorks].map((work) => [work.src, work])).values()
);
