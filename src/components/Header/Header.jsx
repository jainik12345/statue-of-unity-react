// import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/sou-logo.webp";
// import { navLinks } from "./HeaderData.js";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";
// import { RxHamburgerMenu } from "react-icons/rx";

// export const Header = () => {

//   const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
//   const [isNavActive, setIsNavActive] = useState(false);

//   const toggleDropdown = (index) => {
//     setOpenDropdownIndex(openDropdownIndex === index ? null : index);
//   };

//   const IsNavBtnActive = () => {
//     setIsNavActive((prev) => !prev);
//   };

//   return (
//     <>
//       <header className="bg-orange-color  z-50 sticky left-0 top-0">
//         <div className="max-w-screen-xl mx-auto">
//           {/* TopBar :  */}
//           <div className="flex lg:justify-between justify-center items-center px-12 py-4">
//             <div className="hidden lg:block">
//               <h2 className="text-white font-medium">
//                 Welcome to Statue of Unity
//               </h2>
//             </div>

//             <div className="flex lg:flex-row flex-col">
//               <ul className="flex ">
//                 <li className="lg:mr-10 mr-4">
//                   <a
//                     href="https://wa.me/917069766966"
//                     target="_self"
//                     className="text-white font-semibold text-sm sm:text-base text-[.7rem] flex items-center"
//                   >
//                     <i className="fa-solid fa-phone text-white sm:mr-3 mr-1 sm:text-[1rem] text-[.8rem]"></i>
//                     +917069766966
//                   </a>
//                 </li>

//                 <li className="lg:mr-10 mr-4">
//                   <a
//                     href="https://mail.google.com/mail/?view=cm&fs=1&to=booking@aalpine.in"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white font-semibold text-sm sm:text-base flex items-center text-[.7rem]"
//                   >
//                     <i className="fa-solid fa-envelope text-white sm:mr-3 mr-1 sm:text-[1rem] text-[.8rem]"></i>
//                     booking@aalpine.in
//                   </a>
//                 </li>

//                 <li className="lg:mr-10 mr-4">
//                   <a
//                     href="https://www.facebook.com/sou.182m/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fa-brands fa-facebook text-white  sm:text-[1rem] text-[.8rem]"></i>
//                   </a>
//                 </li>

//                 <li className="lg:mr-10 mr-4">
//                   <a
//                     href="https://www.instagram.com/sou.india/#"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fa-brands fa-instagram text-white sm:text-[1rem] text-[.8rem]"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div className="mt-6 lg:mt-0 flex justify-center lg:block">
//                 <NavLink
//                   to="/booknow"
//                   className="text-white border border-black lg:py-3 lg:px-6 px-20 py-2 bg-black sm:text-sm text-[.7rem]"
//                 >
//                   Book Online
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* === NAVIGATION === */}

//       <nav className="sticky lg:top-[3.4rem] top-[7.2rem] left-0 bg-white shadow-2xl z-50">

//         {/* nav container */}

//         <div className="flex max-w-screen-xl mx-auto py-4 justify-between px-4">

//           {/* navbar hamburger icon */}

//           <RxHamburgerMenu size={35} className="absolute right-10 top-6 cursor-pointer md:hidden " onClick={(event) => { IsNavBtnActive(event) }} />

//           {/* nav logo image */}

//           <div className="flex justify-center items-center">
//             <NavLink to="/">
//               <img src={logo} alt="Logo" className="h-11" />
//             </NavLink>
//           </div>

//           {/* nav links container */}

//           <div className={`flex md:py-0 py-20 md:px-0 px-5 md:flex-row md:static md:h-auto md:justify-center justify-around md:w-auto w-70  h-[100vh] fixed left-0 top-[0rem] flex-col items-center bg-white transition-all duration-200 ease-in ${isNavActive ? "left-[0rem]" : "left-[-50rem]"}`}>

//             <div className="flex justify-center items-center md:hidden p-2">
//               <NavLink to="/">
//                 <img src={logo} alt="Logo" className="h-11" />
//               </NavLink>
//             </div>

//             {

//               navLinks && navLinks.map((NavVal, Idx) => {

//                 const isOpen = openDropdownIndex === Idx;
//                 const hasDropdown = !!NavVal.dropdown;

//                 return (

//                   <li className="group relative md:w-auto w-full  border-b-1 md:border-none">

//                     <NavLink className={({ isActive }) => `group flex p-3  md:justify-center justify-between items-center md:mx-0 font-semibold hover:text-orange-color lg:text-[15px] md:text-[11px] text-[15px]  ${isActive ? "text-orange-color" : ""}`} to={NavVal.path}>
//                       {NavVal.label}
//                       {hasDropdown && <FaChevronDown className="ml-1 group-hover:rotate-180 transition-all duration-200 ease-in md:text-[13px] text-[20px]" onClick={(e) => { window.innerWidth < 768 && hasDropdown ? toggleDropdown(Idx) : null; e.preventDefault() }} />}
//                     </NavLink>

//                     {/* DropDown  */}

//                     {hasDropdown && (
//                       <ul
//                         className={`flex flex-col bg-white transition-all duration-300 overflow-hidden md:absolute md:top-10 md:left-0 md:min-w-max md:shadow-lg md:rounded-md md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible ${isOpen ? "max-h-[500px] py-2 px-4" : "max-h-0"
//                           } md:max-h-max md:py-2 md:px-5 w-full`}

//                       >
//                         {NavVal.dropdown.map((drop, idx) => (
//                           <li key={idx} className="my-2 ps-1">
//                             <NavLink
//                               to={drop.path}
//                               className={({ isActive }) => `text-gray-400 font-medium hover:ml-2 hover:text-orange-color transition-all duration-300 lg:text-[1rem] text-[.9rem]  ${isActive ? "text-orange-color" : ""}`} onClick={(event) => {
//                                 IsNavBtnActive(event);
//                               }}
//                             >
//                               {drop.label}
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                   </li>

//                 )

//               })

//             }

//           </div>

//         </div>

//       </nav >

//       {isNavActive && (
//         <div
//           className="fixed inset-0 z-40 backdrop-blur-[1px] md:hidden transition-opacity duration-300"
//           onClick={() => setIsNavActive(false)}
//         ></div>
//       )}

//     </>
//   );
// };

//jainik code

import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sou-logo.webp";
import { navLinks } from "./HeaderData.js";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const IsNavBtnActive = () => {
    setIsNavActive((prev) => !prev);
  };

  return (
    <>
      <header className="bg-orange-color  z-50 sticky left-0 top-0">
        <div className="max-w-screen-xl mx-auto">
          {/* TopBar :  */}
          <div className="flex lg:justify-between justify-center items-center px-12 py-4">
            <div className="hidden lg:block">
              <h2 className="text-white font-medium">
                Welcome to Statue of Unity
              </h2>
            </div>
            <div className="flex lg:flex-row flex-col">
              <ul className="flex ">
                <li className="lg:mr-10 mr-4">
                  <a
                    href="https://wa.me/917069766966"
                    target="_self"
                    className="text-white font-semibold text-sm sm:text-base text-[.7rem] flex items-center"
                  >
                    <i className="fa-solid fa-phone text-white sm:mr-3 mr-1 sm:text-[1rem] text-[.8rem]"></i>
                    +917069766966
                  </a>
                </li>
                <li className="lg:mr-10 mr-4">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=booking@aalpine.in"
                    // href="mailto:booking@aalpine.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-sm sm:text-base flex items-center text-[.7rem]"
                  >
                    <i className="fa-solid fa-envelope text-white sm:mr-3 mr-1 sm:text-[1rem] text-[.8rem]"></i>
                    booking@aalpine.in
                  </a>
                </li>
                <li className="lg:mr-10 mr-4">
                  <a
                    href="https://www.facebook.com/sou.182m/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook text-white  sm:text-[1rem] text-[.8rem]"></i>
                  </a>
                </li>
                <li className="lg:mr-10 mr-4">
                  <a
                    href="https://www.instagram.com/sou.india/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-white sm:text-[1rem] text-[.8rem]"></i>
                  </a>
                </li>
              </ul>
              <div className="mt-6 lg:mt-0 flex justify-center lg:block">
                <NavLink
                  to="/booknow"
                  className="text-white border border-black lg:py-2 lg:px-6 px-20 py-2 bg-black sm:text-sm text-[.7rem]"
                >
                  Book Online
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* === NAVIGATION === */}
      <nav className="sticky lg:top-[3.4rem] top-[7.2rem] left-0 bg-white shadow-2xl z-50">
        <div className="flex max-w-screen-xl mx-auto py-4 justify-between px-4">
          {/* navbar hamburger icon */}
          <RxHamburgerMenu
            size={35}
            className="absolute right-10 top-6 cursor-pointer md:hidden"
            onClick={(event) => {
              IsNavBtnActive(event);
            }}
          />

          {/* nav logo image */}
          <div className="flex justify-center items-center">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-11" />
            </NavLink>
          </div>

          {/* nav links container */}
          <div
            className={`flex md:py-0 py-20 md:px-0 px-5 md:flex-row md:static md:h-auto md:justify-center justify-around md:w-auto w-70  h-[100vh] fixed left-0 top-[0rem] flex-col items-center bg-white transition-all duration-200 ease-in ${
              isNavActive ? "left-[0rem]" : "left-[-50rem]"
            }`}
          >
            <div className="flex justify-center items-center md:hidden p-2">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="h-11" />
              </NavLink>
            </div>

            {navLinks &&
              navLinks.map((NavVal, Idx) => {
                const isOpen = openDropdownIndex === Idx;
                const hasDropdown = !!NavVal.dropdown;

                return (
                  <li
                    key={Idx}
                    className="group relative md:w-auto w-full border-b border-gray-400 md:border-none"
                  >
                    <div className="flex items-center justify-between">
                      {/* Main NavLink */}
                      <NavLink
                        className={({ isActive }) =>
                          `group flex p-3 md:justify-center items-center md:mx-0 font-semibold hover:text-orange-color lg:text-[15px] md:text-[11px] text-[15px] ${
                            isActive ? "text-orange-color" : ""
                          }`
                        }
                        // to={NavVal.path}
                        to={`/${NavVal.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => {
                          if (window.innerWidth < 768 && hasDropdown) {
                            setOpenDropdownIndex(null); // Close dropdown on click
                          }
                        }}
                      >
                        {NavVal.label}
                      </NavLink>

                      {/* Dropdown Icon */}
                      {hasDropdown && (
                        <FaChevronDown
                          className=" cursor-pointer md:text-[13px] text-[20px] md:group-hover:text-orange-color md:group-hover:rotate-180 transition-all duration-200 ease-in-out "
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.innerWidth < 768) {
                              toggleDropdown(Idx);
                            }
                          }}
                        />
                      )}
                    </div>

                    {/* DropDown */}
                    {/* {hasDropdown && (
                      <ul
                        className={`flex flex-col bg-white transition-all duration-300 overflow-hidden md:absolute md:top-10 md:left-0 md:min-w-max md:shadow-lg md:rounded-md md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible ${isOpen ? "max-h-[500px] py-2 px-4" : "max-h-0"
                          } md:max-h-max md:py-2 md:px-5 w-full`}
                      >
                        {NavVal.dropdown.map((drop, idx) => (
                          <li key={idx} className="my-2 ps-1">
                            <NavLink
                              to={drop.path}
                              className={({ isActive }) => `text-gray-400 font-medium hover:ml-2 hover:text-orange-color transition-all duration-300 lg:text-[1rem] text-[.9rem] ${isActive ? "text-orange-color" : ""}`}
                              onClick={() => {
                                IsNavBtnActive();
                                setOpenDropdownIndex(null);

                              }}
                            >
                              {drop.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )} */}

                    {hasDropdown && (
                      <ul
                        className={`flex flex-col bg-white transition-all duration-300 overflow-hidden md:absolute md:top-10 md:left-0 md:min-w-max md:shadow-lg md:rounded-md md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible ${
                          isOpen ? "max-h-[500px] py-2 px-4" : "max-h-0"
                        } md:max-h-max md:py-2 md:px-5 w-full`}
                      >
                        {/* {NavVal.dropdown.map((drop, idx) => (
                          <li key={idx} className="my-2 ps-1">
                            <NavLink
                              to={`/gujarat-packages/${drop.label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                              className={({ isActive }) => `text-gray-400 font-medium hover:ml-2 hover:text-orange-color transition-all duration-300 lg:text-[1rem] text-[.9rem] ${isActive ? "text-orange-color" : ""}`}
                              onClick={() => {
                                IsNavBtnActive();
                                setOpenDropdownIndex(null);
                              }}
                            >
                              {drop.label}
                            </NavLink>
                          </li>
                        ))} */}
                        {NavVal.dropdown.map((drop, idx) => {
                          const dynamicPath = `${NavVal.path}/${drop.label
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")}`;

                          return (
                            <li key={idx} className="my-2 ps-1">
                              <NavLink
                                to={dynamicPath}
                                className={({ isActive }) =>
                                  `text-gray-400 font-medium hover:ml-2 hover:text-orange-color transition-all duration-300 lg:text-[1rem] text-[.9rem] ${
                                    isActive ? "text-orange-color" : ""
                                  }`
                                }
                                onClick={() => {
                                  IsNavBtnActive?.(); 
                                  setOpenDropdownIndex(null);
                                }}
                              >
                                {drop.label}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isNavActive && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-[1px] md:hidden transition-opacity duration-300"
          onClick={() => setIsNavActive(false)}
        ></div>
      )}
    </>
  );
};
