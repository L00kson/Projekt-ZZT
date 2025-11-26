import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';
import Pulpit from './pages/Pulpit';
import Dziennik from './pages/Dziennik';
import Grupy from './pages/Grupy';
import Medytacje from './pages/Medytacje';
import Zasoby from './pages/Zasoby';
import Profil from './pages/Profil';
import Pomoc from './pages/Pomoc';
import OtwartaGrupa from './pages/OtwartaGrupa';
import Ustawienia from './pages/Ustawienia';

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen w-full font-display bg-background text-text-primary overflow-hidden transition-colors duration-500">
      {/* Ambient Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
      </div>

      <div className="z-10 flex w-full h-screen">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-full scroll-smooth relative">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Pulpit />} />
                <Route path="/dziennik" element={<Dziennik />} />
                <Route path="/grupy" element={<Grupy />} />
                <Route path="/medytacje" element={<Medytacje />} />
                <Route path="/zasoby" element={<Zasoby />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/ustawienia" element={<Ustawienia />} />
                <Route path="/pomoc" element={<Pomoc />} />
                <Route path="/grupa-otwarta" element={<OtwartaGrupa />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider>
            <Router>
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div key="loader" exit={{ opacity: 0 }} className="fixed inset-0 z-50">
                            <LoadingScreen />
                        </motion.div>
                    ) : (
                        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <AppContent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Router>
        </ThemeProvider>
    );
}

export default App;