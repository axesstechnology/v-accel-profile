import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update the page title on mount
  useEffect(() => {
    document.title = 'V Accel - Customized AI Software Development';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Team />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;