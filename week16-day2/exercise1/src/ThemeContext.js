import React, {useState, createContext, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (e) => {
        e.target.parentNode.style.backgroundColor = (
            theme === 'light' ? 'brown' : 'yellow'
        );
        setTheme(theme => {
            return theme === 'light' ? 'dark' : 'light';
        })

     
    }

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('Theme context has not been set up correctly.')
    }
    return context;
}

export {ThemeProvider, useTheme}