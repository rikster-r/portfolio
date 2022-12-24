import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center mb-32">
      <h1 className="text-center text-2xl lg:text-4xl 2xl:text-5xl font-medium mb-6 lg:mb-12">
        Contact Me
      </h1>
      <div className="shadow-md flex flex-col sm:flex-row justify-center items-start sm:items-center gap-12 text-xl sm:rounded-md px-32 py-12 sm:py-16 bg-white dark:bg-gray-800">
        <a href="mailto:danial.partnership@gmail.com" className="flex flex-col gap-2">
          <div className="flex items-center gap-1 w-max bg-green-500 text-neutral-100 px-4 py-1 rounded">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </svg>
            <span className="font-medium upper text-lg">Mail</span>
          </div>
          <p>danial.partnership@gmail.com</p>
        </a>

        <a href="https://discordapp.com/users/550274841996034048" className="flex flex-col gap-2">
          <div className="flex items-center gap-1 w-max bg-blue-500 text-neutral-100 px-4 py-1 rounded">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
            </svg>
            <span className="font-medium upper text-lg">Discord</span>
          </div>
          <p>rikster#4652</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
