'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialIndiv from './TestimonialIndiv';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="section_testimonials">
      <div className="testimonials_top-content">
        <div className="padding-global">
          <div className="container-large">
            <div className="testimonials_content-top">
              <h2>Testimonials</h2>
              <div className="testimonials_subheading-wrapper">
                <div className="text-color-lightgrey">
                  Battle-tested by the teams who define what agents can do.
                </div>
              </div>
              <div
                id="testimonials_arrows-wrapper"
                className="testimonials_arrows-wrapper"
                style={{ display: 'flex' }}
              >
                <button
                  ref={prevRef}
                  className="swiper_arrow is-prev_testimonials"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-c2e102f5e89d28d13"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6777f40eb50acf3b2d3538db_chevron-left.svg"
                    loading="lazy"
                    alt=""
                  />
                </button>
                <button
                  ref={nextRef}
                  className="swiper_arrow is-next_testimonials"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-c2e102f5e89d28d13"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6777f40ee00d25335b495c2b_chevron-right.svg"
                    loading="lazy"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <Swiper
            //   onSwiper={handleSwiperInit}
            navigation={{
              prevEl: `${prevRef.current}`,
              nextEl: `${nextRef.current}`,
            }}
            slidesPerView={3}
            onInit={(swiper) => {
              // In case the refs are not available at first, assign them on init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation]}
            //   speed={300}

            wrapperClass="testimonials_component-list w-dyn-items"
            className="testimonials_component-list_wrapper w-dyn-list"
            //   key={1}
          >
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
            <SwiperSlide className="testimonials_component-list_item-wrapper w-dyn-item ">
              <TestimonialIndiv />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
