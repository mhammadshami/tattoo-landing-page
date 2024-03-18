import React, { useState } from "react";
// import data
import { interviewData } from "../data";
// import modal video
import ModalVideo from "react-modal-video";
// modal video css
import "../modalVideo.scss";
// import motion
import { motion } from "framer-motion";
// import fade in
import { fadeIn } from "../variants";

const Interview = () => {
  // destructure interview data
  const { btnText, title, btnIcon } = interviewData;
  // open state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            {/* title */}
            <h3 className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] mb-8">
              {title}
            </h3>
            {/* play btn */}
            <div className="flex text-white items-center ">
              {/* border */}
              <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                {/* inner */}
                <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                  <div className="pl-1">{btnIcon}</div>
                </div>
              </div>
              {/* btn text */}
              <div className="font-primary uppercase">{btnText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
