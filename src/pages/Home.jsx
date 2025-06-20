import React from "react";
//import images
import IniImg from "../Img/home/Ini.JPG";

//Import Link
import { Link } from "react-router-dom";

//import motion
import { motion } from "framer-motion";

//import transition
import { transition1 } from "../transitions";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-slate-300"
    >
      <div className="container mx-auto h-full relative ">
        {/* Text & img Wrapper */}
        <div className="flex flex-col justify-center h-screen">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Model <br /> Dancer <br /> & Chreographer
            </h1>

            <Link to="/contact" className="btn  mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          {/* Image */}
          <div className="flex justify-end h-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="h-full relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                className="h-full w-auto object-cover"
                src={IniImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
