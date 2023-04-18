import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center items-center mb-32 lg:mb-64">
      <motion.h2
        className="text-center text-2xl lg:text-4xl 2xl:text-5xl font-semibold mb-6 lg:mb-12"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Project
          title="Frameflow"
          description="A fullstack Instagram clone built with Next.js and Express. It replicates the functionality and design of Instagram, including user registration, profile pages, a feed, photo uploading, search functionality, and modern UI/UX design principles"
          imageSource="showcase-4"
          repo="https://github.com/rikster-r/frameflow-frontend"
          live="https://frameflow.vercel.app/"
        />
        <Project
          title="BookBite"
          description="A CRUD app built with Firebase and designed for book enthusiasts. Search for anything you've read or want to read, give ratings, leave notes and track your statistics with ease. An efficient and personalized approach to library management"
          imageSource="showcase-1"
          repo="https://github.com/rikster-r/BookBite"
          live="https://library-bf484.web.app/"
        />
        <Project
          title="Super Store"
          description="Mockup of an e-commerce shopping site. It features a clean and modern design with a user-friendly interface, making it easy for customers to navigate and purchase products"
          imageSource="showcase-2"
          repo="https://github.com/rikster-r/super-store"
          live="https://rikster-r.github.io/super-store"
        />
        <Project
          title="Battleship"
          description="A digital iteration of the timeless strategy game, built using a Test-Driven Development (TDD) method. This approach ensures that the game logic is reliable and effective. Players can strategically place their ships and make their moves, striving to outwit computer"
          imageSource="showcase-3"
          repo="https://github.com/rikster-r/battleship"
          live="https://rikster-r.github.io/battleship/"
        />
      </motion.div>
    </section>
  );
};

export default Projects;
