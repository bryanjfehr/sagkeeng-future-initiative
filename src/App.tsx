/**
 * Sagkeeng Future Initiative SPA
 * © 2026 Sagkeeng Future Initiative.
 * Licensed under MIT and Proprietary Community License.
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RequestAudit from './pages/RequestAudit'
import PathForward from './pages/PathForward'
import References from './pages/References'
import Tsuutina from './pages/Tsuutina'
import BackToTop from './components/BackToTop'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-soft-sage font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/request-audit" element={<RequestAudit />} />
            <Route path="/path-forward" element={<PathForward />} />
            <Route path="/references.html" element={<References />} />
            <Route path="/tsuutina.html" element={<Tsuutina />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
