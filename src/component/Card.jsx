import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import CustomDropdown from "./CustomDropDown.jsx";
import { useUser } from "../context/UserContext";

const Card = (exdata) => {
  const exName=exdata.data.name;
  const { username } = useUser();
  const userId=username;

  // console.log(exdata)

  
  const [selectedWeight, setSelectedWeight] = useState([
    "1 kg",
    "1 kg",
    "1 kg",
    "1 kg",
  ]);
  const [selectedReps, setSelectedReps] = useState([
    "1 Reps",
    "1 Reps",
    "1 Reps",
    "1 Reps",
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExercise = { userId,exName,selectedWeight,selectedReps };

    try{
      // console.log(newExercise);
      
    const res = await fetch(`${apiUrl}/api/userid/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    });

    if (res.ok) {
      alert("Exercise added!");
    }
  }
  catch(e){
    console.error(e)
  }
};

  const weightOptions = Array.from({ length: 500 }, (_, i) => `${i + 1} kg`);
  const repsOptions = Array.from({ length: 50 }, (_, i) => `${i + 1} Reps`);

  return (
    <div className="max-w-[35rem] overflow-x-hidden border-4 border-amber-700 rounded-2xl my-5 text-white/80 bg-[linear-gradient(90deg,_#123_0%,_#E65100_130%)] mx-auto p-2">
      <div className="text-center text-3xl font-bold">{exdata.data.name}</div>
      <div className="flex justify-around  my-3 font-bold gap-5 mx-auto flex-wrap ">
        <img src={exdata.data.image} alt="" className="w-35" />
        {/* <div className="text-xl">
          <div className="flex gap-2 my-2 items-center relative ">
            <div>Set-1</div>
            <select size='1' className="w-20 p-2 text-lg border opacity-75 bg-black/40  border-amber-700 rounded-md">
              {Array.from({ length: 500 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num + " kg"}
                </option>
              ))}
            </select>
            <select className="w-20  p-2 text-lg border opacity-75 bg-black/40  border-amber-700 rounded-md">
              {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num} className='max-h-1 '>
                  {num + "Reps"}
                </option>
              ))}
            </select>
          </div> */}

        {/*  */}
        {/* </div> */}

        <div className="text-xl">
          {/* Set-1 */}
          <div className="flex gap-2 my-2 items-center relative ">
            <div>Set-1</div>
            <CustomDropdown
              options={weightOptions}
              selected={selectedWeight[0]}
              onChange={(val) => {
                const newSelected = [...selectedWeight];
                newSelected[0] = val;
                setSelectedWeight(newSelected);
              }}
            />
            <CustomDropdown
              options={repsOptions}
              selected={selectedReps[0]}
              onChange={(val) => {
                const newSelected = [...selectedReps];
                newSelected[0] = val;
                setSelectedReps(newSelected);
              }}
            />
          </div>

          {/* Set-2 */}

          <div className="flex gap-2 my-2 items-center relative">
            <div>Set-2</div>
            <CustomDropdown
              options={weightOptions}
              selected={selectedWeight[1]}
              onChange={(val) => {
                const newSelected = [...selectedWeight];
                newSelected[1] = val;
                setSelectedWeight(newSelected);
              }}
            />
            <CustomDropdown
              options={repsOptions}
              selected={selectedReps[1]}
              onChange={(val) => {
                const newSelected = [...selectedReps];
                newSelected[1] = val;
                setSelectedReps(newSelected);
              }}
            />
          </div>

          {/* Set-3 */}

          <div className="flex gap-2 my-2 items-center relative">
            <div>Set-3</div>
            <CustomDropdown
              options={weightOptions}
              selected={selectedWeight[2]}
              onChange={(val) => {
                const newSelected = [...selectedWeight];
                newSelected[2] = val;
                setSelectedWeight(newSelected);
              }}
            />
            <CustomDropdown
              options={repsOptions}
              selected={selectedReps[2]}
              onChange={(val) => {
                const newSelected = [...selectedReps];
                newSelected[2] = val;
                setSelectedReps(newSelected);
              }}
            />
          </div>

          {/* Set-4*/}
          <div className="flex gap-2 my-2 items-center relative">
            <div>Set-4</div>
            <CustomDropdown
              options={weightOptions}
              selected={selectedWeight[3]}
              onChange={(val) => {
                const newSelected = [...selectedWeight];
                newSelected[3] = val;
                setSelectedWeight(newSelected);
              }}
            />
            <CustomDropdown
              options={repsOptions}
              selected={selectedReps[3]}
              onChange={(val) => {
                const newSelected = [...selectedReps];
                newSelected[3] = val;
                setSelectedReps(newSelected);
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="text-center font-bold ml-[8rem] py-1 md:px-20 px-5 mb-2 rounded-full bg-black/40"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="p-1 mx-3">{exdata.data.desc}</div>
    </div>
  );
};

export default Card;
