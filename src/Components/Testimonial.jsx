import React from "react";
import ProfilePic from "./friends.png";
import { AiFillStar } from "react-icons/ai";
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          A Revolutionary Approach To Education
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "Together, as three B.Tech students, we strive to enrich the journey of youth,
          making it brighter, bolder, and better than ever before."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ankur Mohit Pranit</h2>
      </div>
    </div>
  );
};

export default Testimonial;
