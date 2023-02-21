import { useEffect } from "react";
import { useLocation, useNavigationType } from 'react-router-dom';

const DashboardScrollToTop = ({ children }) => {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            window.scrollTo({ top: 0, behavior: "instant" }, 0);
        }
      }, [location, navType]);
    return (
    <div>
       {children} 
    </div>
  )
}

export default DashboardScrollToTop