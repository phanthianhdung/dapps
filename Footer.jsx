import React from "react";

import logo from "../../images/logo.png";

import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className=" sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Copyright © 2023 All right reserved</p>
      <div className="flex items-center gap-7">
        <SocialIcon url="https://" network="facebook" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://" network="twitter" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://" network="telegram" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://" network="discord" style={{ height: 30, width: 30 }}/>
      </div>
    </div>
  </div>
);

export default Footer;