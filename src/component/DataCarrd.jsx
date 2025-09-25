import React from 'react'

const DataCarrd = (Data) => {
    
    const userData=Data.data;
    
  return (
    <div className="max-w-[35rem]  border-4 border-amber-700 rounded-2xl my-5 text-white/80 bg-[linear-gradient(90deg,_#123_0%,_#E65100_130%)] mx-auto p-2">
      <div className="w-full grid grid-cols-[7fr_3fr] mx-2 mt-2 mb-4 font-bold  md:text-2xl">
        <div className="">{userData.exName}</div>
        <div className="">{userData.date.slice(0, 10)}</div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="w-full grid grid-rows-5 mx-2 ">
          <div className="font-bold  text-lg  ">Sets</div>
          <div>Set-1</div>
          <div>Set-2</div>
          <div>Set-3</div>
          <div>Set-4</div>
        </div>
        <div className="w-full grid grid-rows-5 mx-2  ">
          <div className="font-bold text-lg">Weights</div>
          <div>{userData.selectedWeight[0]}</div>
          <div>{userData.selectedWeight[1]}</div>
          <div>{userData.selectedWeight[2]}</div>
          <div>{userData.selectedWeight[3]}</div>
        </div>
        <div className="w-full grid grid-rows-5 mx-2  ">
          <div className="font-bold text-lg">Reps</div>
          <div>{userData.selectedReps[0]}</div>
          <div>{userData.selectedReps[1]}</div>
          <div>{userData.selectedReps[2]}</div>
          <div>{userData.selectedReps[3]}</div>
        </div>
      </div>

      {/* <div className="flex justify-between m-3 font-bold text-xl">
        <div>{userData.exName}</div>
        <div>{userData.date.slice(0, 10)}</div>
      </div>
      <div className="flex justify-around my-3">
        <div className=" font-bold  text-lg">Sets</div>
        <div>Set-1</div>
        <div>Set-2</div>
        <div>Set-3</div>
        <div>Set-4</div>
      </div>
      <div className="flex justify-around my-3">
        <div className="font-bold text-lg">Wgts</div>
        <div>{userData.selectedWeight[0]}</div>
        <div>{userData.selectedWeight[1]}</div>
        <div>{userData.selectedWeight[2]}</div>
        <div>{userData.selectedWeight[3]}</div>
      </div>

      <div className="flex justify-around my-3">
        <div className="font-bold text-lg">Reps</div>
        <div>{userData.selectedReps[0]}</div>
        <div>{userData.selectedReps[1]}</div>
        <div>{userData.selectedReps[2]}</div>
        <div>{userData.selectedReps[3]}</div>
      </div> */}
    </div>
  );
}

export default DataCarrd