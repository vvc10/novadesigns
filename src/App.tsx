import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time (in a real app, this would be based on assets loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <div className="fixed inset-0 bg-background z-[-1]" />
            <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-5 z-[-1]" />
            
            <Header />
            <main>
              <Hero />
              <Services />
              <Team />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;