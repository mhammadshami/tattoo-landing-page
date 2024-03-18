import React from 'react';
// import footer data
import {footerData} from "../data";
// framer motion
import { motion } from 'framer-motion';
// import fade In
import { fadeInData } from "../variants";

// stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const Footer = () => {
  // destructure footer data
  const {about,links,newsletter,program } = footerData;

  return <footer className='section bg-dark'>
    <div className="container mx-auto">
    {/* grid */}
    <div className='text-white'>
      {/* about */}
      <div></div>
      {/* links */}
      <div></div>
      {/* about */}
      <div></div>
    </div>
    </div>
  </footer>
};

export default Footer;
