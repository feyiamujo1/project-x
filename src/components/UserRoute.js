import { Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import Services from "./Services"
import Blog from "./Blog"
import About from "./About"
import RedirectPage from "./RedirectPage"
import ScrollToTop from "./UI/ScrollToTop"


const UserRoute = () => {
  return (
    <div id="my-scrollbar" > 
        <ScrollToTop>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/our-services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/redirect" element={<RedirectPage />} />
          </Routes>
        </ScrollToTop>
        
    </div>
  )
}

export default UserRoute