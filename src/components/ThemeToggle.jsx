import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isDark') === 'true') {
      setIsDark(true);
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      return;
    }
  }, []);

  const setTheme = () => {
    localStorage.setItem('isDark', isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = checked => {
    setIsDark(checked);
    setTheme();
  };

  return (
    <div className="fixed right-8 xl:right-24 top-8 xl:top-12">
      <DarkModeSwitch
        checked={isDark}
        onChange={toggleTheme}
        size={40}
        moonColor="black"
        sunColor="white"
      />
    </div>
  );
};

export default ThemeToggle;
