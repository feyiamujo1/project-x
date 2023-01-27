import { Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import Services from "./Services"
import Blog from "./Blog"
import About from "./About"
import RedirectPage from "./RedirectPage"
import Footer from "./UI/Footer"
import Navbar from "./UI/Navbar"
import ScrollToTop from "./UI/ScrollToTop"
// import { Scrollbar } from "smooth-scrollbar/scrollbar"
//style={{width:"100vw", height:"100vh", overflowY:"auto"}}


const UserRoute = () => {
  return (
    <div id="my-scrollbar" > 
        <ScrollToTop>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/our-services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/redirect" element={<RedirectPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
        
    </div>
  )
}

export default UserRoute