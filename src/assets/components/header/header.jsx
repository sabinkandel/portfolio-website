import React from "react";
import "./header.css";
import CTA from "./cta";
import Me from "../../../assets/mes.png";
import HeaderSocials from "./HeaderSocials";
const header = () => {
  return (
    <header>
      <section id='#' className="container header__container">
        <h1> Sabin Kandel</h1>
        <h5 className="text-light">software developer</h5>
        <CTA />
        <div>
          {" "}
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={Me} />
        </div>
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </section>
    </header>
  );
};

export default header;
