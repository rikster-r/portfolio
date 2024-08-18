import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center lg:gap-16 mb-32 pt-24"
    >
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
          style={{ height: "100%" }}
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
          I'm a full-stack web developer who enjoys turning ideas into functional, user-friendly websites. I work with both front-end and back-end technologies to create projects that look good and work smoothly. I like to keep things simple and focus on delivering what users really need. I’m always looking to improve my skills and take on interesting projects. Let’s connect if you’d like to work together.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
