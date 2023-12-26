import React from 'react';
import {ThemeProvider, useTheme} from './ThemeContext';

const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme();

  return(
    // <div style={{backgroundColor : `${theme => {return (theme === 'light' ? 'brown' : 'yellow')}}`}}>
    <div>
      <button onClick = {toggleTheme}>Toggle theme</button>
      <p>Current theme: {theme}</p>
    </div>
  )
}


const App = () => {
  return (
    <ThemeProvider>
      <div className="App" >
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
  </ThemeProvider>
  )
}

export default App;
