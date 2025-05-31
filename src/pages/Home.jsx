import React from "react";
//import images
import IniImg from "../Img/home/Ini.JPG";

//Import Link
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section bg-slate-300">
      <div className="container mx-auto h-full relative">
        {/* Text & img Wrapper */}
        <div className="flex flex-col justify-center">
          {/* Text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Model <br /> & Dance Chreographer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Blackpool, UK
            </p>
            <Link to="/contact" className="btn rounded-full mb-[30px]">
              Hire me
            </Link>
          </div>
          {/* Image */}
          <div>
            <div>
              <img src={IniImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
