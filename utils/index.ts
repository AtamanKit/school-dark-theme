'use client'

import { useEffect } from 'react';


const useSystemTheme = () => {
    useEffect(() => {
      // Only run on the client side
    //   if (typeof window !== "undefined") {
        console.log("pPPPPPPPPPPPPP")
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = (e: any) => {
          document.documentElement.classList.toggle('dark', e.matches);
        };
  
        mediaQuery.addEventListener('change', updateTheme);
        updateTheme(mediaQuery);
  
        return () => mediaQuery.removeEventListener('change', updateTheme);
    //   }
    }, []);
  };
  
export default useSystemTheme;