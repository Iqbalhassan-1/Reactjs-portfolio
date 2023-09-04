import React from "react";
import Me from "../../assets/RR.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            I am an experienced front-end developer with expertise in ReactJS,
            delivering responsive and interactive user interfaces. With over a
            year of experience, I have honed my skills in building exceptional
            user experiences. My passion lies in creating visually appealing and
            highly functional web applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
