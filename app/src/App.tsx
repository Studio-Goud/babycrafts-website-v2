import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import StickyCTA from './components/StickyCTA';
import WhatsAppChat from './components/WhatsAppChat';

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
        
        {/* Redirects for common variations */}
        <Route path="/zwangerschap" element={<Zwangerschap />} />
        <Route path="/overons" element={<OverOns />} />
        <Route path="/prijzen" element={<Tarieven />} />
      </Routes>
      <StickyCTA />
      <WhatsAppChat />
    </Suspense>
  );
}

export default App;
