import React from 'react'
import { useEffect } from "react";
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop({ children }) {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            window.location.reload(true);
            window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
        }
      }, [location, navType]);
  return (
    <div>
       {children} 
    </div>
  )
}

export default ScrollToTop