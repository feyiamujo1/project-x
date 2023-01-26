import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ScrollToTop from "./components/UI/ScrollToTop";
import UserRoute from "./components/UserRoute";
// import SmoothScroll from "./components/UI/SmoothScroll";

function App() {
  return (
    // className="w-screen h-screen overflow-x-hidden overflow-y-scroll" id="my-scrollbar"
    <div >
        {/* <Navbar /> */}
        {/* <SmoothScroll /> */}
        <ScrollToTop>
          <Routes>
            <Route path="/*" element={<UserRoute />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>      
    </div>
  );
}

export default App;
