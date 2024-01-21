import React from "react";
import menuItems from "../data/menuItems.json";

const getCurrentPath = () => {
  // Get the current path from the window location
  return window.location.pathname;
};

const LogoSection = () => {
  const currentPath = getCurrentPath();

  // Find the matching menuItem based on the current URL
  const matchingMenuItem = menuItems.find((item) => item.link === currentPath);

  // Use the matching breadCrumb value or a default if not found
  const breadCrumb = matchingMenuItem ? matchingMenuItem.submenu[0].breadCrumb : "Default BreadCrumb";

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-500">WindSong</h1>
        <h1 className="logo-heading-1">Luxury Skippered Sailing Cruises</h1>
        <h2 className="logo-heading-2">{breadCrumb}</h2>
      </div>
    </div>
  );
};

export default LogoSection;
