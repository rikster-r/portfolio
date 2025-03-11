import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  return (
    <header className="fixed pr-16 xl:pr-24 top-8 xl:top-12 z-10 xl:pl-8 flex items-center justify-between w-full">
      <LanguageToggle />
      <ThemeToggle />
    </header>
  );
};

export default Header;
