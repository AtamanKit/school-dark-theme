"use client";

import { useEffect } from 'react';

const Theme = () => {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = (e: any) => {
            document.documentElement.classList.toggle('dark', e.matches);
        };

        mediaQuery.addEventListener('change', updateTheme);
        updateTheme(mediaQuery);

        // Clean up
        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, []);

    return null;
};

export default Theme;