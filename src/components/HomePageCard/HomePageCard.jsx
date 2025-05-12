import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { KnowMore } from "../Buttons/KnowMore";
import { BookOnline } from "../Buttons/BookOnline";
import * as motion from "motion/react-client";


export const HomePageCard = ({ CardImgs }) => {
  return (
    <>
      {CardImgs.map((Val, Idx) => {
        const isLastCard = Val.CardName === "SOU Tickets";

        return (
          <div
            className="card-cont flex flex-col justify-center items-center gap-5 p-5 w-fit rounded-2xl  shadow-xl"
            key={Idx}
          >
            {isLastCard ? (
              <>
                <div className="card-img">
                  <motion.img
                    src={Val.UrlImg}
                    alt="IMG"
                    className="h-50 w-90"
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="card-title text-center">
                  <h3 className="text-orange-color text-[1.2rem] font-[500]">
                    <NavLink to={Val.path}>{Val.CardName}</NavLink>
                  </h3>
                </div>

                {/* Your list of facilities for SOU Tickets */}
                <div className="sou-ticket-features border-l-4 border-orange-color w-full ps-5">
                  <ul className="list-none font-[500] flex  flex-col gap-5 relative">
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[1px] left-[-20px] text-[1.4rem] text-orange-color" />
                      Viewing gallery (chest level by lift)
                    </li>
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[2.8rem] left-[-20px] text-[1.4rem] text-orange-color" />
                      Jungle Safari by Golf Cart
                    </li>
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[5.6rem] left-[-20px] text-[1.4rem] text-orange-color" />
                      Valley of Flowers
                    </li>
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[8.3rem] left-[-20px] text-[1.4rem] text-orange-color" />
                      Sardar Sarovar Dam View Point
                    </li>
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[11.1rem] left-[-20px] text-[1.4rem] text-orange-color" />
                      Projection Mapping (Laser Show)
                    </li>
                    <li>
                      <TfiLayoutLineSolid className="absolute top-[13.8rem] left-[-20px] text-[1.4rem] text-orange-color" />
                      Transportation by SOU Buses
                    </li>
                  </ul>
                </div>

                <div className="card-btns flex gap-5">
                  <KnowMore KnowMoreLink={Val.path} />
                  <BookOnline BookOnlineLink="#" />
                </div>
              </>
            ) : (
              // -- DEFAULT DESIGN FOR ALL OTHER CARDS --

              <>
                <div className="card-img">
                  <motion.img
                    src={Val.UrlImg}
                    alt="IMG"
                    className="h-50 w-90"
                    whileHover={{ scale: 0.95 }} // Shrink a little bit when hover
                    transition={{ duration: 0.3 }}
                  />
                  {/* <img src={Val.UrlImg} alt="IMG" className="h-50 w-90" /> */}
                </div>

                <div className="card-title text-center">
                  <h3 className="text-orange-color text-[1.2rem] font-[500]">
                    <NavLink to={Val.path}>{Val.CardName}</NavLink>
                  </h3>
                </div>

                <div className="card-desc flex gap-5 border-l-4 border-orange-color">
                  <div className="desc-icons flex flex-col justify-around text-white "></div>

                  <div className="location-description flex  flex-col gap-5">
                    <div className="Accommodation-cont flex flex-col gap-2 relative">
                      <TfiLayoutLineSolid className="absolute top-[1px] left-[26px] text-[1.4rem] text-orange-color" />
                      <TfiLayoutLineSolid className="absolute top-[0px] left-[-20px] text-[1.5rem] text-orange-color" />

                      <h4 className="font-[500] flex gap-5">
                        <FaHome className="bg-orange-color text-[1.7rem] p-1 rounded-md text-white relative" />
                        Accommodation
                      </h4>
                      <p className="text-grey-text text-[.9rem] font-[400] pl-12">
                        {Val.Accommodation}
                      </p>
                    </div>

                    <div className="Package-cont  flex flex-col gap-2 relative">
                      <TfiLayoutLineSolid className="absolute top-[1px] left-[26px] text-[1.4rem] text-orange-color" />
                      <TfiLayoutLineSolid className="absolute top-[0px] left-[-20px] text-[1.5rem] text-orange-color" />

                      <h4 className="font-[500] flex gap-5">
                        <CgNotes className="bg-orange-color text-[1.7rem] p-1 rounded-md text-white" />
                        Package
                      </h4>
                      <p className="text-grey-text text-[.9rem] font-[400] pl-12">
                        {Val.Packages}
                      </p>
                    </div>

                    <div className="Location-cont  flex flex-col gap-2 relative">
                      <TfiLayoutLineSolid className="absolute top-[1px] left-[26px] text-[1.4rem] text-orange-color" />
                      <TfiLayoutLineSolid className="absolute top-[0px] left-[-20px] text-[1.5rem] text-orange-color" />

                      <h4 className="font-[500] flex gap-5">
                        <FaLocationDot className="bg-orange-color text-[1.7rem] p-1 rounded-md text-white" />
                        Location
                      </h4>
                      <p className="text-grey-text text-[.9rem] font-[400] pl-12">
                        {Val.Location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-btns flex gap-5 ">
                  <KnowMore KnowMoreLink={Val.path} />
                  <BookOnline BookOnlineLink="#" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
