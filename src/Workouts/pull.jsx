import React from "react";
import Card from "../component/card.jsx";
import { useLocation } from "react-router-dom";

const pull = ({ data }) => {
  const location = useLocation();
  // console.log(location.state.someData);
  const exData = location.state.someData.exerciseName;
  // exData.map((exerciseObj, index) => {
  //   console.log(exerciseObj);
  // });

  return (
    <div>
      <div className="font-bold text-3xl text-center m-3">PULL Exercises</div>
      {exData.map((exerciseObj, index) => {
        return <Card data={exerciseObj} />;
      })}
    </div>
  );
};

export default pull;
