import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-сenter gap-4 lg:gap-16"
    >
      <div className="mb-6 lg:mt-16 flex items-center justify-center">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/private_files/lf30_esg1l8r1.json"
          style={{ height: '100%' }}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] xl:w-[550px] xl:h-[550px]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl lg:text-6xl font-medium mb-12">About me</h1>
        <p className="text-xl lg:text-2xl mx-0 sm:mx-4 lg:mx-16 xl:mx-32">
          I'm currently a Grade 10 student, planning to pursue Computer Science in the future. From
          a young age, I have always been fascinated by the power of technology and how it can be
          used to solve problems and create new opportunities. Now I am dedicated to staying up to
          date with the latest technologies and best practices, and I am always looking for ways to
          expand my knowledge and skills.
        </p>
      </div>
    </section>
  );
};

export default About;
