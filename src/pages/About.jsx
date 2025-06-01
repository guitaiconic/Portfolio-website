import React from "react";

//import images
import AboutImg from "../Img/about/about.JPG";

//import Link
import { Link } from "react-router-dom";

//import motion
import { motion } from "framer-motion";

//import transition
import { transition1 } from "../transitions";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-slate-300"
    >
      <div className="container mx-auto h-full relative ">
        {/* Text & img Wrapper  */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              <b>Nesciunt sit blanditiis</b> necessitatibus eius. Enim dicta
              doloribus, distinctio ullam illum, consectetur perferendis sed
              nihil nostrum, soluta repellat ex veritatis sequi ad.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              consequuntur.
            </p>

            <Link to={"/portfolio"} className="btn mb-[30px]">
              View my Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
