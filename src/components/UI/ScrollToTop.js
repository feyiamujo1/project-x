import React from 'react'
import { useEffect } from "react";
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop({ children }) {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            //window.location.reload();
            window.scrollTo({ top: 0, behavior: "instant" }, 0);
            // window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
            document.body.style.visibility = "hidden";
            
            setTimeout(() => {
              // window.scrollTo(0, 0);
              document.body.style.visibility = "visible";
            }, 1000); 
            
        }
      }, [location, navType]);
  return (
    <div>
       {children} 
    </div>
  )
}

export default ScrollToTop
