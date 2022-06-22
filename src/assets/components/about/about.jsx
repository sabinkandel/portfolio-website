import React from "react";
import Me from "../../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Explore More</h5>

      <h2>About Me</h2>
      <br />
      <br />
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>Geek inside me</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>Geek inside me</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
            It is our observation that every time we get into trouble it is due
            to not having been lazy enough. Unhappily, we were born with a
            certain fund of energy. We have been hustling about for a number of
            years now, and it doesn't seem to get us anything but tribulation.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Hangout
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
