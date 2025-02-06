'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swipwecard from './Swipwecard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TeamMembers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mobileprev = useRef(null);
  const mobilenext = useRef(null);
  const swiperRef = useRef(null);

  const handleSwiperInit = (swiper) => {
    // swiperRef.current = swiperInstance;
    // Loop over each slide and remove its inline style
    swiper.slides.forEach((slide) => {
      slide.removeAttribute('style');
    });
  };
  return (
    <section id="team" class="section_home-teammembers">
      <div class="padding-global">
        <div class="container-large">
          <div class="teammembers_component-wrapper">
            <div className="teammembers_content-top">
              <h2>World-Class Team</h2>
              <div className="teammember_top-text">
                <div className="text-color-lightgrey">
                  We're a team of experts who have shipped auth systems, AI
                  products, and developer tools that people actually use.
                </div>
              </div>
              <div className="swiper_arrows-wrapper">
                <button ref={prevRef} className="swiper_arrow is-prev ">
                  <img
                    src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6777f40eb50acf3b2d3538db_chevron-left.svg"
                    loading="lazy"
                    alt=""
                  />
                </button>
                <button
                  ref={nextRef}
                  className="swiper_arrow is-next"
                  tabIndex={0}
                >
                  <img
                    src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6777f40ee00d25335b495c2b_chevron-right.svg"
                    loading="lazy"
                    alt=""
                  />
                </button>
              </div>
              <div className="teammembers_button-wrapper-mobile">
                <a
                  href="https://jobs.ashbyhq.com/arcadeai"
                  target="_blank"
                  className="button is-secondary w-inline-block"
                >
                  <div>See Open Positions</div>
                </a>
              </div>
            </div>
            <Swiper
              //   onSwiper={handleSwiperInit}
              navigation={{
                prevEl: `${prevRef.current}`,
                nextEl: `${nextRef.current}`,
              }}
              onInit={(swiper) => {
                // In case the refs are not available at first, assign them on init
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              modules={[Navigation]}
              //   speed={300}
              slidesPerView="auto"
              onSwiper={(swiper) => handleSwiperInit(swiper)}
              wrapperClass="teammembers_collection-list w-dyn-items"
              className="teammembers_collection-list_wrapper w-dyn-list"
              //   key={1}
            >
              {/* <div className="swiper-wrapper teammembers_collection-list w-dyn-items"> */}
              {/* <div className="swiper-wrapper teammembers_collection-list w-dyn-items"> */}
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide teammembers_collection-list_item w-dyn-item ">
                <Swipwecard />
              </SwiperSlide>
              {/* </div> */}
              {/* </div> */}
            </Swiper>
            <div className="teammembers_buttons-wrapper">
              <div>We are hiring!</div>
              <a
                href="https://jobs.ashbyhq.com/arcadeai"
                target="_blank"
                className="button is-secondary w-inline-block"
              >
                <div>See Open Positions</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
