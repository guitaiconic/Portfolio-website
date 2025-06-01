import React from "react";
//import image
import Image1 from "../Img/portfolio/1.JPG";
import Image2 from "../Img/portfolio/2.JPG";
import Image3 from "../Img/portfolio/3.JPG";
import Image4 from "../Img/portfolio/4.JPG";

//import Link
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="section bg-slate-300">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div>{/* text */}</div>
          <div className="flex flex-col lg:items-start">
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
          </div>
          <div>{/* Images grid */}</div>
          <div className="grid grid-cols-2 lg:gap-2  ">
            {/* Image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
