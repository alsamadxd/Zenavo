import React from 'react'
import logo from "../assets/logo-3.png";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-5 bg-[linear-gradient(90deg,_#000_0%,_#E65100_100%)] text-white p-2 shadow-md'>
      <div>
          <img src={logo} alt="" className="w-12" /> 
      </div>

      <div className='mr-4 text-2xl font-medium '>
        {/* <div>Home</div>
        <div>My Plans</div>
        <div>Setting</div> */}
        Let's Get Fit !
      </div>
    </div>
  );
}

export default Navbar