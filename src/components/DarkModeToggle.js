import React, { useState, useEffect } from 'react';

import '../styles/styles.scss';

const DarkModeToggle = () => {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme == 'dark') {
        setThemeState(true)
        return  document.body.classList.add('dark-mode')
        ;
      }
    }, [])

    const handleChange = () => {
      if (themeState != true) {
        localStorage.setItem('Theme', 'dark');
        document.body.classList.add('dark-mode');
      } else {
        localStorage.setItem('Theme', 'light');
        document.body.classList.remove('dark-mode');
      }
      setThemeState(!themeState);
    }

    return (
    <div className="toggle__container">
        <input className="toggle" type="checkbox" id="switch" onChange={handleChange} />
        <label for="switch">Toggle</label>
    </div>
    )
}

export default DarkModeToggle;