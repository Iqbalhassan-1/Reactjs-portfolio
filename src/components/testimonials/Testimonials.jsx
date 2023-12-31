import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quo minus sit odio enim voluptatibus cupiditate omnis, nemo ab saepe explicabo nihil, repellat nesciunt repellendus modi. Debitis similique eius aliquam!",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quo minus sit odio enim voluptatibus cupiditate omnis, nemo ab saepe explicabo nihil, repellat nesciunt repellendus modi. Debitis similique eius aliquam!",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quo minus sit odio enim voluptatibus cupiditate omnis, nemo ab saepe explicabo nihil, repellat nesciunt repellendus modi. Debitis similique eius aliquam!",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quo minus sit odio enim voluptatibus cupiditate omnis, nemo ab saepe explicabo nihil, repellat nesciunt repellendus modi. Debitis similique eius aliquam!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
