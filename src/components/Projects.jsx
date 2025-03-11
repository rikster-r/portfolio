import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { text } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mb-32 lg:mb-64"
    >
      <div className="w-full mx-auto max-w-[1800px]">
        <SectionTitle text={text.projects.title} />
        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {text.projects.projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageSource={project.imageSource}
              repo={project.repo}
              live={project.live}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
