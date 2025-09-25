import React from "react";
import logo from "../assets/logo-3.png";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

// md:bg-[#b99e87]

const Footer = () => {
  return (
    <>
      <div className="max-w-[35rem]  border-t-4 border-amber-700  mt-15 mx-auto p-2"></div>
      <div className="max-w-[35rem] mx-auto">
        <div className="flex justify-around items-center gap-5 mx-2 md:gap-20">
          <div className=" bg-[#fadec7]  py-3 shrink-0">
            <img src={logo} alt="" className="w-18 " />
          </div>
          <div className=" text-lg text-[#E65100] md:text-black">
            Its a fitness program to make india fit Its a fitness program to
            make india a fitness program to make india fit
          </div>
        </div>
        <div className="mx-2 p-2 flex  gap-5 md:gap-[7rem]">
          <div className="social-media flex flex-col">
            <div className="insta">
              <FaInstagram className="inline mr-2" /> Zenavo
            </div>
            <div className="facebook">
              <FaFacebookF className="inline mr-2" /> Zenavo
            </div>
            <div className="twitter">
              <FaTwitter className="inline mr-2" /> Zenavo
            </div>
            <div className="youtube">
              <FaYoutube className="inline mr-2" /> Zenavo
            </div>
          </div>
          <div className="contact-us flex flex-col text-lg">
            <div className="email">
              <FaEnvelope className="inline mr-2" /> zenavo@email.com
            </div>
            <div className="phone">
              <FaPhone className="inline transform rotate-90 mr-2" /> +91
              1234567890
            </div>
            <div className="address">
              <FaLocationDot className="inline mr-2" /> Abc Street, Delhi, India
            </div>
          </div>
        </div>
        <div className="text-center pb-3">Copyright {"\u00A9"} All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
