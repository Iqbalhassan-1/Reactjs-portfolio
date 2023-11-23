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
            As a Front-end React Developer, I'm dedicated to crafting dynamic
            and responsive interfaces using React.js. Leveraging my solid
            front-end foundation, I collaborate with senior peers to integrate
            features, emphasizing modular and maintainable code. My proactive
            stance includes active participation in team discussions, code
            reviews, and staying current with industry standards. I aspire to
            contribute significantly to creating seamless and engaging web apps,
            continually honing my skills in React development, which includes
            effective management of Redux API calls.s.
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
