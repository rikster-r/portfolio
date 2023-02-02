import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center items-сenter mb-32 lg:mb-64">
      <motion.h1
        className="text-center text-2xl lg:text-4xl 2xl:text-5xl font-medium mb-6 lg:mb-12"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Project
          title="BookBite"
          description="App for storing books in your online library and seeing other's library. Search for books, give ratings, leave notes and track your statistics"
          imageSource="showcase-1"
          repo="https://github.com/rikster-r/BookBite"
          live="https://library-bf484.web.app/"
        />
        <Project
          title="Super Store"
          description="Mockup of an e-commerce shopping site. Browse the shop, add and delete items from cart"
          imageSource="showcase-2"
          repo="https://github.com/rikster-r/super-store"
          live="https://rikster-r.github.io/super-store"
        />
        <Project
          title="Battleship"
          description="Web-based Battleship game that allows you to compete against computer. Place your ships, make your guesses, and try to sink your opponent's fleet."
          imageSource="showcase-3"
          repo="https://github.com/rikster-r/battleship"
          live="https://rikster-r.github.io/battleship/"
        />
        <Project
          title="CV Creator"
          description="Tool that helps users easily create a visually appealing resume. You can add your work experience, education, skills, and other relevant information with just a few clicks"
          imageSource="showcase-4"
          repo="https://github.com/rikster-r/cv-application"
          live="https://rikster-r.github.io/cv-application/"
        />
      </motion.div>
    </section>
  );
};

export default Projects;
