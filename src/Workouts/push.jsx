import React from 'react'
import Card from '../component/card'
import { useLocation } from "react-router-dom";

const push = ({data}) => {

  
    const location = useLocation();
    const exData = location.state.someData.exerciseName;
  return (
    <div>
      <div className="font-bold text-3xl text-center m-3">PUSH Exercises</div>
      
      {exData.map((exerciseObj, index) => {
        return <Card data={exerciseObj} />;
      })}
    </div>
  );
}

export default push