import { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping : 0.09,
  }
const SmoothScroll = () => {
    
    useEffect(() => {
        Scrollbar.init(document.body, options);
    }, [])
    
  return (
    null
  )
}

export default SmoothScroll