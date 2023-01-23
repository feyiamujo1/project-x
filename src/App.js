import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import RedirectPage from "./components/RedirectPage";
import Services from "./components/Services";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <div className="">
        <Navbar />
        <ScrollToTop>
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
  );
}

export default App;
