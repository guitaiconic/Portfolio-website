//import components
import Header from "./component/Header";
import AnimeRoutes from "./component/AnimeRoutes";

//import router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import motion
//import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimeRoutes />
      </Router>
    </>
  );
}
