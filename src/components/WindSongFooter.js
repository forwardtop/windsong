import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function WindSongFooter() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto  lg:py-[5rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col lg:w-1/2 md:p-0 py-4 gap-8">
              {/* <img
                src={"https://i.imgur.com/520zDfd.png"}
                alt="footer_logo"
                className="w-[18rem]"
              /> */}
              <h1 className="text-gray-500 font-bold text-7xl lg:text-8xl" style={{fontFamily: "Snell Roundhand, cursive"}}><a href="/">WindSong</a></h1>
              <p className="text-lg font-medium text-gray-500">
              Email us, call us or fill out an enquiry form.     We are happy to answer all of your questions.
              Manly Boat Harbour, Moreton Bay, Manly QLD 4179
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-gray-500 justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#29BB89] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-gray-500">
                Privacy Policy | © {new Date().getFullYear()} WindSong <br />{" "}
                Design by{" Integra Dev "}
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Categories</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#29BB89]"></span>

              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Destination
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Cruises
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Gallery
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Yacht
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                About
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Merchandise
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Categories</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#29BB89]"></span>

              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Destination
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Cruises
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Gallery
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Yacht
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                About
              </p>
              <p className="text-[16px] hover:text-[#29BB89] cursor-pointer text-gray-500 font-medium hover:font-bold">
                Merchandise
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default WindSongFooter;
