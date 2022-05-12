import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import NavBar from "./NavBar";

const About = () => {
  return (
    <div className="header">
      <NavBar />

      <ControlledCarousel />

      <div>
        <h1
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#4CAF50",
          }}
        >
          Prayer Locator
        </h1>
        <p style ={{  
          textIndent: "50px",
          textAlign : "justify",
          letterSpacing: "3px",}}
        >

          Hello, my name is Kawther and welcome to my Black CodHer project. I
          developed a prayer room locator app. Every time I have gone out for
          day trips I have found myself struggling to find somewhere to quiet to
          pray. I developed this app as a result to help people find the closest
          prayer room locations from where they are.
        </p>
      </div>
    </div>
  );
};

export default About;
