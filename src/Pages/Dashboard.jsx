import React from "react";
import chest from "../assets/bench.png";
import back from "../assets/back.png";
import legs from "../assets/legs.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  //  const { user } = useParams();
  const { username } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(username);

  // const location = useLocation();
  // const username = location.state.user;
  // console.log(username)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/programs");
        // const res = await fetch("http://10.213.238.65:5000/api/programs");
        const json = await res.json();
        setData(json);
        // console.log(json);
      } catch (e) {
        setError(e.message || " Something went wrong ");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleProgress = () => {
    navigate("/Home"); // Navigate programmatically
  };
  const handlePull1Click = () => {
    navigate("/pull", { state: { someData: data[0] } }); 
  };
  const handlePush1Click = () => {
    navigate("/push", { state: { someData: data[1] } }); 
  };
  const handleLegs1Click = () => {
    navigate("/legs", { state: { someData: data[2] } }); 
  };
  const handlePull2Click = () => {
    navigate("/pull", { state: { someData: data[3] } }); 
  };
  const handlePush2Click = () => {
    navigate("/push", { state: { someData: data[4] } }); 
  };
  const handleLegs2Click = () => {
    navigate("/legs", { state: { someData: data[5] } }); 
  };
  return (
    <>
      {/* <Navbar /> */}

      {/* <div className="mx-auto w-[95%]">
        <button className="block my-10 text-white font-bold bg-[#E65100] rounded-tl-4xl rounded-br-4xl text-2xl px-8 py-3 ">
          Get Started
        </button>
        <div className="text-2xl h-[80%] p-2  my-auto border-amber-600 border-4 rounded-3xl">
          <img src={logoo} width={200} alt="" />
        </div>
      </div> */}
      <div className="max-w-[35rem] mx-auto grid grid-cols-[7fr_3fr]">
        <div className="font-bold text-2xl m-3 inline">Select Workout</div>
        <div className="my-4 mx-auto px-2 rounded-full font-bold text-[#cc4b05] border border-amber-600 bg-white cursor-pointer"
        onClick={handleProgress}>
          Progress
        </div>
      </div>

      <div className="cards w-[95%] md:w-[35rem] mx-auto my-3 flex flex-col gap-5 ">
        {/* card-1 for the pull workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handlePull1Click}
        >
          <img
            src={back}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500 ease-in-out hover:scale-125 "
            alt=""
          />
          <div className="absolute   md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            PULL-1
          </div>
        </div>

        {/* card-2 for the push workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handlePush1Click}
        >
          <img
            src={chest}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500  ease-in-out hover:scale-125"
            alt=""
          />
          <div className="absolute  md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            PUSH-1
          </div>
        </div>

        {/* card-3 for the legs workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handleLegs1Click}
        >
          <img
            src={legs}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500  ease-in-out hover:scale-125"
            alt=""
          />
          <div className="absolute  md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            LEGS-1
          </div>
        </div>
        {/* card-4 for the pull workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handlePull2Click}
        >
          <img
            src={back}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500 ease-in-out hover:scale-125 "
            alt=""
          />
          <div className="absolute   md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            PULL-2
          </div>
        </div>

        {/* card-5 for the push workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handlePush2Click}
        >
          <img
            src={chest}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500  ease-in-out hover:scale-125"
            alt=""
          />
          <div className="absolute  md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            PUSH-2
          </div>
        </div>

        {/* card-6 for the legs workout */}
        <div
          className="card relative  rounded-2xl overflow-hidden cursor-pointer"
          onClick={handleLegs2Click}
        >
          <img
            src={legs}
            className="w-full contrast-65 hover:contrast-85 transition-all duration-500  ease-in-out hover:scale-125"
            alt=""
          />
          <div className="absolute md:text-[8rem] text-[4rem] font-bold bottom-10 right-10 text-white/50 ">
            LEGS-2
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
