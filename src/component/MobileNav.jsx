//import React, { useState } from "react";

//import icons
//
import { CgMenuRight } from "react-icons/cg";

//import Link
import { Link } from "react-router-dom";

//import motion
//import { motion } from "framer-motion";

export default function MobileNav() {
  return (
    <nav>
      {/* nav opens button */}
      <div className="text-3xl curor-pointer">
        <CgMenuRight />
      </div>

      {/* menu */}
      <div className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
        {/* icon */}
        <div>icon</div>
        {/* menu list */}
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
