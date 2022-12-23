import React from 'react';

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  const scrollTo = id => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
