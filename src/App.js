import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import RedirectPage from "./components/RedirectPage";
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
            <Route path="/redirect" element={<RedirectPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>      
    </div>
  );
}

export default App;
