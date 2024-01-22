import React from "react";
import menuItems from "../data/menuItems.json";

const getCurrentPath = () => {
  // Get the current path from the window location
  return window.location.pathname;
};

const LogoSection = () => {
  const currentPath = getCurrentPath();

  // Find the matching menuItem based on the current URL
  const matchingMenuItem = menuItems.find((item) => item.submenu.some((submenuItem) => submenuItem.link === currentPath));

  // Extract the breadcrumb directly or use a default if not found
  const breadcrumb = matchingMenuItem
    ? matchingMenuItem.submenu.find((submenuItem) => submenuItem.link === currentPath)?.breadCrumb
    : "Moreton Bay, Brisbane, Australia";

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-500 mb-3" style={{ fontFamily: 'Snell Roundhand, cursive' }}><a href="/">WindSong</a></h1>
        <h1 className="logo-heading-1 mb-2">Luxury Skippered Sailing Cruises</h1>
          <h2 className="logo-heading-2 mb-5">{breadcrumb}</h2>
      </div>
    </div>
  );
};

export default LogoSection;
