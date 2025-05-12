// import { useState } from "react";
import { AboutWeddingVideoData } from "../../../AboutData";
// import { FaCirclePlay } from "react-icons/fa6";
// import { motion } from "framer-motion";

export const AboutWeddingsVideo = () => {
  // const [IsPlayed, setIsPlayed] = useState(false);

  return (
    <>
      <div className="AboutWeddingsVideo-section bg-gray-100">
        <div className="AboutWeddingsVideo-cont max-w-screen-xl mx-auto p-10">
          {AboutWeddingVideoData &&
            AboutWeddingVideoData.map((VideoVal, Idx) => {
              return (
                <div key={Idx} className="flex flex-col gap-5">
                  <div className="heading text-center ">
                    <h2 className="text-orange-color font-semibold md:text-[2rem] text-[1.2rem]">
                      Tie The Knot At The Iconic Statue Of Unity
                    </h2>
                  </div>

                  <div className="video-section relative flex justify-center items-center">
                    {/* <motion.div
                      initial={{ scale: 1 }}
                      animate={{
                        scale: IsPlayed ? 1 : [1, 1.2, 1],
                        opacity: IsPlayed ? 0 : 1,
                      }}
                      transition={{
                        duration: IsPlayed ? 0.3 : 1.2,
                        repeat: IsPlayed ? 0 : Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute text-orange-color bg-white rounded-full p-3 cursor-pointer ${IsPlayed ? "hidden" : ""}`}
                      onClick={() => setIsPlayed(true)}
                    >
                      <FaCirclePlay size={60} />
                    </motion.div> */}

                    <video
                      src={VideoVal.VideoUrl}
                      autoPlay
                      loop
                      muted
                    ></video>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
