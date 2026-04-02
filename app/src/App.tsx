import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import StickyContact from './components/StickyContact';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Zwangerschap = lazy(() => import('./pages/Zwangerschap'));
const OuderKind = lazy(() => import('./pages/OuderKind'));
const Familie = lazy(() => import('./pages/Familie'));
const Baby = lazy(() => import('./pages/Baby'));
const Schoonheid = lazy(() => import('./pages/Schoonheid'));
const Tarieven = lazy(() => import('./pages/Tarieven'));
const Contact = lazy(() => import('./pages/Contact'));
const OverOns = lazy(() => import('./pages/OverOns'));
const EersteZwangerschap = lazy(() => import('./pages/EersteZwangerschap'));
const Kraamcadeau = lazy(() => import('./pages/Kraamcadeau'));
const Vastleggen = lazy(() => import('./pages/Vastleggen'));
const Bedankt = lazy(() => import('./pages/Bedankt'));

// Nieuwe pagina's
const StudioRotterdam = lazy(() => import('./pages/StudioRotterdam'));
const Werkwijze = lazy(() => import('./pages/Werkwijze'));
const Ambacht = lazy(() => import('./pages/Ambacht'));
const Blog = lazy(() => import('./pages/Blog'));
const Cadeaubon = lazy(() => import('./pages/Cadeaubon'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Rotterdam = lazy(() => import('./pages/Rotterdam'));
const DenHaag = lazy(() => import('./pages/DenHaag'));
const Werkgebieden = lazy(() => import('./pages/Werkgebieden'));
const Studiobezoek = lazy(() => import('./pages/Studiobezoek'));
const Ziekenhuisbezoek = lazy(() => import('./pages/Ziekenhuisbezoek'));

// Nieuwe concurrentie-analyse pagina's
const EchoBeeldje = lazy(() => import('./pages/EchoBeeldje'));
const TweelingBeeldje = lazy(() => import('./pages/TweelingBeeldje'));

// Locatie pagina's
const Schiedam = lazy(() => import('./pages/locations/Schiedam'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-3 border-[#C9A962]/30 border-t-[#C9A962] rounded-full animate-spin mx-auto mb-4" />
      <p className="text-[#3D3229]/60">Laden...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zwangerschapsbeeldje" element={<Zwangerschap />} />
        <Route path="/ouder-en-kind-beeldje" element={<OuderKind />} />
        <Route path="/familiebeeldje" element={<Familie />} />
        <Route path="/babybeeldje" element={<Baby />} />
        <Route path="/schoonheidsbeeldje" element={<Schoonheid />} />
        <Route path="/tarieven" element={<Tarieven />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/eerste-zwangerschap-beeldje" element={<EersteZwangerschap />} />
        <Route path="/uniek-kraamcadeau" element={<Kraamcadeau />} />
        <Route path="/zwangerschap-vastleggen-beeldje" element={<Vastleggen />} />
        <Route path="/bedankt" element={<Bedankt />} />
        
        {/* Nieuwe pagina's */}
        <Route path="/studio-rotterdam" element={<StudioRotterdam />} />
        <Route path="/werkwijze" element={<Werkwijze />} />
        <Route path="/ambacht" element={<Ambacht />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cadeaubon" element={<Cadeaubon />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Werkgebieden en locaties */}
        <Route path="/rotterdam" element={<Rotterdam />} />
        <Route path="/den-haag" element={<DenHaag />} />
        <Route path="/werkgebieden" element={<Werkgebieden />} />
        <Route path="/studiobezoek" element={<Studiobezoek />} />
        <Route path="/ziekenhuisbezoek" element={<Ziekenhuisbezoek />} />
        
        {/* Redirects for common variations */}
        <Route path="/zwangerschap" element={<Zwangerschap />} />
        <Route path="/overons" element={<OverOns />} />
        <Route path="/prijzen" element={<Tarieven />} />
        <Route path="/studio" element={<StudioRotterdam />} />
        <Route path="/proces" element={<Werkwijze />} />
        <Route path="/materialen" element={<Ambacht />} />
        
        {/* Nieuwe concurrentie-analyse pagina's */}
        <Route path="/3d-echo-beeldje" element={<EchoBeeldje />} />
        <Route path="/echo-beeldje" element={<EchoBeeldje />} />
        <Route path="/tweeling-zwangerschapsbeeldje" element={<TweelingBeeldje />} />
        <Route path="/tweeling-beeldje" element={<TweelingBeeldje />} />
        
        {/* Locatie pagina's */}
        <Route path="/schiedam-zwangerschapsbeeldje" element={<Schiedam />} />
        <Route path="/schiedam" element={<Schiedam />} />
      </Routes>
      <StickyContact />
    </Suspense>
  );
}

export default App;
