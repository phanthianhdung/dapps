import React from "react";

import logo from "../../images/logo.png";

import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";

import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import bnb from "../../images/bnb.png";

import { SocialIcon } from 'react-social-icons';

const Partner = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        
        <p className="text-white text-base text-center mx-2 cursor-pointer">Partner</p>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={p1} alt="logo" className="w-64" /></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={p2} alt="logo" className="w-64" /></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={p3} alt="logo" className="w-64" /></p>
      </div>   
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={btc} alt="logo" className="w-64" /></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={eth} alt="logo" className="w-64" /></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><img src={bnb} alt="logo" className="w-64" /></p>
      </div>        
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@test.com</p>
    </div>

    <div className="sm:w-[50%] w-full h-[0.25px] bg-gray-800 mt-5 " />

    <div className=" sm:w-[90%] w-full flex justify-between items-center mt-3">

      <div className="flex items-center gap-7">
        </div>
    </div>
  </div>
);

export default Partner;