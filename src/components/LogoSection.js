import React from "react";
// import logo from "../assets/images/yacht.webp";
const LogoSection = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
        {/* <img src={logo} alt="logo"/> */}
        <h1 className="text-4xl font-bold text-gray-500 ">WindSong</h1>
            <h1 className="logo-heading-1">Luxury Skippered Sailing Cruises</h1>
            <h2 className="logo-heading-2">Moreton Bay, Brisbane, Australia</h2>
        </div>
    </div>
  );
};

export default LogoSection;
