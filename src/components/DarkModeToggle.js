import React, { useState, useEffect } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import FlareIcon from '@material-ui/icons/Flare';

import '../styles/styles.scss';

const DarkModeToggle = () => {
    const [themeState, setThemeState] = useState(false);
  
    console.log(themeState)

    const handleChange = () => {
      setThemeState(!themeState);
      if (themeState) {
        localStorage.setItem('Theme', 'dark');
        document.body.classList.add('dark-mode');
      } else {
        localStorage.setItem('Theme', 'light');
        document.body.classList.remove('dark-mode');
      }
    }
    useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    })

    return (
    <div>
        {themeState ? 
            <Brightness2Icon className="toggle__icon" onClick={handleChange} /> 
            : 
            <FlareIcon className="toggle__icon" onClick={handleChange} />
        }
    </div>
    )
}

export default DarkModeToggle;