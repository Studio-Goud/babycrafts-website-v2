// SEO helper utilities

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const defaultSEO: SEOConfig = {
  title: '3D Zwangerschapsbeeldje Rotterdam | Babycrafts - Premium 3D Scans',
  description: 'Laat je zwangerschap vastleggen als uniek 3D beeldje. Professionele 3D-scanning in Rotterdam, thuis of ziekenhuis. Al vanaf €199. 1300+ zwangerschappen vastgelegd.',
  keywords: 'zwangerschapsbeeldje, 3D scan zwangerschap, bol buik beeldje, baby beeldje, Rotterdam, kraamcadeau',
  ogImage: 'https://babycrafts.nl/og-image.jpg',
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: '3D Zwangerschapsbeeldje Rotterdam | Babycrafts',
    description: 'Laat je zwangerschap vastleggen als uniek 3D beeldje. Professionele 3D-scanning in Rotterdam. Al vanaf €199. 1300+ zwangerschappen vastgelegd.',
  },
  zwangerschap: {
    title: 'Zwangerschapsbeeldje Laten Maken | Babycrafts Rotterdam',
    description: 'Een zwangerschapsbeeldje is meer dan een object. Het is een tastbare herinnering aan een unieke periode. Premium 3D-scans met ambachtelijke afwerking.',
    keywords: 'zwangerschapsbeeldje, 3D scan, zwangerschap vastleggen, bol buik beeldje',
  },
  ouderKind: {
    title: 'Ouder & Kind Beeldje | Babycrafts Rotterdam',
    description: 'Vang de speciale band tussen ouder en kind in een uniek 3D beeldje. Een tijdloos aandenken aan jullie verbinding.',
    keywords: 'ouder kind beeldje, 3D scan ouder kind, gezinsbeeldje',
  },
  familie: {
    title: 'Familiebeeldje 3D Scan | Babycrafts Rotterdam',
    description: 'Laat jullie hele gezin vastleggen in een prachtig 3D familiebeeldje. Een uniek erfstuk voor generaties.',
    keywords: 'familiebeeldje, 3D scan familie, gezinsbeeldje',
  },
  baby: {
    title: 'Babybeeldje 3D Scan | Babycrafts Rotterdam',
    description: 'Vang de allereerste momenten van je baby in een uniek 3D beeldje. De allerkleinste details, levenslang vastgelegd.',
    keywords: 'babybeeldje, 3D scan baby, newborn beeldje',
  },
  schoonheid: {
    title: 'Schoonheidsbeeldje 3D Scan | Babycrafts Rotterdam',
    description: 'Laat je natuurlijke schoonheid vastleggen in een elegant 3D beeldje. Een kunstwerk van jezelf.',
    keywords: 'schoonheidsbeeldje, 3D scan portret, body beeldje',
  },
  tarieven: {
    title: 'Tarieven | Babycrafts 3D Scans Rotterdam',
    description: 'Bekijk onze tarieven voor 3D zwangerschapsbeeldjes. Transparante prijzen, geen verborgen kosten. Al vanaf €199.',
    keywords: 'zwangerschapsbeeldje prijs, 3D scan kosten, tarieven',
  },
  contact: {
    title: 'Contact | Babycrafts 3D Rotterdam',
    description: 'Neem contact op met Babycrafts. Studio in Rotterdam, ook thuisafspraken in heel Zuid-Holland.',
    keywords: 'contact babycrafts, 3D scan rotterdam, afspraak maken',
  },
  overOns: {
    title: 'Over Ons | Babycrafts 3D Rotterdam',
    description: 'Leer Babycrafts kennen. 1300+ zwangerschappen vastgelegd. Passie voor 3D-kunst en authentieke herinneringen.',
    keywords: 'over babycrafts, 3D scan studio, zwangerschap specialist',
  },
  eersteZwangerschap: {
    title: 'Eerste Zwangerschap Beeldje | Babycrafts Rotterdam',
    description: 'Je eerste zwangerschap verdient iets bijzonders. Laat dit unieke moment vastleggen in een prachtig 3D beeldje.',
    keywords: 'eerste zwangerschap, zwangerschapsbeeldje eerste kind',
  },
  kraamcadeau: {
    title: 'Uniek Kraamcadeau | 3D Beeldje Cadeau | Babycrafts',
    description: 'Op zoek naar een uniek kraamcadeau? Geef een 3D beeldje cadeaubon. Het meest persoonlijke cadeau dat je kunt geven.',
    keywords: 'kraamcadeau, uniek kraamcadeau, 3D beeldje cadeau',
  },
  vastleggen: {
    title: 'Zwangerschap Vastleggen | 3D Beeldje | Babycrafts Rotterdam',
    description: 'Leg je zwangerschap vast op een unieke manier. Een 3D beeldje is een tastbare herinnering die je leven lang meegaat.',
    keywords: 'zwangerschap vastleggen, zwangerschap bewaren, bol buik',
  },
  // Nieuwe pagina's
  'studio-rotterdam': {
    title: 'Studio Rotterdam | Babycrafts 3D Locatie',
    description: 'Bezoek onze studio in Rotterdam Delfshaven. Goed bereikbaar met OV, gratis parkeren. Ook thuis- en ziekenhuisscans mogelijk.',
    keywords: 'babycrafts studio, 3D scan rotterdam, locatie',
  },
  werkwijze: {
    title: 'Werkwijze | Van Scan tot Kunstwerk | Babycrafts',
    description: 'Ontdek hoe wij van een 3D scan een uniek kunstwerk maken. Stap voor stap door het proces: scan, verwerking, productie en oplevering.',
    keywords: 'werkwijze, 3D scan proces, hoe werkt het',
  },
  ambacht: {
    title: 'Ambacht & Productie | Onze Materialen | Babycrafts',
    description: 'Leer meer over onze materialen: Arte-Lumina, Alba-Natura, Atelier-Bronze en Gegoten Brons. Elk met unieke eigenschappen.',
    keywords: 'materialen, ambacht, brons beeldje, houtvezel',
  },
  blog: {
    title: 'Blog | Alles over Zwangerschapsbeeldjes | Babycrafts',
    description: 'Lees artikelen over zwangerschapsbeeldjes: timing, veiligheid, materialen en meer. Alles wat je wilt weten.',
    keywords: 'blog, zwangerschapsbeeldje tips, 3D scan informatie',
  },
  cadeaubon: {
    title: 'Cadeaubon | Geef een 3D Beeldje Cadeau | Babycrafts',
    description: 'Geef een zwangerschapsbeeldje cadeau met onze cadeaubon. Het perfecte kraamcadeau, 3 jaar geldig, feestelijk verpakt.',
    keywords: 'cadeaubon, kraamcadeau, 3D beeldje cadeau',
  },
  faq: {
    title: 'FAQ | Veelgestelde Vragen | Babycrafts 3D',
    description: 'Vind antwoord op al je vragen over zwangerschapsbeeldjes. Timing, veiligheid, materialen, prijzen en meer.',
    keywords: 'faq, veelgestelde vragen, vragen 3D scan',
  },
};

export function generateMetaTags(config: SEOConfig): string {
  const { title, description, keywords, ogImage, canonicalUrl, noIndex } = config;
  
  return `
    <title>${title}</title>
    <meta name="description" content="${description}">
    ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
    ${noIndex ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index, follow">'}
    ${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}">` : ''}
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    ${ogImage ? `<meta property="og:image" content="${ogImage}">` : ''}
  `;
}
