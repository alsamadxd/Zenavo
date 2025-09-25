import {React,useContext,useState} from "react";
// import Navbar from "../component/Navbar";
import { useNavigate} from "react-router-dom";
import { useUser } from "../context/UserContext";
// import { useContext } from "react";
// import App from "../App";
import Dashboard from "./Dashboard";
import {Routes, Route, Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";



const Login = () => {
    const { setUser } = useUser();
  const navigate = useNavigate();

    const handleSignupClick = () => {
      navigate("/Signup"); // Navigate programmatically
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [user,setUser]=useState("")
    
    
    async function handleLogin() {
      // setError(null);
      try {
        const response = await fetch("http://localhost:5000/api/login", {
        // const response = await fetch(
        //   "http://230.321.258.412:5000/api/login",
        //   {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text(); // Read the raw error message
          throw new Error(errorText || "Login failed");
        }

        const data = await response.json(); // Now safe
        const user=data.user.username
        setUser(user);
        // const { setUser } = useContext(user);
        // console.log(user)
        localStorage.setItem("token", data.token);
        
        // alert("Login successful!");
        // const log=true;
        // <Routes>
        //   <Route path="/Dashboard" element={<Dashboard />} />
        // </Routes>;
        // setUser({ username:user.usename, role: user.role });
        navigate("/Dashboard",{state:{user}});
        // alert("successful")
        
        // <Route path="/Dashboard" element={<Dashboard />} />;


      } catch (err) {
        alert( err.message);
        // console.error("Login error:", err.message);
        // setError(err.message || "Something went wrong");
      }
    }

   

  return (
    <>
      {/* <Navbar /> */}
      <div className="text-3xl font-bold text-center m-5 text-[#a75529]">
        Welcome Back
      </div>

      <div className="md:max-w-[35rem] md:mx-auto text-2xl h-[80%] p-2 mx-5 my-auto border-amber-600 border-4 rounded-3xl">
        <div className="my-5">
          <label className=" font-medium text-gray-700 m-2">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="E.g. example@gmail.com"
            name="name"
            className="w-full m-1 px-4 py-2 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="my-5">
          <label className=" font-medium text-gray-700 m-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            name="name"
            className="w-full m-1 px-4 py-2 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="text-lg text-center my-t-[-2]">
          No Account ?
          <button
            className="inline-block mx-2 hover:scale-110 overflow-hidden text-white font-bold bg-[#E65100] text-sm px-2 py-1 rounded-full"
            onClick={handleSignupClick}
          >
            Signup
          </button>
          For Free
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="block mx-auto my-10 text-white font-bold bg-[#E65100] text-2xl px-8 py-3 rounded-full"
      >
        Login
      </button>
    </>
  );
};

export default Login;



