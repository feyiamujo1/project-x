import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import UserRoute from "./components/UserRoute";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
      {/* </ScrollToTop>       */}
    </div>
  );
}

export default App;
