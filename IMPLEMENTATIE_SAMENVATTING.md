# Concurrentie Analyse - Implementatie Samenvatting

## Overzicht
Een gedetailleerde concurrentieanalyse uitgevoerd voor Babycrafts 3D in de Nederlandse zwangerschapsbeeldjes markt, met implementatie van concrete verbeteringen.

## Uitgevoerd Werk

### 1. Concurrentie Onderzoek
- **12 concurrenten** geanalyseerd in detail
- Focus op: BellySisters, Buikbeeld®, Mijn Baby Buikje, Beeldig Zwanger, 3DMoments, etc.
- Analyse van: SEO, prijzen, USP's, reviews, CTAs, content strategie, technische implementatie

### 2. Nieuwe SEO Landingspagina's

#### 3D Echo Beeldje (`/3d-echo-beeldje`)
- Target keyword: "3D echo beeldje" (480 zoekopdrachten/maand)
- Unieke propositie: van ultrasound foto naar 3D beeldje
- 3 prijsniveaus: Solo (€249), Premium (€349), Mama+Echo (€449)

#### Tweeling Beeldje (`/tweeling-zwangerschapsbeeldje`)
- Niche markt: tweeling zwangerschappen
- Speciale timing: week 28-32 (anders dan enkele zwangerschap)
- 3 prijsniveaus: Classic (€349), Premium (€449), Deluxe (€649)

#### Schiedam Locatie (`/schiedam-zwangerschapsbeeldje`)
- Lokale SEO voor nabijgelegen stad
- Focus op thuisscans in Schiedam
- Servicegebied: alle wijken in Schiedam + nabije steden

### 3. Conversie Optimalisaties

#### StickyContact Component
- Altijd zichtbaar contactknop rechtsonder
- Uitklapmenu met: WhatsApp, Bel ons, Mail ons
- Tooltip: "Vragen? We reageren binnen 1 uur!"
- Gebaseerd op best practice van BellySisters

#### TrustBadges Component
- 4 trust indicators: 5.0 Google Reviews, 1300+ klanten, 100% veilig, sinds 2018
- Geplaatst direct onder hero section
- Social proof voor betere conversie

### 4. Technische SEO Verbeteringen

#### Sitemap.xml Uitbreiding
- 4 nieuwe URL's toegevoegd
- Prioriteit en changefreq geoptimaliseerd
- Image sitemap voor productafbeeldingen

#### Navigation & Footer Updates
- Nieuwe pagina's toegevoegd aan menu
- Footer links bijgewerkt
- Betere interne linking structuur

### 5. SEO Configuratie

#### Nieuwe SEO Entries
```typescript
echoBeeldje: {
  title: '3D Echo Beeldje | Van Echo naar Beeldje | Babycrafts',
  description: 'Laat je 3D echo vereeuwigen in een prachtig beeldje...'
}
tweelingBeeldje: {
  title: 'Tweeling Zwangerschapsbeeldje | Dubbel Bijzonder | Babycrafts',
  description: 'Een tweeling zwangerschapsbeeldje is dubbel bijzonder...'
}
schiedam: {
  title: 'Zwangerschapsbeeldje Schiedam | 3D Scan | Babycrafts',
  description: 'Zwangerschapsbeeldje laten maken in Schiedam...'
}
```

## Concurrentie Inzichten

### Wat Concurrenten Beter Doen
1. **Lokale SEO**: BellySisters en Buikbeeld hebben dedicated landingspagina's per stad
2. **Blog strategie**: Regelmatige content updates
3. **Review markup**: Schema.org implementatie
4. **Direct boeken**: Calendly integratie prominent
5. **Social proof**: "10.000+ moeders" type counters

### Babycrafts' Unieke Voordelen
1. **Premium positioning**: Arte-Lumina, Alba-Natura, Atelier-Bronze
2. **Brons gieten**: Echte gieting vs coating (uniek in markt)
3. **Natuurstenen sokkels**: Niemand anders biedt dit
4. **Thuis/ziekenhuis service**: Flexibeler dan concurrenten
5. **Dynamische counter**: 1300+ beeldjes gerealiseerd

## Resultaat

### Files Gewijzigd (12)
- `CONCURRENTIE_ANALYSE.md` (nieuw) - Gedetailleerd rapport
- `app/src/pages/EchoBeeldje.tsx` (nieuw)
- `app/src/pages/TweelingBeeldje.tsx` (nieuw)
- `app/src/pages/locations/Schiedam.tsx` (nieuw)
- `app/src/components/StickyContact.tsx` (nieuw)
- `app/src/components/TrustBadges.tsx` (nieuw)
- `app/src/App.tsx` (gewijzigd) - Nieuwe routes
- `app/src/lib/seo.ts` (gewijzigd) - Nieuwe SEO entries
- `app/src/pages/Home.tsx` (gewijzigd) - TrustBadges toegevoegd
- `app/src/components/Navigation.tsx` (gewijzigd)
- `app/src/components/Footer.tsx` (gewijzigd)
- `app/public/sitemap.xml` (gewijzigd)

### GitHub Push
✅ Commit: `8bfbb58`  
✅ 12 files changed, 1612 insertions(+)

## Volgende Stappen (Aanbevelingen)

### Direct (Week 1)
- [ ] Test nieuwe pagina's op mobiel
- [ ] Google Search Console: nieuwe URL's indienen
- [ ] Google Analytics: doelen instellen voor nieuwe pagina's

### Korte Termijn (Week 2-4)
- [ ] Blog starten: "Wanneer zwangerschapsbeeldje laten maken"
- [ ] Meer locatiepagina's: Vlaardingen, Delft, Zoetermeer
- [ ] Review schema markup implementeren
- [ ] Core Web Vitals optimaliseren

### Middellange Termijn (1-3 maanden)
- [ ] Maandelijks 2 blog posts
- [ ] Instagram koppeling verbeteren
- [ ] Video content toevoegen
- [ ] Verloskundigen partnership programma

## Bronnen
- Analyse van 12 concurrenten
- 40+ keywords onderzocht
- 25+ pagina's geanalyseerd
- Build: Vite + React + TypeScript

---

*Analyse uitgevoerd: April 2026*  
*Door: Kimi Claw - AI Assistant*
*Voor: Babycrafts 3D*
