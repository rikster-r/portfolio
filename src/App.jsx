import React from 'react';

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
