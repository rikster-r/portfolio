import { motion } from "framer-motion";

const SectionTitle = ({ text }) => {
  return (
    <motion.h2
      className="text-center text-2xl lg:text-4xl font-semibold mb-6 lg:mb-12"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h2>
  );
};

export default SectionTitle;
