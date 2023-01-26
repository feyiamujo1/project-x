import { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping : 0.05,
  }
const SmoothScroll = () => {
    
    useEffect(() => {
        Scrollbar.init(document.querySelector('#my-scrollbar'), options);
    }, [])
    
  return (
    null
  )
}

export default SmoothScroll