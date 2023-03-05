import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed right-8 xl:right-8 top-8 xl:top-8 z-10 md:flex items-center gap-8 bg-white dark:bg-black dark:text-white px-8 py-3 rounded-full border-[3px] border-black dark:border-white hidden 2xl:text-lg font-semibold">
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
