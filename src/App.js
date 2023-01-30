import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UserRoute from "./components/UserRoute";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
      {/* </ScrollToTop>       */}
    </div>
  );
}

export default App;
