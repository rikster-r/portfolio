import React from 'react';

import { LanguageProvider } from './context/LanguageContext';

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const scrollTo = id => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <Header scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </LanguageProvider>
  );
};

export default App;
