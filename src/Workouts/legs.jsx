import React from "react";
import Card from "../component/Card.jsx";
import { useLocation } from "react-router-dom";

const legs = () => {
  const location = useLocation();
  const exData = location.state.someData.exerciseName;
  return (
    <div>
      {/* <Navbar /> */}
      <div className="font-bold text-3xl text-center m-3">LEGS Exercises</div>
      {exData.map((exerciseObj, index) => {
        return <Card data={exerciseObj} />;
      })}
    </div>
  );
};

export default legs;
