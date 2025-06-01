import React from "react";
//import images
import IniImg from "../Img/home/Ini.JPG";

//Import Link
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section bg-slate-300">
      <div className="container mx-auto h-full relative ">
        {/* Text & img Wrapper */}
        <div className="flex flex-col justify-center h-screen">
          {/* Text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Model <br /> Dancer <br /> & Chreographer
            </h1>

            <Link to="/contact" className="btn  mb-[30px]">
              Hire me
            </Link>
          </div>
          {/* Image */}
          <div className="flex justify-end h-full">
            <div className="h-full relative lg:-right-40 overflow-hidden">
              <img className="h-full w-auto object-cover" src={IniImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
