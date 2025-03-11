import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { setLanguage, text } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <div className="font-bold uppercase text-xl">
      <button onClick={toggleLanguage}>{text.header.languageToggle}</button>
    </div>
  );
};

export default LanguageToggle;
