import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Intuitive UI/UX design tailored to your needs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-centered approach for seamless experiences.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expert in wireframing and interactive prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Harmonizing usability and visual aesthetics</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web and mobile interface design expertise.</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX Design  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Custom ReactJS Web Development: Tailored web application
                development using ReactJS for engaging user interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive Web Design: Creating websites that seamlessly adapt
                to various screen sizes and devices..
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Reusable Component Development: Building modular and reusable UI
                components for efficient development and code maintenance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Redux State Management: Implementing Redux for centralized state
                management in React applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                React Router Integration: Enabling smooth navigation and routing
                within the application for a seamless user experience.
              </p>
            </li>
          </ul>
        </article>

        {/* End Of WebDevelopment  */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Developing unique and creative design concepts that align with
                your app's purpose and target audience.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation  */}
      </div>
    </section>
  );
};

export default Services;
