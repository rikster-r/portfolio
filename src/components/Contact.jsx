import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center mb-32"
    >
      <SectionTitle text="Contact Me" />
      <motion.div
        className="w-full max-w-2xl rounded-md sm:px-32 px-8 py-12 sm:py-16 flex flex-col sm:flex-row justify-center items-start sm:items-center shadow-md gap-12 bg-white dark:bg-gray-800 text-base sm:text-lg"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:dseit09@gmail.com"
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 w-max bg-green-500 text-neutral-100 px-4 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </svg>
            <span className="font-medium upper">Mail</span>
          </div>
          <p>dseit09@gmail.com</p>
        </a>

        <a href="https://t.me/riksterr" className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-max bg-[#37aee2] text-neutral-100 px-4 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
            </svg>
            <span className="font-medium upper">Telegram</span>
          </div>
          <p>@riksterr</p>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
