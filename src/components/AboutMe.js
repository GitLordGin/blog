import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interests from "./Interests";

function AboutMe() {
    return(
        <div className="AboutMe">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default AboutMe;