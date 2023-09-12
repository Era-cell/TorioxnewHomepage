import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
const Homepage = () => {
  return (
    <div>
      <div className="fixed-bar"></div>
      <Navbar />
      <Wrapper />
    </div>
  );
};

export default Homepage;
