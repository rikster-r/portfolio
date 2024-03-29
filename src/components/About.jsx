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
          I'm currently a Grade 10 student, planning to pursue Computer Science
          in the future. From a young age, I have always been fascinated by the
          power of technology and how it can be used to solve problems and
          create new opportunities. I've worked with a variety of programming
          languages, including PascalABC, Python, C++. Now I am dedicated to
          learning more about web development, staying up to date with the
          latest technologies and best practices, and I am always looking for
          ways to expand my knowledge and skills. I am excited to see where my
          career in web development takes me in the future
        </motion.p>
      </div>
    </section>
  );
};

export default About;
