import Navbar from "./component/Navbar";
import Footer from "./component/footer.jsx";

import "./index.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Push from "./Workouts/push.jsx";
import Pull from "./Workouts/pull.jsx";
import Legs from "./Workouts/legs.jsx";
import Home from "./Pages/Home.jsx";
// import logo from './assets/logo-3.png'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from "../components/ProtectedRoute.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";
// import { useParams } from "react-router-dom";

function App() {
  // const { isLoggedInOrNot } = useParams();
  // const isLoggedInOrNot = isLoggedIn;
  // md:bg-[#b99e87]
  return (
    <div className="bg-[#fadec7] min-h-screen overflow-x-hidden ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/Home" element={<Home />} />
            <Route path="/Pull" element={<Pull />} />
            <Route path="/Push" element={<Push />} />
            <Route path="/Legs" element={<Legs />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
