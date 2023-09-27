import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mb-32 lg:mb-64"
    >
      <SectionTitle text="Projects" />
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
          description="Fake e-commerce shop built with Next.js. It features a full SEO optimization and clean modern design with a user-friendly interface, making it easy for customers to navigate and purchase products"
          imageSource="showcase-2"
          repo="https://github.com/rikster-r/super-store"
          live="https://superstore-shop.vercel.app/"
        />
        <Project
          title="Battleship"
          description="A digital iteration of the timeless strategy game. With its robust setup mode capabilities and intelligent computer AI, players can strategically position their ships and execute their moves, aiming to outsmart their opponent"
          imageSource="showcase-3"
          repo="https://github.com/rikster-r/battleship-v2"
          live="https://battleship-v2.vercel.app/"
        />
      </motion.div>
    </section>
  );
};

export default Projects;
