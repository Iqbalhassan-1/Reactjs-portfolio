import React from "react";
import portfolio1 from "../../assets/portfolio5.png";
import portfolio2 from "../../assets/portfolio3.jpg";
import portfolio3 from "../../assets/portfolio1.jpg";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Ecowas Phase 1",
    github: "https://github.com/Emiqbal11/React-Crud-App",
    demo: "https://phenomenal-crepe-d8fd7f.netlify.app",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Crud App",
    github: "https://github.com/Emiqbal11/React-Crud-App",
    demo: "https://phenomenal-crepe-d8fd7f.netlify.app",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Crud App",
    github: "https://github.com/Emiqbal11/React-Crud-App",
    demo: "https://phenomenal-crepe-d8fd7f.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, github, demo, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} />
          </div>
          <h3>Create Crud App In ReactJs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Emiqbal11/React-Crud-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://phenomenal-crepe-d8fd7f.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} />
          </div>
          <h3>Create Crud App In ReactJs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Emiqbal11/React-Crud-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://phenomenal-crepe-d8fd7f.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio1} />
          </div>
          <h3>Create Crud App In ReactJs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Emiqbal11/React-Crud-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://phenomenal-crepe-d8fd7f.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      */}
      </div>
    </section>
  );
};

export default Portfolio;
