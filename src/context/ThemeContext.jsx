// import { createContext, useState, useEffect } from 'react';
//
// export const ThemeContext = createContext(null);
//
// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState(() => {
//         const savedTheme = localStorage.getItem('theme');
//         return savedTheme || 'light';
//     });
//
//     useEffect(() => {
//         localStorage.setItem('theme', theme);
//         document.documentElement.classList.remove('dark', 'light');
//         document.documentElement.classList.add(theme);
//     }, [theme]);
//
//     const toggleTheme = () => {
//         setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
//     };
//
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};