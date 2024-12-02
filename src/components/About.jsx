import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
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
            <SectionTitle text="About Me" />
            <motion.p
              className="text-lg 2xl:text-2xl mx-0 sm:mx-4 lg:mx-16 xl:mx-32"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              I’m a full-stack web developer who enjoys turning ideas into
              functional, user-friendly websites. I work with front-end and
              back-end technologies to create projects that look great and work
              smoothly. I like keeping things simple and making sure users get
              exactly what they need.
            </motion.p>
            <motion.p
              className="text-lg 2xl:text-2xl mx-0 sm:mx-4 lg:mx-16 xl:mx-32 mt-4"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Outside of work, I stay active at the gym, express my creativity
              through style, and unwind by singing. These hobbies keep me
              inspired, disciplined, and ready to bring fresh ideas to every
              project I tackle. Let’s connect and build something great
              together!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
