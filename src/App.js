import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import RedirectPage from "./components/RedirectPage";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/redirect" element={<RedirectPage />} />
        </Routes>
        <Footer />      
    </div>
  );
}

export default App;
