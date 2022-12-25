import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const Hero = ({ scrollTo }) => {
  return (
    <>
      <motion.section
        id="hero"
        className="flex flex-col lg:flex-row-reverse h-screen justify-center items-center gap-4 lg:gap-20"
      >
        <div className="mb-6 lg:mb-32">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_3rwasyjy.json"
            className="w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] xl:w-[525px] xl:h-[350px]"
          />
        </div>
        <motion.div className="flex flex-col justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row flex-wrap text-3xl lg:text-5xl font-medium mb-4 gap-1"
          >
            <span>Hello,</span>
            <span className="whitespace-nowrap">I'm Danial.</span>
          </motion.div>
          <motion.p
            className="tracking-tight text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            I'm a 16 years old passionate front-end developer.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            href="https://github.com/rikster-r"
            className="w-max"
          >
            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
              <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>
      <motion.div
        className="absolute bottom-5 inset-x-0 hover:cursor-pointer"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_izb4p8aq.json"
          className="w-20 h-20"
        />
      </motion.div>
    </>
  );
};

export default Hero;
