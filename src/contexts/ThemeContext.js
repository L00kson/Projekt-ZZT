import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
    'theme-dusk': 'Zmierzch',
    'theme-serene': 'Serene',
    'theme-forest': 'Leśny',
    'theme-solaris': 'Słoneczny',
    'theme-mono': 'Monochrom',
    'theme-nebula': 'Nebula',
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('app-theme');
        return savedTheme && themes[savedTheme] ? savedTheme : 'theme-dusk';
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const themeNames = themes;

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeNames }}>
            {children}
        </ThemeContext.Provider>
    );
};