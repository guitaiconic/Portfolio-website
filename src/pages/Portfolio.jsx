import React from "react";
//import image
import Image1 from "../Img/portfolio/1.JPG";
import Image2 from "../Img/portfolio/2.JPG";
import Image3 from "../Img/portfolio/3.JPG";
import Image4 from "../Img/portfolio/4.JPG";

//import Link
import { Link } from "react-router-dom";

//import motion
import { motion } from "framer-motion";

//import transition
import { transition1 } from "../transitions";

export default function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-slate-300"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div>{/* text */}</div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <b>Nesciunt sit blanditiis</b> necessitatibus eius. Enim dicta
              doloribus, distinctio ullam illum, consectetur perferendis sed
              nihil nostrum, soluta repellat ex veritatis sequi ad.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              consequuntur.
            </p>
            <Link to="/contact" className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          <div>{/* Video grid */}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Video 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.youtube.com/embed/W41VAovhNPQ"
                  title="Dance Performance 1"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <p className="mt-4 font-medium text-gray-700">
                🔊 Hip-hop fusion video shoot
              </p>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.youtube.com/embed/bhJNfGh-LQU"
                  title="Dance Performance 2"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <p className="mt-4 font-medium text-gray-700">
                ✨ Short Movie clip
              </p>
            </div>

            {/* Video 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.youtube.com/embed/-wg49wRwCUg"
                  title="Dance Performance 3"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <p className="mt-4 font-medium text-gray-700">
                🔥 Afro Fusion dance class
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
