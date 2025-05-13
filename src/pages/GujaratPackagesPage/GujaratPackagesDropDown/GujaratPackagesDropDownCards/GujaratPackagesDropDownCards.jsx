// import React from "react";
// import { useParams } from "react-router-dom";
// import { GujaratPackagesTourData } from "../../GujaratPackagesData";

// const GujaratPackagesDropDownCards = () => {
//   const { pathName } = useParams();
//   const tourData = GujaratPackagesTourData[pathName];

//   if (!tourData) {
//     return (
//       <div className="text-center text-red-500 text-xl p-10">
//         No package data found for this route.
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {tourData.CardList.map((card, idx) => (
//         <div
//           key={idx}
//           className="shadow-lg rounded-xl overflow-hidden border border-gray-200"
//         >
//           <img
//             src={card.CardImg}
//             alt={card.CardTitle}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{card.CardTitle}</h3>
//             <p className="text-gray-600">{card.CardPara}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GujaratPackagesDropDownCards;

import React from "react";
import { useParams } from "react-router-dom";
import { GujaratPackagesTourData } from "../../GujaratPackagesData";
import {GujaratPackagesGuideCard} from "../../../../components/GujaratPackagesGuideCard/GujaratPackagesGuideCard";

const GujaratPackagesDropDownCards = () => {
  const { pathName } = useParams();
  const tourData = GujaratPackagesTourData[pathName];

  if (!tourData) {
    return (
      <div className="text-center text-red-500 text-xl p-10">
        No package data found for this route.
      </div>
    );
  }

  const { CardList, TourGuide } = tourData;

  return (
    <>
      {/* Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {CardList.map((card, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-xl overflow-hidden border border-gray-200"
          >
            <img
              src={card.CardImg}
              alt={card.CardTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.CardTitle}</h3>
              <p className="text-gray-600">{card.CardPara}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tour Guide Card Section */}
      {TourGuide && (
        <div className="gujarat-packages-tour-guide-section">
          <div className="gujarat-packages-tour-guide-cont max-w-screen-xl mx-auto">
            <GujaratPackagesGuideCard
              Title={TourGuide.Title}
              Heading={TourGuide.Heading}
              Faq={TourGuide.Faq}
              Images={TourGuide.ImgUrl}
              TableData={TourGuide.TourTable}
              Optional={TourGuide.Optional}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GujaratPackagesDropDownCards;
