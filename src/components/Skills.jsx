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
      })
    }
  }, [inView, fullBody]);

  // full body tattoo state 
  const [fullBody, setFullBody] = useState(0);

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
    <section ref={ref} className="section bg-pink-200">
      <div className="container mx-auto">
        <div>
          <div>
            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
