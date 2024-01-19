import React from "react";
const StickyBackground = () => {
  return (
    <>
      <div className="bg-fixed overflow-auto h-[100vh] w-full background-image-1"></div>
      <div className="flex flex-col lg:flex-row w-[960px] m-auto">
        <div className="flex flex-col justify-between w-1/2 sticky-bg-contents p-5">
          <p className="sticky-bg-text p5">
            Perfect for celebrating birthday parties, hens’ parties, family
            get-togethers or corporate team building, you and your guests will
            have a day to remember on Curlew Escape.
          </p>
          <p className="sticky-bg-text p5">
            We are available for a day charter on Moreton Bay and longer
            overnight mini-cruises around the bay, as far north as Mooloolaba
            and as far south as the Gold Coast.
          </p>
          <p className="sticky-bg-text p5">
            We also offer seasonal events such as Riverfire, Christmas Parties,
            New Years’ Eve, Yacht Race Spectating and more.
          </p>
          <p className="sticky-bg-text p5">
            This large and luxurious yacht is based in Manly, Brisbane and
            caters for up to 12 passengers. Cruising to stunning destinations
            around Moreton Bay, the yacht is fully equipped for an active day of
            water sports and beach activities. Be fully involved in the sailing,
            or let our qualified RYA YachtMaster skipper do it all for you.{" "}
          </p>
          <h2 className="">MAKE YOUR SPECIAL EVENT ONE TO REMEMBER</h2>
        </div>
        <div className="flex justify-center w-1/2 items-center">
          <img
            src="/assets/images/yacht.webp"
            className="p-5"
            alt="..."
          />
        </div>
      </div>
      <div className="bg-fixed overflow-auto h-[100vh] w-full background-image-2"></div>
    </>
  );
};

export default StickyBackground;
