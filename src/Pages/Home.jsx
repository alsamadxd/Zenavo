import React, { useEffect,useState } from 'react'
import { useUser } from "../context/UserContext";
import DataCarrd from '../component/DataCarrd.jsx';
import { FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const { username } = useUser();

  const handleGoBack = () => {
    // This will navigate to the previous page in the browser history
    window.history.back();
  };
  // const username = "abc";
  const [datas, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // if (username != null) {
      //   return (
      //     <div className="font-bold text-3xl text-center m-3">
      //       Start Training{" "}
      //     </div>
      //   );
      // }
      try {
        const res = await fetch("http://localhost:5000/api/user/data", {
        // const res = await fetch(
        //   "http://120.253.338.165:5000/api/user/data",
        //   {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
          }
        );
        const resData = await res.json();
        setData(resData);
        // console.log(resData);
        if (!res.ok) {
          return;
        }
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
  }, []);

//     return (
//       <div className="font-bold text-3xl text-center m-3">Your Progress </div>
//       {datas.map((datas,index)=>{
//            return <Card data={datas} />;

//       })}
//     );
//   }
  return (
    <div className="min-h-[70vh]">
      <div className="font-bold text-xl md:text-3xl text-center m-3 relative">
        <button
          onClick={handleGoBack}
          className="cursor-pointer absolute left-0 md:left-[15vw] top-1"
        >
          <FaArrowLeft size={24} color="#eb5e01" />
        </button>
        <div className="text-[#eb5e01] inline-block">{username}</div> Your
        Progress
      </div>

      {datas.map((data, index) => {
        return <DataCarrd data={data} />;
      })}
    </div>
  );
};
export default Home;