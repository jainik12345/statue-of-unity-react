// import { useParams } from "react-router-dom"

// export const GujaratPackagesDropDown = () => {

//     const { tmp } = useParams();

//     const tmp2  = tmp.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

//   return (

//     <h1>Gujarat Packages {tmp2}</h1>

//   )
// }

import { useParams } from "react-router-dom";
import GujaratPackagesDropDownBanner from "./GujaratPackagesDropDownBanner/GujaratPackagesDropDownBanner";
import GujaratPackagesDropDownCards from "./GujaratPackagesDropDownCards/GujaratPackagesDropDownCards";
export const GujaratPackagesDropDown = () => {
  const { pathName } = useParams();

  if (!pathName) {
    return <h1 className="text-xl text-red-600">Invalid Gujarat Package</h1>;
  }

  const formattedTitle = pathName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <h1 className="text-2xl text-center font-bold text-orange-600">
        Gujarat Packages - {formattedTitle}
      </h1>
      <GujaratPackagesDropDownBanner/>
      <GujaratPackagesDropDownCards/>
    </>
  );
};
