import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    //get defined theme

    if (localStorage.getItem('isDark') === 'true') {
      setIsDark(true);
      return;
    }

    if (
      !localStorage.getItem('isDark') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDark(true);
      return;
    }
  }, []);

  useEffect(() => {
    //set theme
    localStorage.setItem('isDark', isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = checked => {
    setIsDark(checked);
  };

  return <DarkModeSwitch checked={isDark} onChange={toggleTheme} size={36} />;
};

export default ThemeToggle;
