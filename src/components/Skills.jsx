import React, { useState, useEffect } from "react";
// useInView hook
import { useInView } from "react-intersection-observer";
// react circular
import { CircularProgressbar } from "react-circular-progressbar";
// react circular styles
import "react-circular-progressbar/dist/styles.css";
// import motion
import { motion } from "framer-motion";
// import fade In
import { fadeIn } from "../variants";

const Skills = () => {
    // full body tattoo state 
    const [fullBody, setFullBody] = useState(0);
    // safely pricing state
    const [piercing, setPiercing] = useState(0);

  // destructure useInView hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if(inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (fullBody < 80) {
          setPiercing(piercing + 1)
        }
      }, 50)
    } else {
      setFullBody(0)
    }
  }, [inView, fullBody, piercing]);

  // circular progressbar styles
  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      stroke: "#111111",
      fontSize: "24px",
    },
  };
  return (
    <section ref={ref} className="section">
      <div className="container mx-auto">
        <div className="bg-pink-200 flex flex-col justify-between items-center gap-y-12">
          {/* circular item */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`}/>
            {/* text */}
            <div className="uppercase font-light tracking-[1.2px] text-center ">Full Body Tattoo</div>
          </div>
          {/* circular item */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar strokeWidth={1} value={piercing} styles={styles} text={`${piercing}%`}/>
            {/* text */}
            <div className="uppercase font-light tracking-[1.2px] text-center ">Safely Piercing</div>
          </div>
          {/* circular item */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`}/>
            {/* text */}
            <div className="uppercase font-light tracking-[1.2px] text-center ">Full Body Tattoo</div>
          </div>
          {/* circular item */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`}/>
            {/* text */}
            <div className="uppercase font-light tracking-[1.2px] text-center ">Full Body Tattoo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
