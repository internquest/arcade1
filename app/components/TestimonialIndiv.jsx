import React from 'react';

const TestimonialIndiv = () => {
  return (
    <div className="testimonials_component-list_item">
      <div className="testimonial_content">
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/6773fd00b9e3a74fd53afcf2/678f26ae4bdcb1d24054b613_white%20Langchain%20Logo.avif"
          alt=""
          className="testimonial_logo-img"
        />
        <div className="heading-style-h5">
          By using Arcade, we're able to authenticate users' Twitter/LinkedIn
          accounts without worrying about refresh tokens, broken auth, or any of
          the other hassle that comes with setting up auth connections.
        </div>
      </div>
      <div className="testimonial_author-wrapper">
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/6773fd00b9e3a74fd53afcf2/678eaae9430ea152ba0c50d8_1692938031132.avif"
          alt=""
          className="testimonial_author-img"
        />
        <div className="testimonial_author-details">
          <div>Brace Sproul</div>
          <div className="testimonial_label">AI/ML Engineer, LangChain</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialIndiv;
