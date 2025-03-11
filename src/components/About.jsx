import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { text } = useLanguage();

  return (
    <section id="about" className="mb-32">
      <div className="w-full mx-auto max-w-[1800px]">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-16">
          <motion.div
            className="lg:mt-16 flex items-center justify-center"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/private_files/lf30_esg1l8r1.json"
              style={{ height: '100%' }}
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] 2xl:w-[550px] 2xl:h-[550px]"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <SectionTitle text={text.about.title} />
            <motion.p
              className="text-lg 2xl:text-2xl mx-0 sm:mx-4 lg:mx-16 xl:mx-32"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              {text.about.description1}
            </motion.p>
            <motion.p
              className="text-lg 2xl:text-2xl mx-0 sm:mx-4 lg:mx-16 xl:mx-32 mt-4"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              {text.about.description2}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
