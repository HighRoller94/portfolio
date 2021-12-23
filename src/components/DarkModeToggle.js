import React, { useState, useEffect } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import FlareIcon from '@material-ui/icons/Flare';

import '../styles/styles.scss';

const DarkModeToggle = () => {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'dark' || themeState === 'null') {
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
    <div>
        {themeState === false ? (
          <Brightness2Icon className="toggle__icon" onClick={handleChange} /> 
        ) : (
          <FlareIcon className="toggle__icon" onClick={handleChange} />
        )}
    </div>
    )
}

export default DarkModeToggle;