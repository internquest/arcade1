'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const Desccard4 = ({ codesc, setCodesc }) => {
  const ref = useRef(null);
  const [viewed, setViewed] = useState(false);
  const isInView = useInView(ref, { margin: '0% 0px -45% 0px' });
  //   console.log(isInView);

  useEffect(() => {
    if (codesc === 3) {
      setCodesc(4);
    }
    if (codesc === 4) {
      setCodesc(3);
    }

    // if (isInView) {
    //   setViewed(true);
    //   setCodesc(4);
    // }
    // if (!isInView) {
    //   if (viewed) {
    //     setCodesc(3);
    //   }
    // }
  }, [isInView]);

  return (
    <div
      ref={ref}
      card-box={4}
      className="home_funcionalities-block is-4 duration-300"
      style={{
        opacity: isInView ? 1 : 0.4,
        backgroundColor: isInView ? 'rgb(7, 10, 32)' : 'rgb(0,0,0,0)',
      }}
    >
      <div className="home_funcionalities-block_child">
        <div
          data-w-id="602b2043-7af6-3b31-520a-6f13349de155"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6787f7ab893d10a0394dda75_Tool%20Evals%20NO%20BG.json"
          data-loop={1}
          data-direction={1}
          data-autoplay={1}
          data-is-ix2-target={0}
          data-renderer="svg"
          data-default-duration={0}
          data-duration="20.983333333333334"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 528 364"
            width={528}
            height={364}
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '100%',
              height: '100%',
              transform: 'translate3d(0px, 0px, 0px)',
              contentVisibility: 'visible',
            }}
          >
            <defs>
              <clipPath id="__lottie_element_2537">
                <rect width={528} height={364} x={0} y={0} />
              </clipPath>
              <clipPath id="__lottie_element_2542">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <clipPath id="__lottie_element_2547">
                <path d="M0,0 L306,0 L306,326 L0,326z" />
              </clipPath>
              <clipPath id="__lottie_element_2552">
                <path d="M0,0 L521,0 L521,429 L0,429z" />
              </clipPath>
              <g id="__lottie_element_2555">
                <g
                  clipPath="url(#__lottie_element_2556)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2687)"
                    transform="matrix(1,0,0,1,47,72)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(28,33,53)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M217,213.2100067138672 C217,213.2100067138672 217,292 217,292 M217.69000244140625,67.75 C217.69000244140625,67.75 37,67.75 37,67.75 C17.1200008392334,67.75 1,83.87000274658203 1,103.75 C1,103.75 1,177.2100067138672 1,177.2100067138672 C1,197.10000610351562 17.1200008392334,213.2100067138672 37,213.2100067138672 C37,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,67.75 C217.69000244140625,67.75 397,67.75 397,67.75 C416.8800048828125,67.75 433,83.87000274658203 433,103.75 C433,103.75 433,177.2100067138672 433,177.2100067138672 C433,197.10000610351562 416.8800048828125,213.2100067138672 397,213.2100067138672 C397,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,0 C217.69000244140625,0 217.69000244140625,67.75 217.69000244140625,67.75"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M434,0 C434,0 0,0 0,0 C0,0 0,292 0,292 C0,292 434,292 434,292 C434,292 434,0 434,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_2556">
                <path d="M0,0 L481,0 L481,364 L0,364z" />
              </clipPath>
              <clipPath id="__lottie_element_2561">
                <path d="M0,0 L82,0 L82,82 L0,82z" />
              </clipPath>
              <clipPath id="__lottie_element_2566">
                <path d="M0,0 L82,0 L82,82 L0,82z" />
              </clipPath>
              <clipPath id="__lottie_element_2571">
                <path d="M0,0 L429,0 L429,170 L0,170z" />
              </clipPath>
              <clipPath id="__lottie_element_2576">
                <path d="M0,0 L509,0 L509,231 L0,231z" />
              </clipPath>
              <linearGradient
                id="__lottie_element_2583"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1={4}
                y1={0}
                x2={4}
                y2={38}
              >
                <stop offset="0%" stopColor="rgb(4,7,25)" stopOpacity={0} />
                <stop offset="100%" stopColor="rgb(4,7,25)" stopOpacity={1} />
              </linearGradient>
              <clipPath id="__lottie_element_2586">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <clipPath id="__lottie_element_2591">
                <path d="M0,0 L391,0 L391,291 L0,291z" />
              </clipPath>
              <clipPath id="__lottie_element_2597">
                <path d="M0,0 L333,0 L333,229 L0,229z" />
              </clipPath>
              <clipPath id="__lottie_element_2602">
                <path d="M0,0 L306,0 L306,229 L0,229z" />
              </clipPath>
              <clipPath id="__lottie_element_2607">
                <path d="M0,0 L306,0 L306,229 L0,229z" />
              </clipPath>
              <clipPath id="__lottie_element_2612">
                <path d="M0,0 L262,0 L262,162 L0,162z" />
              </clipPath>
              <clipPath id="__lottie_element_2618">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <clipPath id="__lottie_element_2623">
                <path d="M0,0 L82,0 L82,82 L0,82z" />
              </clipPath>
              <clipPath id="__lottie_element_2628">
                <path d="M0,0 L82,0 L82,82 L0,82z" />
              </clipPath>
              <clipPath id="__lottie_element_2633">
                <path d="M0,0 L429,0 L429,170 L0,170z" />
              </clipPath>
              <linearGradient
                id="__lottie_element_2640"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="3.5"
                y1={0}
                x2="3.5"
                y2={38}
              >
                <stop offset="0%" stopColor="rgb(4,7,25)" stopOpacity={0} />
                <stop offset="100%" stopColor="rgb(4,7,25)" stopOpacity={1} />
              </linearGradient>
              <clipPath id="__lottie_element_2643">
                <path d="M0,0 L267,0 L267,162 L0,162z" />
              </clipPath>
              <mask id="__lottie_element_2555_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2555" />
              </mask>
              <clipPath id="__lottie_element_2647">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <clipPath id="__lottie_element_2657">
                <path d="M0,0 L306,0 L306,326 L0,326z" />
              </clipPath>
              <g id="__lottie_element_2660">
                <g
                  clipPath="url(#__lottie_element_2661)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2671)"
                    transform="matrix(1,0,0,1,47,72)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(28,33,53)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M217,213.2100067138672 C217,213.2100067138672 217,292 217,292 M217.69000244140625,67.75 C217.69000244140625,67.75 37,67.75 37,67.75 C17.1200008392334,67.75 1,83.87000274658203 1,103.75 C1,103.75 1,177.2100067138672 1,177.2100067138672 C1,197.10000610351562 17.1200008392334,213.2100067138672 37,213.2100067138672 C37,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,67.75 C217.69000244140625,67.75 397,67.75 397,67.75 C416.8800048828125,67.75 433,83.87000274658203 433,103.75 C433,103.75 433,177.2100067138672 433,177.2100067138672 C433,197.10000610351562 416.8800048828125,213.2100067138672 397,213.2100067138672 C397,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,0 C217.69000244140625,0 217.69000244140625,67.75 217.69000244140625,67.75"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M434,0 C434,0 0,0 0,0 C0,0 0,292 0,292 C0,292 434,292 434,292 C434,292 434,0 434,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_2661">
                <path d="M0,0 L481,0 L481,364 L0,364z" />
              </clipPath>
              <mask id="__lottie_element_2660_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2660" />
              </mask>
              <filter
                id="__lottie_element_2668"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  result="filter_result_0"
                  stdDeviation="6 6"
                  edgeMode="duplicate"
                />
              </filter>
              <clipPath id="__lottie_element_2671">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <filter
                id="__lottie_element_2684"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  result="filter_result_0"
                  stdDeviation="6 6"
                  edgeMode="duplicate"
                />
              </filter>
              <clipPath id="__lottie_element_2687">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <clipPath id="__lottie_element_2705">
                <path d="M0,0 L42,0 L42,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_2723">
                <path d="M0,0 L42.4456,0 L42.4456,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_2728">
                <path d="M0,0 L10,0 L10,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_2733">
                <path d="M0,0 L11,0 L11,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_2738">
                <path d="M0,0 L26,0 L26,23 L0,23z" />
              </clipPath>
              <clipPath id="__lottie_element_2743">
                <path d="M0,0 L11,0 L11,16 L0,16z" />
              </clipPath>
              <clipPath id="__lottie_element_2748">
                <path d="M0,0 L10,0 L10,16 L0,16z" />
              </clipPath>
              <clipPath id="__lottie_element_2787">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_2792">
                <path d="M0,0 L342,0 L342,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_2794"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={12}
                />
                <feOffset
                  dx="7.347880794884119e-16"
                  dy={12}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_2797">
                <path d="M0,0 L28,0 L28,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_2810">
                <path d="M0,0 L222,0 L222,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2821">
                <path d="M0,0 L448,0 L448,170 L0,170z" />
              </clipPath>
              <clipPath id="__lottie_element_2830">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_2835">
                <path d="M0,0 L361,0 L361,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_2837"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={6}
                />
                <feOffset
                  dx="3.6739403974420594e-16"
                  dy={6}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_2840">
                <path d="M0,0 L28,0 L28,28 L0,28z" />
              </clipPath>
              <clipPath id="__lottie_element_2853">
                <path d="M0,0 L241,0 L241,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2863">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <clipPath id="__lottie_element_2867">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <g id="__lottie_element_2870">
                <g
                  clipPath="url(#__lottie_element_2871)"
                  transform="matrix(1,0,0,1,0,-146)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    style={{ display: 'block' }}
                    transform="matrix(1,0,0,1,0,146)"
                    opacity={1}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2890)"
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,146)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_2871">
                <path d="M0,0 L317,0 L317,583 L0,583z" />
              </clipPath>
              <mask id="__lottie_element_2870_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2870" />
              </mask>
              <clipPath id="__lottie_element_2876">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <clipPath id="__lottie_element_2890">
                <path d="M0,0 L317,0 L317,437 L0,437z" />
              </clipPath>
              <clipPath id="__lottie_element_2899">
                <path d="M0,0 L434,0 L434,403 L0,403z" />
              </clipPath>
              <g id="__lottie_element_2902">
                <g
                  clipPath="url(#__lottie_element_2903)"
                  transform="matrix(1,0,0,1,74,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    mask="url(#__lottie_element_2915_1)"
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_2912)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                    >
                      <g
                        clipPath="url(#__lottie_element_2921)"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g
                          transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <g
                              opacity={1}
                              transform="matrix(0.75,0,0,0.75,0,0)"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity={0}
                                strokeMiterlimit={4}
                                stroke="rgb(28,33,53)"
                                strokeOpacity={1}
                                strokeWidth={2}
                                d=" M156,0 C156,0 156,4 156,4 C156,19.459999084472656 143.4600067138672,32 128,32 C128,32 29,32 29,32 C13.539999961853027,32 1,44.540000915527344 1,60 C1,60 1,70 1,70 C1,85.45999908447266 13.539999961853027,98 29,98 C29,98 290.5,98 290.5,98 C304.5799865722656,98 316,109.41999816894531 316,123.5 C316,137.5800018310547 304.5799865722656,149 290.5,149 C290.5,149 184,149 184,149 C168.5399932861328,149 156,161.5399932861328 156,177 C156,177 156,291 156,291"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={0}
                            d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_2903">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <mask id="__lottie_element_2902_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2902" />
              </mask>
              <filter
                id="__lottie_element_2910"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  result="filter_result_0"
                  stdDeviation="6 6"
                  edgeMode="duplicate"
                />
              </filter>
              <clipPath id="__lottie_element_2912">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <g id="__lottie_element_2915">
                <g
                  clipPath="url(#__lottie_element_2916)"
                  transform="matrix(1,0,0,1,0,-146)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    style={{ display: 'block' }}
                    transform="matrix(1,0,0,1,0,146)"
                    opacity={1}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2935)"
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,146)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_2916">
                <path d="M0,0 L317,0 L317,583 L0,583z" />
              </clipPath>
              <mask id="__lottie_element_2915_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2915" />
              </mask>
              <clipPath id="__lottie_element_2921">
                <path d="M0,0 L317,0 L317,291 L0,291z" />
              </clipPath>
              <clipPath id="__lottie_element_2935">
                <path d="M0,0 L317,0 L317,437 L0,437z" />
              </clipPath>
              <clipPath id="__lottie_element_2945">
                <path d="M0,0 L257,0 L257,159 L0,159z" />
              </clipPath>
              <clipPath id="__lottie_element_2957">
                <path d="M0,0 L232,0 L232,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_2959"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={6}
                />
                <feOffset
                  dx="3.6739403974420594e-16"
                  dy={6}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_2964">
                <path d="M0,0 L112,0 L112,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2975">
                <path d="M0,0 L232,0 L232,159 L0,159z" />
              </clipPath>
              <clipPath id="__lottie_element_2987">
                <path d="M0,0 L207,0 L207,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_2989"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={6}
                />
                <feOffset
                  dx="3.6739403974420594e-16"
                  dy={6}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_2994">
                <path d="M0,0 L87,0 L87,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_3005">
                <path d="M0,0 L232,0 L232,159 L0,159z" />
              </clipPath>
              <clipPath id="__lottie_element_3017">
                <path d="M0,0 L207,0 L207,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_3019"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={6}
                />
                <feOffset
                  dx="3.6739403974420594e-16"
                  dy={6}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_3024">
                <path d="M0,0 L87,0 L87,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_3039">
                <path d="M0,0 L211,0 L211,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_3041"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={6}
                />
                <feOffset
                  dx="3.6739403974420594e-16"
                  dy={6}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_3043">
                <path d="M0,0 L8,0 L8,89 L0,89z" />
              </clipPath>
              <clipPath id="__lottie_element_3047">
                <path d="M0,0 L8,0 L8,89 L0,89z" />
              </clipPath>
              <clipPath id="__lottie_element_3051">
                <path d="M0,0 L6,0 L6,74 L0,74z" />
              </clipPath>
              <clipPath id="__lottie_element_3056">
                <path d="M0,0 L34,0 L34,34 L0,34z" />
              </clipPath>
              <clipPath id="__lottie_element_3061">
                <path d="M0,0 L34,0 L34,34 L0,34z" />
              </clipPath>
              <clipPath id="__lottie_element_3066">
                <path d="M0,0 L30,0 L30,31 L0,31z" />
              </clipPath>
              <clipPath id="__lottie_element_3073">
                <path d="M0,0 L91,0 L91,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_3084">
                <path d="M0,0 L6,0 L6,74 L0,74z" />
              </clipPath>
              <g id="__lottie_element_3087">
                <g
                  clipPath="url(#__lottie_element_3088)"
                  transform="matrix(1,0,0,1,0,-15)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,2,28)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M5.300000190734863,-12.799999237060547 C5.300000190734863,-12.799999237060547 -1.5000001192092896,-12.799999237060547 -1.5000001192092896,-12.799999237060547 C-1.5000001192092896,-12.799999237060547 -1.5000001192092896,75.52000427246094 -1.5000001192092896,75.52000427246094 C-1.5000001192092896,75.52000427246094 5.300000190734863,75.52000427246094 5.300000190734863,75.52000427246094 C5.300000190734863,75.52000427246094 5.300000190734863,-12.799999237060547 5.300000190734863,-12.799999237060547z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3123)"
                    transform="matrix(1,0,0,1,2,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,28)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M3,0 C3,0 0,0 0,0 C0,0 0,0 0,0 C0,0 3,0 3,0 C3,0 3,0 3,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_3088">
                <path d="M0,0 L8,0 L8,112 L0,112z" />
              </clipPath>
              <mask id="__lottie_element_3087_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_3087" />
              </mask>
              <clipPath id="__lottie_element_3093">
                <path d="M0,0 L5,0 L5,68 L0,68z" />
              </clipPath>
              <g id="__lottie_element_3096">
                <g
                  clipPath="url(#__lottie_element_3097)"
                  transform="matrix(1,0,0,1,0,-22)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    style={{ display: 'block' }}
                    transform="matrix(1,0,0,1,1,28)"
                    opacity={1}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M4.300000190734863,-6 C4.300000190734863,-6 -1.0000001192092896,-6 -1.0000001192092896,-6 C-1.0000001192092896,-6 -1.0000001192092896,67.5999984741211 -1.0000001192092896,67.5999984741211 C-1.0000001192092896,67.5999984741211 4.300000190734863,67.5999984741211 4.300000190734863,67.5999984741211 C4.300000190734863,67.5999984741211 4.300000190734863,-6 4.300000190734863,-6z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3110)"
                    transform="matrix(1,0,0,1,1,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,28)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M3,0 C3,0 0,0 0,0 C0,0 0,56 0,56 C0,56 3,56 3,56 C3,56 3,0 3,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_3097">
                <path d="M0,0 L6,0 L6,112 L0,112z" />
              </clipPath>
              <mask id="__lottie_element_3096_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_3096" />
              </mask>
              <clipPath id="__lottie_element_3110">
                <path d="M0,0 L3,0 L3,84 L0,84z" />
              </clipPath>
              <clipPath id="__lottie_element_3123">
                <path d="M0,0 L3,0 L3,84 L0,84z" />
              </clipPath>
              <clipPath id="__lottie_element_3133">
                <path d="M0,0 L6,0 L6,74 L0,74z" />
              </clipPath>
              <g id="__lottie_element_3136">
                <g
                  clipPath="url(#__lottie_element_3137)"
                  transform="matrix(1,0,0,1,0,-15)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,2,28)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M5.300000190734863,-12.799999237060547 C5.300000190734863,-12.799999237060547 -1.5000001192092896,-12.799999237060547 -1.5000001192092896,-12.799999237060547 C-1.5000001192092896,-12.799999237060547 -1.5000001192092896,75.52000427246094 -1.5000001192092896,75.52000427246094 C-1.5000001192092896,75.52000427246094 5.300000190734863,75.52000427246094 5.300000190734863,75.52000427246094 C5.300000190734863,75.52000427246094 5.300000190734863,-12.799999237060547 5.300000190734863,-12.799999237060547z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3172)"
                    transform="matrix(1,0,0,1,2,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,84)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M3,0 C3,0 0,0 0,0 C0,0 0,0 0,0 C0,0 3,0 3,0 C3,0 3,0 3,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_3137">
                <path d="M0,0 L8,0 L8,168 L0,168z" />
              </clipPath>
              <mask id="__lottie_element_3136_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_3136" />
              </mask>
              <clipPath id="__lottie_element_3142">
                <path d="M0,0 L5,0 L5,68 L0,68z" />
              </clipPath>
              <g id="__lottie_element_3145">
                <g
                  clipPath="url(#__lottie_element_3146)"
                  transform="matrix(1,0,0,1,0,-22)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    style={{ display: 'block' }}
                    transform="matrix(1,0,0,1,1,28)"
                    opacity={1}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M4.300000190734863,-6 C4.300000190734863,-6 -1.0000001192092896,-6 -1.0000001192092896,-6 C-1.0000001192092896,-6 -1.0000001192092896,67.5999984741211 -1.0000001192092896,67.5999984741211 C-1.0000001192092896,67.5999984741211 4.300000190734863,67.5999984741211 4.300000190734863,67.5999984741211 C4.300000190734863,67.5999984741211 4.300000190734863,-6 4.300000190734863,-6z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3159)"
                    transform="matrix(1,0,0,1,1,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,28)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M3,0 C3,0 0,0 0,0 C0,0 0,56 0,56 C0,56 3,56 3,56 C3,56 3,0 3,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_3146">
                <path d="M0,0 L6,0 L6,112 L0,112z" />
              </clipPath>
              <mask id="__lottie_element_3145_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_3145" />
              </mask>
              <clipPath id="__lottie_element_3159">
                <path d="M0,0 L3,0 L3,84 L0,84z" />
              </clipPath>
              <clipPath id="__lottie_element_3172">
                <path d="M0,0 L3,0 L3,140 L0,140z" />
              </clipPath>
              <clipPath id="__lottie_element_3182">
                <path d="M0,0 L5,0 L5,68 L0,68z" />
              </clipPath>
              <g id="__lottie_element_3185">
                <g
                  clipPath="url(#__lottie_element_3186)"
                  transform="matrix(1,0,0,1,0,-22)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    style={{ display: 'none' }}
                    transform="matrix(1,0,0,1,1,28)"
                    opacity={1}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d=" M4.300000190734863,-6 C4.300000190734863,-6 -1.0000001192092896,-6 -1.0000001192092896,-6 C-1.0000001192092896,-6 -1.0000001192092896,67.5999984741211 -1.0000001192092896,67.5999984741211 C-1.0000001192092896,67.5999984741211 4.300000190734863,67.5999984741211 4.300000190734863,67.5999984741211 C4.300000190734863,67.5999984741211 4.300000190734863,-6 4.300000190734863,-6z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3199)"
                    transform="matrix(1,0,0,1,1,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,28)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={1}
                        d=" M3,0 C3,0 0,0 0,0 C0,0 0,0 0,0 C0,0 3,0 3,0 C3,0 3,0 3,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <clipPath id="__lottie_element_3186">
                <path d="M0,0 L6,0 L6,112 L0,112z" />
              </clipPath>
              <mask id="__lottie_element_3185_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_3185" />
              </mask>
              <clipPath id="__lottie_element_3199">
                <path d="M0,0 L3,0 L3,84 L0,84z" />
              </clipPath>
              <clipPath id="__lottie_element_3209">
                <path d="M0,0 L30,0 L30,31 L0,31z" />
              </clipPath>
              <clipPath id="__lottie_element_3213">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3218">
                <path d="M0,0 L28,0 L28,28 L0,28z" />
              </clipPath>
              <clipPath id="__lottie_element_3229">
                <path d="M0,0 L30,0 L30,31 L0,31z" />
              </clipPath>
              <clipPath id="__lottie_element_3233">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3238">
                <path d="M0,0 L28,0 L28,28 L0,28z" />
              </clipPath>
              <clipPath id="__lottie_element_3248">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3253">
                <path d="M0,0 L28,0 L28,28 L0,28z" />
              </clipPath>
              <clipPath id="__lottie_element_3263">
                <path d="M0,0 L434,0 L434,292 L0,292z" />
              </clipPath>
              <clipPath id="__lottie_element_3281">
                <path d="M0,0 L42,0 L42,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3299">
                <path d="M0,0 L42.4456,0 L42.4456,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3304">
                <path d="M0,0 L10,0 L10,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_3309">
                <path d="M0,0 L11,0 L11,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_3314">
                <path d="M0,0 L26,0 L26,23 L0,23z" />
              </clipPath>
              <clipPath id="__lottie_element_3319">
                <path d="M0,0 L11,0 L11,16 L0,16z" />
              </clipPath>
              <clipPath id="__lottie_element_3324">
                <path d="M0,0 L10,0 L10,16 L0,16z" />
              </clipPath>
              <clipPath id="__lottie_element_3363">
                <path d="M0,0 L32,0 L32,32 L0,32z" />
              </clipPath>
              <clipPath id="__lottie_element_3368">
                <path d="M0,0 L342,0 L342,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_3370"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={12}
                />
                <feOffset
                  dx="7.347880794884119e-16"
                  dy={12}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_3373">
                <path d="M0,0 L28,0 L28,24 L0,24z" />
              </clipPath>
              <clipPath id="__lottie_element_3386">
                <path d="M0,0 L222,0 L222,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_3401">
                <path d="M0,0 L211,0 L211,146 L0,146z" />
              </clipPath>
              <filter
                id="__lottie_element_3403"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={12}
                />
                <feOffset
                  dx="7.347880794884119e-16"
                  dy={12}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#000000"
                  floodOpacity="0.050980392156862744"
                  result="filter_result_0_drop_shadow_3"
                />
                <feComposite
                  in="filter_result_0_drop_shadow_3"
                  in2="filter_result_0_drop_shadow_2"
                  operator="in"
                  result="filter_result_0_drop_shadow_4"
                />
                <feMerge result="filter_result_0">
                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="__lottie_element_3408">
                <path d="M0,0 L91,0 L91,26 L0,26z" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_2537)">
              <g
                clipPath="url(#__lottie_element_2542)"
                transform="matrix(1,0,0,1,47,72)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2647)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(28,33,53)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M217,213.2100067138672 C217,213.2100067138672 217,292 217,292 M217.69000244140625,67.75 C217.69000244140625,67.75 37,67.75 37,67.75 C17.1200008392334,67.75 1,83.87000274658203 1,103.75 C1,103.75 1,177.2100067138672 1,177.2100067138672 C1,197.10000610351562 17.1200008392334,213.2100067138672 37,213.2100067138672 C37,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,67.75 C217.69000244140625,67.75 397,67.75 397,67.75 C416.8800048828125,67.75 433,83.87000274658203 433,103.75 C433,103.75 433,177.2100067138672 433,177.2100067138672 C433,197.10000610351562 416.8800048828125,213.2100067138672 397,213.2100067138672 C397,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,0 C217.69000244140625,0 217.69000244140625,67.75 217.69000244140625,67.75"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M434,0 C434,0 0,0 0,0 C0,0 0,292 0,292 C0,292 434,292 434,292 C434,292 434,0 434,0z"
                    />
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2547)"
                transform="matrix(1,0,0,1,0,0)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  mask="url(#__lottie_element_2660_1)"
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2657)"
                    transform="matrix(1,0,0,1,-13,-13)"
                    opacity={1}
                  >
                    <g
                      filter="url(#__lottie_element_2668)"
                      transform="matrix(1,0,0,1,263,279)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(100,107,141)"
                          fillOpacity={1}
                          d=" M14.5,0 C22.50255012512207,0 29,6.49744987487793 29,14.5 C29,22.50255012512207 22.50255012512207,29 14.5,29 C6.49744987487793,29 0,22.50255012512207 0,14.5 C0,6.49744987487793 6.49744987487793,0 14.5,0z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M41,-12 C41,-12 -12,-12 -12,-12 C-12,-12 -12,41 -12,41 C-12,41 41,41 41,41 C41,41 41,-12 41,-12z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                mask="url(#__lottie_element_2555_1)"
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2552)"
                  transform="matrix(1,0,0,1,-13,-13)"
                  opacity={1}
                >
                  <g
                    filter="url(#__lottie_element_2684)"
                    transform="matrix(1,0,0,1,267,388)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(100,107,141)"
                        fillOpacity={1}
                        d=" M14.5,0 C22.50255012512207,0 29,6.49744987487793 29,14.5 C29,22.50255012512207 22.50255012512207,29 14.5,29 C6.49744987487793,29 0,22.50255012512207 0,14.5 C0,6.49744987487793 6.49744987487793,0 14.5,0z"
                      />
                    </g>
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M41,-12 C41,-12 -12,-12 -12,-12 C-12,-12 -12,41 -12,41 C-12,41 41,41 41,41 C41,41 41,-12 41,-12z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2561)"
                transform="matrix(0.5,0,0,0.5,29.5,191.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(4,6,24)"
                    fillOpacity={1}
                    d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                  />
                </g>
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="miter"
                      fillOpacity={0}
                      strokeMiterlimit={10}
                      stroke="rgb(29,31,53)"
                      strokeOpacity={1}
                      strokeWidth={2}
                      d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                    />
                  </g>
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M81,-1 C81,-1 -1,-1 -1,-1 C-1,-1 -1,81 -1,81 C-1,81 81,81 81,81 C81,81 81,-1 81,-1z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2705)"
                  transform="matrix(1,0,0,1,20,25)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(147,163,183)"
                          fillOpacity={1}
                          d=" M20.8700008392334,16.34000015258789 C19.350000381469727,16.34000015258789 18.100000381469727,14.90999984741211 18.100000381469727,13.180000305175781 C18.100000381469727,11.449999809265137 19.31999969482422,10.029999732971191 20.8700008392334,10.029999732971191 C22.420000076293945,10.029999732971191 23.670000076293945,11.449999809265137 23.639999389648438,13.180000305175781 C23.639999389648438,14.90999984741211 22.420000076293945,16.34000015258789 20.8700008392334,16.34000015258789 C20.8700008392334,16.34000015258789 20.8700008392334,16.34000015258789 20.8700008392334,16.34000015258789z M10.630000114440918,16.34000015258789 C9.109999656677246,16.34000015258789 7.860000133514404,14.90999984741211 7.860000133514404,13.180000305175781 C7.860000133514404,11.449999809265137 9.079999923706055,10.029999732971191 10.630000114440918,10.029999732971191 C12.180000305175781,10.029999732971191 13.420000076293945,11.449999809265137 13.399999618530273,13.180000305175781 C13.399999618530273,14.90999984741211 12.180000305175781,16.34000015258789 10.630000114440918,16.34000015258789 C10.630000114440918,16.34000015258789 10.630000114440918,16.34000015258789 10.630000114440918,16.34000015258789z M26.450000762939453,2.069999933242798 C24.43000030517578,1.1200000047683716 22.290000915527344,0.44999998807907104 20.09000015258789,0.07000000029802322 C19.81999969482422,0.5600000023841858 19.489999771118164,1.2300000190734863 19.270000457763672,1.7599999904632568 C16.899999618530273,1.399999976158142 14.5600004196167,1.399999976158142 12.229999542236328,1.7599999904632568 C12.010000228881836,1.2300000190734863 11.680000305175781,0.5600000023841858 11.399999618530273,0.07000000029802322 C9.199999809265137,0.44999998807907104 7.059999942779541,1.1200000047683716 5.039999961853027,2.069999933242798 C1.0099999904632568,8.149999618530273 -0.07999999821186066,14.079999923706055 0.4699999988079071,19.93000030517578 C3.140000104904175,21.920000076293945 5.71999979019165,23.139999389648438 8.270000457763672,23.93000030517578 C8.899999618530273,23.059999465942383 9.460000038146973,22.139999389648438 9.9399995803833,21.18000030517578 C9.029999732971191,20.829999923706055 8.149999618530273,20.399999618530273 7.309999942779541,19.899999618530273 C7.53000020980835,19.739999771118164 7.739999771118164,19.56999969482422 7.949999809265137,19.389999389648438 C13.020000457763672,21.760000228881836 18.540000915527344,21.760000228881836 23.549999237060547,19.389999389648438 C23.760000228881836,19.56999969482422 23.969999313354492,19.739999771118164 24.190000534057617,19.899999618530273 C23.350000381469727,20.399999618530273 22.469999313354492,20.829999923706055 21.559999465942383,21.18000030517578 C22.040000915527344,22.139999389648438 22.600000381469727,23.06999969482422 23.229999542236328,23.93000030517578 C25.780000686645508,23.139999389648438 28.360000610351562,21.93000030517578 31.030000686645508,19.93000030517578 C31.670000076293945,13.149999618530273 29.940000534057617,7.28000020980835 26.450000762939453,2.069999933242798 C26.450000762939453,2.069999933242798 26.450000762939453,2.069999933242798 26.450000762939453,2.069999933242798z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M42,0 C42,0 0,0 0,0 C0,0 0,32 0,32 C0,32 42,32 42,32 C42,32 42,0 42,0z"
                    />
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2566)"
                transform="matrix(0.5,0,0,0.5,457.5,191.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(4,6,24)"
                    fillOpacity={1}
                    d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                  />
                </g>
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="miter"
                      fillOpacity={0}
                      strokeMiterlimit={10}
                      stroke="rgb(29,31,53)"
                      strokeOpacity={1}
                      strokeWidth={2}
                      d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                    />
                  </g>
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M81,-1 C81,-1 -1,-1 -1,-1 C-1,-1 -1,81 -1,81 C-1,81 81,81 81,81 C81,81 81,-1 81,-1z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2723)"
                  transform="matrix(1,0,0,1,19.777000427246094,25)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2728)"
                    transform="matrix(1,0,0,1,0,8)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(66,132,244)"
                            fillOpacity={1}
                            d=" M7.230000019073486,17.8799991607666 C7.230000019073486,17.8799991607666 7.230000019073486,5.579999923706055 7.230000019073486,5.579999923706055 C7.230000019073486,5.579999923706055 3.4200000762939453,2.0899999141693115 3.4200000762939453,2.0899999141693115 C3.4200000762939453,2.0899999141693115 0,0.1599999964237213 0,0.1599999964237213 C0,0.1599999964237213 0,15.710000038146973 0,15.710000038146973 C0,16.90999984741211 0.9700000286102295,17.8799991607666 2.1700000762939453,17.8799991607666 C2.1700000762939453,17.8799991607666 7.230000019073486,17.8799991607666 7.230000019073486,17.8799991607666z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M10,0 C10,0 0,0 0,0 C0,0 0,24 0,24 C0,24 10,24 10,24 C10,24 10,0 10,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2733)"
                    transform="matrix(1,0,0,1,32,8)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(51,168,84)"
                            fillOpacity={1}
                            d=" M0.6000000238418579,17.8799991607666 C0.6000000238418579,17.8799991607666 5.659999847412109,17.8799991607666 5.659999847412109,17.8799991607666 C6.860000133514404,17.8799991607666 7.840000152587891,16.90999984741211 7.840000152587891,15.710000038146973 C7.840000152587891,15.710000038146973 7.840000152587891,0.1599999964237213 7.840000152587891,0.1599999964237213 C7.840000152587891,0.1599999964237213 3.9600000381469727,2.380000114440918 3.9600000381469727,2.380000114440918 C3.9600000381469727,2.380000114440918 0.6000000238418579,5.579999923706055 0.6000000238418579,5.579999923706055 C0.6000000238418579,5.579999923706055 0.6000000238418579,17.8799991607666 0.6000000238418579,17.8799991607666z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M11,0 C11,0 0,0 0,0 C0,0 0,24 0,24 C0,24 11,24 11,24 C11,24 11,0 11,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2738)"
                    transform="matrix(1,0,0,1,8,2)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(234,66,53)"
                              fillOpacity={1}
                              d=" M1.2300000190734863,10.079999923706055 C1.2300000190734863,10.079999923706055 0.7099999785423279,5.28000020980835 0.7099999785423279,5.28000020980835 C0.7099999785423279,5.28000020980835 1.2300000190734863,0.6800000071525574 1.2300000190734863,0.6800000071525574 C1.2300000190734863,0.6800000071525574 9.920000076293945,7.190000057220459 9.920000076293945,7.190000057220459 C9.920000076293945,7.190000057220459 18.600000381469727,0.6800000071525574 18.600000381469727,0.6800000071525574 C18.600000381469727,0.6800000071525574 19.18000030517578,5.03000020980835 19.18000030517578,5.03000020980835 C19.18000030517578,5.03000020980835 18.600000381469727,10.079999923706055 18.600000381469727,10.079999923706055 C18.600000381469727,10.079999923706055 9.920000076293945,16.59000015258789 9.920000076293945,16.59000015258789 C9.920000076293945,16.59000015258789 1.2300000190734863,10.079999923706055 1.2300000190734863,10.079999923706055z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M26,0 C26,0 0,0 0,0 C0,0 0,23 0,23 C0,23 26,23 26,23 C26,23 26,0 26,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2743)"
                    transform="matrix(1,0,0,1,32,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(249,188,5)"
                            fillOpacity={1}
                            d=" M0.6000000238418579,2.180000066757202 C0.6000000238418579,2.180000066757202 0.6000000238418579,11.579999923706055 0.6000000238418579,11.579999923706055 C0.6000000238418579,11.579999923706055 7.840000152587891,6.159999847412109 7.840000152587891,6.159999847412109 C7.840000152587891,6.159999847412109 7.840000152587891,3.259999990463257 7.840000152587891,3.259999990463257 C7.840000152587891,0.5799999833106995 4.769999980926514,-0.949999988079071 2.630000114440918,0.6600000262260437 C2.630000114440918,0.6600000262260437 0.6000000238418579,2.180000066757202 0.6000000238418579,2.180000066757202z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M11,0 C11,0 0,0 0,0 C0,0 0,16 0,16 C0,16 11,16 11,16 C11,16 11,0 11,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2748)"
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(196,33,30)"
                            fillOpacity={1}
                            d=" M0,6.159999847412109 C0,6.159999847412109 7.230000019073486,11.579999923706055 7.230000019073486,11.579999923706055 C7.230000019073486,11.579999923706055 7.230000019073486,2.180000066757202 7.230000019073486,2.180000066757202 C7.230000019073486,2.180000066757202 5.210000038146973,0.6600000262260437 5.210000038146973,0.6600000262260437 C3.059999942779541,-0.949999988079071 0,0.5799999833106995 0,3.259999990463257 C0,3.259999990463257 0,6.159999847412109 0,6.159999847412109z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M10,0 C10,0 0,0 0,0 C0,0 0,16 0,16 C0,16 10,16 10,16 C10,16 10,0 10,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2571)"
                transform="matrix(0.5,0,0,0.5,149,-12.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,61,61)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(20,22,36)"
                    fillOpacity={1}
                    d=" M342,36 C342,16.13159942626953 325.868408203125,0 306,0 C306,0 36,0 36,0 C16.13159942626953,0 0,16.13159942626953 0,36 C0,36 0,36 0,36 C0,55.86840057373047 16.13159942626953,72 36,72 C36,72 306,72 306,72 C325.868408203125,72 342,55.86840057373047 342,36 C342,36 342,36 342,36z"
                  />
                </g>
                <g
                  clipPath="url(#__lottie_element_2787)"
                  transform="matrix(1,0,0,1,95,81)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2797)"
                    transform="matrix(1,0,0,1,2,4)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(147,163,183)"
                            fillOpacity={1}
                            d=" M20.8799991607666,4.75 C20.8799991607666,2.4700000286102295 19.030000686645508,0.6299999952316284 16.75,0.6299999952316284 C16.75,0.6299999952316284 16.75,2.880000114440918 16.75,2.880000114440918 C17.790000915527344,2.880000114440918 18.6299991607666,3.7100000381469727 18.6299991607666,4.75 C18.6299991607666,4.75 20.8799991607666,4.75 20.8799991607666,4.75z M11.34000015258789,7.980000019073486 C10.8100004196167,8.25 10.1899995803833,8.25 9.65999984741211,7.980000019073486 C9.65999984741211,7.980000019073486 8.640000343322754,9.979999542236328 8.640000343322754,9.979999542236328 C9.8100004196167,10.569999694824219 11.1899995803833,10.569999694824219 12.359999656677246,9.979999542236328 C12.359999656677246,9.979999542236328 11.34000015258789,7.980000019073486 11.34000015258789,7.980000019073486z M18.6299991607666,13.25 C18.6299991607666,14.289999961853027 17.790000915527344,15.130000114440918 16.75,15.130000114440918 C16.75,15.130000114440918 16.75,17.3799991607666 16.75,17.3799991607666 C19.030000686645508,17.3799991607666 20.8799991607666,15.529999732971191 20.8799991607666,13.25 C20.8799991607666,13.25 18.6299991607666,13.25 18.6299991607666,13.25z M4.25,15.130000114440918 C3.2100000381469727,15.130000114440918 2.380000114440918,14.289999961853027 2.380000114440918,13.25 C2.380000114440918,13.25 0.12999999523162842,13.25 0.12999999523162842,13.25 C0.12999999523162842,15.529999732971191 1.9700000286102295,17.3799991607666 4.25,17.3799991607666 C4.25,17.3799991607666 4.25,15.130000114440918 4.25,15.130000114440918z M2.380000114440918,4.75 C2.380000114440918,3.7100000381469727 3.2100000381469727,2.880000114440918 4.25,2.880000114440918 C4.25,2.880000114440918 4.25,0.6299999952316284 4.25,0.6299999952316284 C1.9700000286102295,0.6299999952316284 0.12999999523162842,2.4700000286102295 0.12999999523162842,4.75 C0.12999999523162842,4.75 2.380000114440918,4.75 2.380000114440918,4.75z M9.65999984741211,7.980000019073486 C9.65999984741211,7.980000019073486 1.7599999904632568,4 1.7599999904632568,4 C1.7599999904632568,4 0.7400000095367432,6 0.7400000095367432,6 C0.7400000095367432,6 8.640000343322754,9.979999542236328 8.640000343322754,9.979999542236328 C8.640000343322754,9.979999542236328 9.65999984741211,7.980000019073486 9.65999984741211,7.980000019073486z M19.239999771118164,4 C19.239999771118164,4 11.34000015258789,7.980000019073486 11.34000015258789,7.980000019073486 C11.34000015258789,7.980000019073486 12.359999656677246,9.979999542236328 12.359999656677246,9.979999542236328 C12.359999656677246,9.979999542236328 20.260000228881836,6 20.260000228881836,6 C20.260000228881836,6 19.239999771118164,4 19.239999771118164,4z M4.25,2.880000114440918 C4.25,2.880000114440918 16.75,2.880000114440918 16.75,2.880000114440918 C16.75,2.880000114440918 16.75,0.6299999952316284 16.75,0.6299999952316284 C16.75,0.6299999952316284 4.25,0.6299999952316284 4.25,0.6299999952316284 C4.25,0.6299999952316284 4.25,2.880000114440918 4.25,2.880000114440918z M2.380000114440918,13.25 C2.380000114440918,13.25 2.380000114440918,4.75 2.380000114440918,4.75 C2.380000114440918,4.75 0.12999999523162842,4.75 0.12999999523162842,4.75 C0.12999999523162842,4.75 0.12999999523162842,13.25 0.12999999523162842,13.25 C0.12999999523162842,13.25 2.380000114440918,13.25 2.380000114440918,13.25z M16.75,15.130000114440918 C16.75,15.130000114440918 4.25,15.130000114440918 4.25,15.130000114440918 C4.25,15.130000114440918 4.25,17.3799991607666 4.25,17.3799991607666 C4.25,17.3799991607666 16.75,17.3799991607666 16.75,17.3799991607666 C16.75,17.3799991607666 16.75,15.130000114440918 16.75,15.130000114440918z M18.6299991607666,4.75 C18.6299991607666,4.75 18.6299991607666,13.25 18.6299991607666,13.25 C18.6299991607666,13.25 20.8799991607666,13.25 20.8799991607666,13.25 C20.8799991607666,13.25 20.8799991607666,4.75 20.8799991607666,4.75 C20.8799991607666,4.75 18.6299991607666,4.75 18.6299991607666,4.75z M1.7599999904632568,4 C1.2100000381469727,3.7200000286102295 0.5299999713897705,3.940000057220459 0.25,4.489999771118164 C-0.029999999329447746,5.039999961853027 0.1899999976158142,5.71999979019165 0.7400000095367432,6 C0.7400000095367432,6 1.7599999904632568,4 1.7599999904632568,4z M20.260000228881836,6 C20.809999465942383,5.71999979019165 21.030000686645508,5.039999961853027 20.75,4.489999771118164 C20.469999313354492,3.940000057220459 19.790000915527344,3.7200000286102295 19.239999771118164,4 C19.239999771118164,4 20.260000228881836,6 20.260000228881836,6z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M28,0 C28,0 0,0 0,0 C0,0 0,24 0,24 C0,24 28,24 28,24 C28,24 28,0 28,0z"
                      />
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2792)"
                  filter="url(#__lottie_element_2794)"
                  transform="matrix(1,0,0,1,87,24)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M342,0 C342,0 0,0 0,0 C0,0 0,146 0,146 C0,146 342,146 342,146 C342,146 342,0 342,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2810)"
                    transform="matrix(1,0,0,1,60,60)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(204,214,224)"
                            fillOpacity={1}
                            d=" M161.89999389648438,2.6600000858306885 C161.89999389648438,2.6600000858306885 163.97000122070312,2.6600000858306885 163.97000122070312,2.6600000858306885 C163.97000122070312,2.6600000858306885 163.97000122070312,14.100000381469727 163.97000122070312,14.100000381469727 C163.97000122070312,14.569999694824219 164.22000122070312,14.800000190734863 164.6699981689453,14.800000190734863 C164.6699981689453,14.800000190734863 165.50999450683594,14.800000190734863 165.50999450683594,14.800000190734863 C165.50999450683594,14.800000190734863 165.50999450683594,16.5 165.50999450683594,16.5 C165.50999450683594,16.5 164.22000122070312,16.5 164.22000122070312,16.5 C162.83999633789062,16.5 161.89999389648438,15.600000381469727 161.89999389648438,14.199999809265137 C161.89999389648438,14.199999809265137 161.89999389648438,2.6600000858306885 161.89999389648438,2.6600000858306885z M156.4600067138672,4.639999866485596 C156.4600067138672,4.639999866485596 156.4600067138672,2.680000066757202 156.4600067138672,2.680000066757202 C156.4600067138672,2.680000066757202 158.6300048828125,2.680000066757202 158.6300048828125,2.680000066757202 C158.6300048828125,2.680000066757202 158.6300048828125,4.639999866485596 158.6300048828125,4.639999866485596 C158.6300048828125,4.639999866485596 156.4600067138672,4.639999866485596 156.4600067138672,4.639999866485596z M156.5,6.159999847412109 C156.5,6.159999847412109 158.57000732421875,6.159999847412109 158.57000732421875,6.159999847412109 C158.57000732421875,6.159999847412109 158.57000732421875,16.5 158.57000732421875,16.5 C158.57000732421875,16.5 156.5,16.5 156.5,16.5 C156.5,16.5 156.5,6.159999847412109 156.5,6.159999847412109z M146.14999389648438,13.75 C146.14999389648438,14.510000228881836 146.82000732421875,15.140000343322754 148.17999267578125,15.140000343322754 C149.72000122070312,15.119999885559082 150.92999267578125,14.020000457763672 150.92999267578125,11.800000190734863 C150.92999267578125,11.800000190734863 150.92999267578125,11.65999984741211 150.92999267578125,11.65999984741211 C150.92999267578125,11.65999984741211 148.72999572753906,12.050000190734863 148.72999572753906,12.050000190734863 C147.30999755859375,12.300000190734863 146.14999389648438,12.449999809265137 146.14999389648438,13.75 C146.14999389648438,13.75 146.14999389648438,13.75 146.14999389648438,13.75z M144.17999267578125,9.270000457763672 C144.58999633789062,7.179999828338623 146.22999572753906,5.929999828338623 148.61000061035156,5.929999828338623 C151.4199981689453,5.929999828338623 152.9600067138672,7.489999771118164 152.9600067138672,10.319999694824219 C152.9600067138672,10.319999694824219 152.9600067138672,14.15999984741211 152.9600067138672,14.15999984741211 C152.9600067138672,14.6899995803833 153.19000244140625,14.880000114440918 153.60000610351562,14.880000114440918 C153.60000610351562,14.880000114440918 154.00999450683594,14.880000114440918 154.00999450683594,14.880000114440918 C154.00999450683594,14.880000114440918 154.00999450683594,16.5 154.00999450683594,16.5 C154.00999450683594,16.5 153.3699951171875,16.5 153.3699951171875,16.5 C152.44000244140625,16.520000457763672 151.1699981689453,16.360000610351562 151.07000732421875,14.899999618530273 C150.60000610351562,15.890000343322754 149.44000244140625,16.729999542236328 147.72999572753906,16.729999542236328 C145.63999938964844,16.729999542236328 144.00999450683594,15.619999885559082 144.00999450683594,13.789999961853027 C144.00999450683594,11.720000267028809 145.5500030517578,11.119999885559082 147.92999267578125,10.670000076293945 C147.92999267578125,10.670000076293945 150.88999938964844,10.09000015258789 150.88999938964844,10.09000015258789 C150.8699951171875,8.430000305175781 150.11000061035156,7.610000133514404 148.61000061035156,7.610000133514404 C147.39999389648438,7.610000133514404 146.60000610351562,8.229999542236328 146.3300018310547,9.399999618530273 C146.3300018310547,9.399999618530273 144.17999267578125,9.270000457763672 144.17999267578125,9.270000457763672z M127.18000030517578,6.159999847412109 C127.18000030517578,6.159999847412109 129.07000732421875,6.159999847412109 129.07000732421875,6.159999847412109 C129.07000732421875,6.159999847412109 129.11000061035156,7.860000133514404 129.11000061035156,7.860000133514404 C129.6199951171875,6.630000114440918 130.6699981689453,5.929999828338623 132.0500030517578,5.929999828338623 C133.52999877929688,5.929999828338623 134.61000061035156,6.710000038146973 135.05999755859375,8.069999694824219 C135.52999877929688,6.690000057220459 136.60000610351562,5.929999828338623 138.16000366210938,5.929999828338623 C140.25,5.929999828338623 141.49000549316406,7.329999923706055 141.49000549316406,9.850000381469727 C141.49000549316406,9.850000381469727 141.49000549316406,16.5 141.49000549316406,16.5 C141.49000549316406,16.5 139.42999267578125,16.5 139.42999267578125,16.5 C139.42999267578125,16.5 139.42999267578125,10.489999771118164 139.42999267578125,10.489999771118164 C139.42999267578125,8.65999984741211 138.77999877929688,7.670000076293945 137.61000061035156,7.670000076293945 C136.1300048828125,7.670000076293945 135.30999755859375,8.699999809265137 135.30999755859375,10.489999771118164 C135.30999755859375,10.489999771118164 135.30999755859375,16.5 135.30999755859375,16.5 C135.30999755859375,16.5 133.36000061035156,16.5 133.36000061035156,16.5 C133.36000061035156,16.5 133.36000061035156,10.489999771118164 133.36000061035156,10.489999771118164 C133.36000061035156,8.699999809265137 132.6999969482422,7.670000076293945 131.5500030517578,7.670000076293945 C130.08999633789062,7.670000076293945 129.25,8.699999809265137 129.25,10.489999771118164 C129.25,10.489999771118164 129.25,16.5 129.25,16.5 C129.25,16.5 127.18000030517578,16.5 127.18000030517578,16.5 C127.18000030517578,16.5 127.18000030517578,6.159999847412109 127.18000030517578,6.159999847412109z M117.19000244140625,10.380000114440918 C117.19000244140625,10.380000114440918 122.4000015258789,10.380000114440918 122.4000015258789,10.380000114440918 C122.16999816894531,8.40999984741211 121.06999969482422,7.690000057220459 119.9000015258789,7.690000057220459 C118.4000015258789,7.690000057220459 117.41999816894531,8.680000305175781 117.19000244140625,10.380000114440918 C117.19000244140625,10.380000114440918 117.19000244140625,10.380000114440918 117.19000244140625,10.380000114440918z M114.97000122070312,11.329999923706055 C114.97000122070312,8.050000190734863 116.9000015258789,5.929999828338623 119.9000015258789,5.929999828338623 C122.37999725341797,5.929999828338623 124.45999908447266,7.590000152587891 124.55999755859375,11.25 C124.55999755859375,11.25 124.58000183105469,11.920000076293945 124.58000183105469,11.920000076293945 C124.58000183105469,11.920000076293945 117.1500015258789,11.920000076293945 117.1500015258789,11.920000076293945 C117.29000091552734,13.850000381469727 118.27999877929688,14.979999542236328 119.9000015258789,14.979999542236328 C120.91999816894531,14.979999542236328 121.8499984741211,14.380000114440918 122.26000213623047,13.380000114440918 C122.26000213623047,13.380000114440918 124.43000030517578,13.539999961853027 124.43000030517578,13.539999961853027 C123.81999969482422,15.510000228881836 122.01000213623047,16.729999542236328 119.9000015258789,16.729999542236328 C116.9000015258789,16.729999542236328 114.97000122070312,14.609999656677246 114.97000122070312,11.329999923706055 C114.97000122070312,11.329999923706055 114.97000122070312,11.329999923706055 114.97000122070312,11.329999923706055z M101.47000122070312,6.159999847412109 C101.47000122070312,6.159999847412109 103.7699966430664,14.15999984741211 103.7699966430664,14.15999984741211 C103.7699966430664,14.15999984741211 106.06999969482422,6.159999847412109 106.06999969482422,6.159999847412109 C106.06999969482422,6.159999847412109 108.18000030517578,6.159999847412109 108.18000030517578,6.159999847412109 C108.18000030517578,6.159999847412109 104.9800033569336,16.5 104.9800033569336,16.5 C104.9800033569336,16.5 102.68000030517578,16.5 102.68000030517578,16.5 C102.68000030517578,16.5 100.5,9.09000015258789 100.5,9.09000015258789 C100.5,9.09000015258789 98.33000183105469,16.5 98.33000183105469,16.5 C98.33000183105469,16.5 96.02999877929688,16.5 96.02999877929688,16.5 C96.02999877929688,16.5 92.8499984741211,6.159999847412109 92.8499984741211,6.159999847412109 C92.8499984741211,6.159999847412109 94.94000244140625,6.159999847412109 94.94000244140625,6.159999847412109 C94.94000244140625,6.159999847412109 97.22000122070312,14.15999984741211 97.22000122070312,14.15999984741211 C97.22000122070312,14.15999984741211 99.5199966430664,6.159999847412109 99.5199966430664,6.159999847412109 C99.5199966430664,6.159999847412109 101.47000122070312,6.159999847412109 101.47000122070312,6.159999847412109z M84.30000305175781,10.380000114440918 C84.30000305175781,10.380000114440918 89.5,10.380000114440918 89.5,10.380000114440918 C89.2699966430664,8.40999984741211 88.18000030517578,7.690000057220459 87.01000213623047,7.690000057220459 C85.51000213623047,7.690000057220459 84.52999877929688,8.680000305175781 84.30000305175781,10.380000114440918 C84.30000305175781,10.380000114440918 84.30000305175781,10.380000114440918 84.30000305175781,10.380000114440918z M82.06999969482422,11.329999923706055 C82.06999969482422,8.050000190734863 84.01000213623047,5.929999828338623 87.01000213623047,5.929999828338623 C89.48999786376953,5.929999828338623 91.56999969482422,7.590000152587891 91.66999816894531,11.25 C91.66999816894531,11.25 91.69000244140625,11.920000076293945 91.69000244140625,11.920000076293945 C91.69000244140625,11.920000076293945 84.26000213623047,11.920000076293945 84.26000213623047,11.920000076293945 C84.4000015258789,13.850000381469727 85.38999938964844,14.979999542236328 87.01000213623047,14.979999542236328 C88.0199966430664,14.979999542236328 88.95999908447266,14.380000114440918 89.37000274658203,13.380000114440918 C89.37000274658203,13.380000114440918 91.52999877929688,13.539999961853027 91.52999877929688,13.539999961853027 C90.91999816894531,15.510000228881836 89.12000274658203,16.729999542236328 87.01000213623047,16.729999542236328 C84.01000213623047,16.729999542236328 82.06999969482422,14.609999656677246 82.06999969482422,11.329999923706055 C82.06999969482422,11.329999923706055 82.06999969482422,11.329999923706055 82.06999969482422,11.329999923706055z M71.04000091552734,6.159999847412109 C71.04000091552734,6.159999847412109 72.93000030517578,6.159999847412109 72.93000030517578,6.159999847412109 C72.93000030517578,6.159999847412109 72.9800033569336,7.900000095367432 72.9800033569336,7.900000095367432 C73.51000213623047,6.510000228881836 74.72000122070312,5.929999828338623 76.12000274658203,5.929999828338623 C78.44000244140625,5.929999828338623 79.62999725341797,7.590000152587891 79.62999725341797,9.850000381469727 C79.62999725341797,9.850000381469727 79.62999725341797,16.5 79.62999725341797,16.5 C79.62999725341797,16.5 77.56999969482422,16.5 77.56999969482422,16.5 C77.56999969482422,16.5 77.56999969482422,10.489999771118164 77.56999969482422,10.489999771118164 C77.56999969482422,8.65999984741211 77,7.670000076293945 75.55999755859375,7.670000076293945 C74.05999755859375,7.670000076293945 73.0999984741211,8.65999984741211 73.0999984741211,10.489999771118164 C73.0999984741211,10.489999771118164 73.0999984741211,16.5 73.0999984741211,16.5 C73.0999984741211,16.5 71.04000091552734,16.5 71.04000091552734,16.5 C71.04000091552734,16.5 71.04000091552734,6.159999847412109 71.04000091552734,6.159999847412109z M55.79999923706055,10.380000114440918 C55.79999923706055,10.380000114440918 61.0099983215332,10.380000114440918 61.0099983215332,10.380000114440918 C60.779998779296875,8.40999984741211 59.68000030517578,7.690000057220459 58.5099983215332,7.690000057220459 C57.0099983215332,7.690000057220459 56.029998779296875,8.680000305175781 55.79999923706055,10.380000114440918 C55.79999923706055,10.380000114440918 55.79999923706055,10.380000114440918 55.79999923706055,10.380000114440918z M53.58000183105469,11.329999923706055 C53.58000183105469,8.050000190734863 55.5099983215332,5.929999828338623 58.5099983215332,5.929999828338623 C60.9900016784668,5.929999828338623 63.06999969482422,7.590000152587891 63.16999816894531,11.25 C63.16999816894531,11.25 63.189998626708984,11.920000076293945 63.189998626708984,11.920000076293945 C63.189998626708984,11.920000076293945 55.7599983215332,11.920000076293945 55.7599983215332,11.920000076293945 C55.900001525878906,13.850000381469727 56.88999938964844,14.979999542236328 58.5099983215332,14.979999542236328 C59.52000045776367,14.979999542236328 60.459999084472656,14.380000114440918 60.869998931884766,13.380000114440918 C60.869998931884766,13.380000114440918 63.040000915527344,13.539999961853027 63.040000915527344,13.539999961853027 C62.43000030517578,15.510000228881836 60.619998931884766,16.729999542236328 58.5099983215332,16.729999542236328 C55.5099983215332,16.729999542236328 53.58000183105469,14.609999656677246 53.58000183105469,11.329999923706055 C53.58000183105469,11.329999923706055 53.58000183105469,11.329999923706055 53.58000183105469,11.329999923706055z M47.11000061035156,3.819999933242798 C47.11000061035156,3.819999933242798 49.18000030517578,3.819999933242798 49.18000030517578,3.819999933242798 C49.18000030517578,3.819999933242798 49.18000030517578,6.159999847412109 49.18000030517578,6.159999847412109 C49.18000030517578,6.159999847412109 51.90999984741211,6.159999847412109 51.90999984741211,6.159999847412109 C51.90999984741211,6.159999847412109 51.90999984741211,7.840000152587891 51.90999984741211,7.840000152587891 C51.90999984741211,7.840000152587891 49.18000030517578,7.840000152587891 49.18000030517578,7.840000152587891 C49.18000030517578,7.840000152587891 49.18000030517578,13.539999961853027 49.18000030517578,13.539999961853027 C49.18000030517578,14.380000114440918 49.59000015258789,14.800000190734863 50.38999938964844,14.800000190734863 C50.38999938964844,14.800000190734863 51.88999938964844,14.800000190734863 51.88999938964844,14.800000190734863 C51.88999938964844,14.800000190734863 51.88999938964844,16.5 51.88999938964844,16.5 C51.88999938964844,16.5 50.18000030517578,16.5 50.18000030517578,16.5 C48.189998626708984,16.5 47.11000061035156,15.470000267028809 47.11000061035156,13.539999961853027 C47.11000061035156,13.539999961853027 47.11000061035156,7.840000152587891 47.11000061035156,7.840000152587891 C47.11000061035156,7.840000152587891 45.540000915527344,7.840000152587891 45.540000915527344,7.840000152587891 C45.540000915527344,7.840000152587891 45.540000915527344,6.159999847412109 45.540000915527344,6.159999847412109 C45.540000915527344,6.159999847412109 47.11000061035156,6.159999847412109 47.11000061035156,6.159999847412109 C47.11000061035156,6.159999847412109 47.11000061035156,3.819999933242798 47.11000061035156,3.819999933242798z M36.59000015258789,13.75 C36.59000015258789,14.510000228881836 37.2400016784668,15.140000343322754 38.61000061035156,15.140000343322754 C40.150001525878906,15.119999885559082 41.36000061035156,14.020000457763672 41.36000061035156,11.800000190734863 C41.36000061035156,11.800000190734863 41.36000061035156,11.65999984741211 41.36000061035156,11.65999984741211 C41.36000061035156,11.65999984741211 39.15999984741211,12.050000190734863 39.15999984741211,12.050000190734863 C37.7400016784668,12.300000190734863 36.59000015258789,12.449999809265137 36.59000015258789,13.75 C36.59000015258789,13.75 36.59000015258789,13.75 36.59000015258789,13.75z M34.61000061035156,9.270000457763672 C35.02000045776367,7.179999828338623 36.65999984741211,5.929999828338623 39.040000915527344,5.929999828338623 C41.84000015258789,5.929999828338623 43.38999938964844,7.489999771118164 43.38999938964844,10.319999694824219 C43.38999938964844,10.319999694824219 43.38999938964844,14.15999984741211 43.38999938964844,14.15999984741211 C43.38999938964844,14.6899995803833 43.619998931884766,14.880000114440918 44.029998779296875,14.880000114440918 C44.029998779296875,14.880000114440918 44.439998626708984,14.880000114440918 44.439998626708984,14.880000114440918 C44.439998626708984,14.880000114440918 44.439998626708984,16.5 44.439998626708984,16.5 C44.439998626708984,16.5 43.79999923706055,16.5 43.79999923706055,16.5 C42.86000061035156,16.520000457763672 41.59000015258789,16.360000610351562 41.5,14.899999618530273 C41.029998779296875,15.890000343322754 39.869998931884766,16.729999542236328 38.15999984741211,16.729999542236328 C36.06999969482422,16.729999542236328 34.439998626708984,15.619999885559082 34.439998626708984,13.789999961853027 C34.439998626708984,11.720000267028809 35.97999954223633,11.119999885559082 38.36000061035156,10.670000076293945 C38.36000061035156,10.670000076293945 41.31999969482422,10.09000015258789 41.31999969482422,10.09000015258789 C41.29999923706055,8.430000305175781 40.540000915527344,7.610000133514404 39.040000915527344,7.610000133514404 C37.83000183105469,7.610000133514404 37.029998779296875,8.229999542236328 36.7599983215332,9.399999618530273 C36.7599983215332,9.399999618530273 34.61000061035156,9.270000457763672 34.61000061035156,9.270000457763672z M24.829999923706055,10.380000114440918 C24.829999923706055,10.380000114440918 30.040000915527344,10.380000114440918 30.040000915527344,10.380000114440918 C29.809999465942383,8.40999984741211 28.709999084472656,7.690000057220459 27.540000915527344,7.690000057220459 C26.040000915527344,7.690000057220459 25.059999465942383,8.680000305175781 24.829999923706055,10.380000114440918 C24.829999923706055,10.380000114440918 24.829999923706055,10.380000114440918 24.829999923706055,10.380000114440918z M22.610000610351562,11.329999923706055 C22.610000610351562,8.050000190734863 24.540000915527344,5.929999828338623 27.540000915527344,5.929999828338623 C30.020000457763672,5.929999828338623 32.099998474121094,7.590000152587891 32.20000076293945,11.25 C32.20000076293945,11.25 32.220001220703125,11.920000076293945 32.220001220703125,11.920000076293945 C32.220001220703125,11.920000076293945 24.790000915527344,11.920000076293945 24.790000915527344,11.920000076293945 C24.93000030517578,13.850000381469727 25.920000076293945,14.979999542236328 27.540000915527344,14.979999542236328 C28.549999237060547,14.979999542236328 29.489999771118164,14.380000114440918 29.899999618530273,13.380000114440918 C29.899999618530273,13.380000114440918 32.060001373291016,13.539999961853027 32.060001373291016,13.539999961853027 C31.450000762939453,15.510000228881836 29.649999618530273,16.729999542236328 27.540000915527344,16.729999542236328 C24.540000915527344,16.729999542236328 22.610000610351562,14.609999656677246 22.610000610351562,11.329999923706055 C22.610000610351562,11.329999923706055 22.610000610351562,11.329999923706055 22.610000610351562,11.329999923706055z M15.699999809265137,6.159999847412109 C15.699999809265137,6.159999847412109 17.59000015258789,6.159999847412109 17.59000015258789,6.159999847412109 C17.59000015258789,6.159999847412109 17.649999618530273,8.109999656677246 17.649999618530273,8.109999656677246 C18.020000457763672,6.789999961853027 18.799999237060547,6.159999847412109 20.1299991607666,6.159999847412109 C20.1299991607666,6.159999847412109 21.1200008392334,6.159999847412109 21.1200008392334,6.159999847412109 C21.1200008392334,6.159999847412109 21.1200008392334,7.860000133514404 21.1200008392334,7.860000133514404 C21.1200008392334,7.860000133514404 20.110000610351562,7.860000133514404 20.110000610351562,7.860000133514404 C18.489999771118164,7.860000133514404 17.770000457763672,8.760000228881836 17.770000457763672,10.470000267028809 C17.770000457763672,10.470000267028809 17.770000457763672,16.5 17.770000457763672,16.5 C17.770000457763672,16.5 15.699999809265137,16.5 15.699999809265137,16.5 C15.699999809265137,16.5 15.699999809265137,6.159999847412109 15.699999809265137,6.159999847412109z M13.050000190734863,11.800000190734863 C12.520000457763672,14.84000015258789 10.529999732971191,16.809999465942383 7.289999961853027,16.809999465942383 C3.2699999809265137,16.809999465942383 0.8999999761581421,13.649999618530273 0.8999999761581421,9.600000381469727 C0.8999999761581421,5.539999961853027 3.2699999809265137,2.3399999141693115 7.289999961853027,2.3399999141693115 C10.3100004196167,2.3399999141693115 12.34000015258789,4.190000057220459 12.949999809265137,7.079999923706055 C12.949999809265137,7.079999923706055 10.729999542236328,7.199999809265137 10.729999542236328,7.199999809265137 C10.319999694824219,5.329999923706055 9.0600004196167,4.269999980926514 7.269999980926514,4.269999980926514 C4.360000133514404,4.269999980926514 3.0799999237060547,6.690000057220459 3.0799999237060547,9.600000381469727 C3.0799999237060547,12.489999771118164 4.380000114440918,14.880000114440918 7.269999980926514,14.880000114440918 C9.15999984741211,14.880000114440918 10.430000305175781,13.729999542236328 10.800000190734863,11.680000305175781 C10.800000190734863,11.680000305175781 13.050000190734863,11.800000190734863 13.050000190734863,11.800000190734863z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M222,0 C222,0 0,0 0,0 C0,0 0,26 0,26 C0,26 222,26 222,26 C222,26 222,0 222,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2576)"
                transform="matrix(1,0,0,1,23,-61)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2821)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(20,22,36)"
                      fillOpacity={1}
                      d=" M362,36 C362,16.13159942626953 345.868408203125,0 326,0 C326,0 36,0 36,0 C16.13159942626953,0 0,16.13159942626953 0,36 C0,36 0,36 0,36 C0,55.86840057373047 16.13159942626953,72 36,72 C36,72 326,72 326,72 C345.868408203125,72 362,55.86840057373047 362,36 C362,36 362,36 362,36z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2830)"
                    transform="matrix(1,0,0,1,95,81)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_2840)"
                      transform="matrix(1,0,0,1,2,2)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity={0}
                              stroke="rgb(147,163,183)"
                              strokeOpacity={1}
                              strokeWidth={3}
                              d=" M23.329999923706055,26.329999923706055 C23.329999923706055,26.329999923706055 26.329999923706055,26.329999923706055 26.329999923706055,26.329999923706055 M23.329999923706055,26.329999923706055 C23.329999923706055,26.329999923706055 20.329999923706055,26.329999923706055 20.329999923706055,26.329999923706055 M23.329999923706055,1.6699999570846558 C23.329999923706055,1.6699999570846558 23.329999923706055,26.329999923706055 23.329999923706055,26.329999923706055 M23.329999923706055,1.6699999570846558 C23.329999923706055,1.6699999570846558 26.329999923706055,1.6699999570846558 26.329999923706055,1.6699999570846558 M20.329999923706055,1.6699999570846558 C20.329999923706055,1.6699999570846558 23.329999923706055,1.6699999570846558 23.329999923706055,1.6699999570846558 M8.670000076293945,5.670000076293945 C8.670000076293945,5.670000076293945 8.670000076293945,22.329999923706055 8.670000076293945,22.329999923706055 M8.670000076293945,5.670000076293945 C8.670000076293945,5.670000076293945 15.670000076293945,5.670000076293945 15.670000076293945,5.670000076293945 M1.6699999570846558,5.670000076293945 C1.6699999570846558,5.670000076293945 8.670000076293945,5.670000076293945 8.670000076293945,5.670000076293945"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M28,0 C28,0 0,0 0,0 C0,0 0,28 0,28 C0,28 28,28 28,28 C28,28 28,0 28,0z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2835)"
                    filter="url(#__lottie_element_2837)"
                    transform="matrix(1,0,0,1,87,24)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M361,0 C361,0 0,0 0,0 C0,0 0,146 0,146 C0,146 361,146 361,146 C361,146 361,0 361,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2853)"
                      transform="matrix(1,0,0,1,60,60)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(204,214,224)"
                              fillOpacity={1}
                              d=" M177.1199951171875,9.420000076293945 C176.91000366210938,8.3100004196167 175.8699951171875,7.650000095367432 174.8000030517578,7.650000095367432 C173.75,7.650000095367432 172.8800048828125,8.1899995803833 172.8800048828125,9.109999656677246 C172.89999389648438,10.050000190734863 174.10000610351562,10.420000076293945 175.19000244140625,10.630000114440918 C177.75999450683594,11.100000381469727 179.39999389648438,11.779999732971191 179.39999389648438,13.8100004196167 C179.39999389648438,15.84000015258789 177.3699951171875,16.729999542236328 175.1699981689453,16.729999542236328 C172.5399932861328,16.729999542236328 170.63999938964844,15.399999618530273 170.47999572753906,13.239999771118164 C170.47999572753906,13.239999771118164 172.61000061035156,13.109999656677246 172.61000061035156,13.109999656677246 C172.82000732421875,14.279999732971191 173.72000122070312,15.020000457763672 175.14999389648438,15.020000457763672 C176.0800018310547,15.020000457763672 177.25,14.6899995803833 177.25,13.710000038146973 C177.22999572753906,12.600000381469727 175.92999267578125,12.460000038146973 174.82000732421875,12.210000038146973 C172.6199951171875,11.739999771118164 170.74000549316406,11.140000343322754 170.74000549316406,9.170000076293945 C170.74000549316406,7.159999847412109 172.3800048828125,5.929999828338623 174.9499969482422,5.929999828338623 C177.19000244140625,5.929999828338623 178.91000366210938,7.230000019073486 179.24000549316406,9.300000190734863 C179.24000549316406,9.300000190734863 177.1199951171875,9.420000076293945 177.1199951171875,9.420000076293945z M165.05999755859375,2.6600000858306885 C165.05999755859375,2.6600000858306885 167.1300048828125,2.6600000858306885 167.1300048828125,2.6600000858306885 C167.1300048828125,2.6600000858306885 167.1300048828125,14.100000381469727 167.1300048828125,14.100000381469727 C167.1300048828125,14.569999694824219 167.3800048828125,14.800000190734863 167.8300018310547,14.800000190734863 C167.8300018310547,14.800000190734863 168.6699981689453,14.800000190734863 168.6699981689453,14.800000190734863 C168.6699981689453,14.800000190734863 168.6699981689453,16.5 168.6699981689453,16.5 C168.6699981689453,16.5 167.3800048828125,16.5 167.3800048828125,16.5 C166,16.5 165.05999755859375,15.600000381469727 165.05999755859375,14.199999809265137 C165.05999755859375,14.199999809265137 165.05999755859375,2.6600000858306885 165.05999755859375,2.6600000858306885z M159.6300048828125,4.639999866485596 C159.6300048828125,4.639999866485596 159.6300048828125,2.680000066757202 159.6300048828125,2.680000066757202 C159.6300048828125,2.680000066757202 161.7899932861328,2.680000066757202 161.7899932861328,2.680000066757202 C161.7899932861328,2.680000066757202 161.7899932861328,4.639999866485596 161.7899932861328,4.639999866485596 C161.7899932861328,4.639999866485596 159.6300048828125,4.639999866485596 159.6300048828125,4.639999866485596z M159.66000366210938,6.159999847412109 C159.66000366210938,6.159999847412109 161.72999572753906,6.159999847412109 161.72999572753906,6.159999847412109 C161.72999572753906,6.159999847412109 161.72999572753906,16.5 161.72999572753906,16.5 C161.72999572753906,16.5 159.66000366210938,16.5 159.66000366210938,16.5 C159.66000366210938,16.5 159.66000366210938,6.159999847412109 159.66000366210938,6.159999847412109z M149.30999755859375,13.75 C149.30999755859375,14.510000228881836 149.97999572753906,15.140000343322754 151.33999633789062,15.140000343322754 C152.8800048828125,15.119999885559082 154.08999633789062,14.020000457763672 154.08999633789062,11.800000190734863 C154.08999633789062,11.800000190734863 154.08999633789062,11.65999984741211 154.08999633789062,11.65999984741211 C154.08999633789062,11.65999984741211 151.88999938964844,12.050000190734863 151.88999938964844,12.050000190734863 C150.47000122070312,12.300000190734863 149.30999755859375,12.449999809265137 149.30999755859375,13.75 C149.30999755859375,13.75 149.30999755859375,13.75 149.30999755859375,13.75z M147.33999633789062,9.270000457763672 C147.75,7.179999828338623 149.38999938964844,5.929999828338623 151.77000427246094,5.929999828338623 C154.5800018310547,5.929999828338623 156.1199951171875,7.489999771118164 156.1199951171875,10.319999694824219 C156.1199951171875,10.319999694824219 156.1199951171875,14.15999984741211 156.1199951171875,14.15999984741211 C156.1199951171875,14.6899995803833 156.35000610351562,14.880000114440918 156.75999450683594,14.880000114440918 C156.75999450683594,14.880000114440918 157.1699981689453,14.880000114440918 157.1699981689453,14.880000114440918 C157.1699981689453,14.880000114440918 157.1699981689453,16.5 157.1699981689453,16.5 C157.1699981689453,16.5 156.52999877929688,16.5 156.52999877929688,16.5 C155.60000610351562,16.520000457763672 154.3300018310547,16.360000610351562 154.22999572753906,14.899999618530273 C153.75999450683594,15.890000343322754 152.60000610351562,16.729999542236328 150.88999938964844,16.729999542236328 C148.8000030517578,16.729999542236328 147.1699981689453,15.619999885559082 147.1699981689453,13.789999961853027 C147.1699981689453,11.720000267028809 148.7100067138672,11.119999885559082 151.08999633789062,10.670000076293945 C151.08999633789062,10.670000076293945 154.0500030517578,10.09000015258789 154.0500030517578,10.09000015258789 C154.02999877929688,8.430000305175781 153.27000427246094,7.610000133514404 151.77000427246094,7.610000133514404 C150.55999755859375,7.610000133514404 149.75999450683594,8.229999542236328 149.49000549316406,9.399999618530273 C149.49000549316406,9.399999618530273 147.33999633789062,9.270000457763672 147.33999633789062,9.270000457763672z M140.44000244140625,3.819999933242798 C140.44000244140625,3.819999933242798 142.50999450683594,3.819999933242798 142.50999450683594,3.819999933242798 C142.50999450683594,3.819999933242798 142.50999450683594,6.159999847412109 142.50999450683594,6.159999847412109 C142.50999450683594,6.159999847412109 145.22999572753906,6.159999847412109 145.22999572753906,6.159999847412109 C145.22999572753906,6.159999847412109 145.22999572753906,7.840000152587891 145.22999572753906,7.840000152587891 C145.22999572753906,7.840000152587891 142.50999450683594,7.840000152587891 142.50999450683594,7.840000152587891 C142.50999450683594,7.840000152587891 142.50999450683594,13.539999961853027 142.50999450683594,13.539999961853027 C142.50999450683594,14.380000114440918 142.91000366210938,14.800000190734863 143.7100067138672,14.800000190734863 C143.7100067138672,14.800000190734863 145.2100067138672,14.800000190734863 145.2100067138672,14.800000190734863 C145.2100067138672,14.800000190734863 145.2100067138672,16.5 145.2100067138672,16.5 C145.2100067138672,16.5 143.5,16.5 143.5,16.5 C141.50999450683594,16.5 140.44000244140625,15.470000267028809 140.44000244140625,13.539999961853027 C140.44000244140625,13.539999961853027 140.44000244140625,7.840000152587891 140.44000244140625,7.840000152587891 C140.44000244140625,7.840000152587891 138.86000061035156,7.840000152587891 138.86000061035156,7.840000152587891 C138.86000061035156,7.840000152587891 138.86000061035156,6.159999847412109 138.86000061035156,6.159999847412109 C138.86000061035156,6.159999847412109 140.44000244140625,6.159999847412109 140.44000244140625,6.159999847412109 C140.44000244140625,6.159999847412109 140.44000244140625,3.819999933242798 140.44000244140625,3.819999933242798z M129.82000732421875,10.380000114440918 C129.82000732421875,10.380000114440918 135.02000427246094,10.380000114440918 135.02000427246094,10.380000114440918 C134.7899932861328,8.40999984741211 133.6999969482422,7.690000057220459 132.52999877929688,7.690000057220459 C131.02999877929688,7.690000057220459 130.0500030517578,8.680000305175781 129.82000732421875,10.380000114440918 C129.82000732421875,10.380000114440918 129.82000732421875,10.380000114440918 129.82000732421875,10.380000114440918z M127.58999633789062,11.329999923706055 C127.58999633789062,8.050000190734863 129.52999877929688,5.929999828338623 132.52999877929688,5.929999828338623 C135.00999450683594,5.929999828338623 137.08999633789062,7.590000152587891 137.19000244140625,11.25 C137.19000244140625,11.25 137.2100067138672,11.920000076293945 137.2100067138672,11.920000076293945 C137.2100067138672,11.920000076293945 129.77999877929688,11.920000076293945 129.77999877929688,11.920000076293945 C129.9199981689453,13.850000381469727 130.91000366210938,14.979999542236328 132.52999877929688,14.979999542236328 C133.5500030517578,14.979999542236328 134.47999572753906,14.380000114440918 134.88999938964844,13.380000114440918 C134.88999938964844,13.380000114440918 137.0500030517578,13.539999961853027 137.0500030517578,13.539999961853027 C136.44000244140625,15.510000228881836 134.63999938964844,16.729999542236328 132.52999877929688,16.729999542236328 C129.52999877929688,16.729999542236328 127.58999633789062,14.609999656677246 127.58999633789062,11.329999923706055 C127.58999633789062,11.329999923706055 127.58999633789062,11.329999923706055 127.58999633789062,11.329999923706055z M117.45999908447266,11.329999923706055 C117.45999908447266,13.550000190734863 118.55000305175781,14.960000038146973 120.20999908447266,14.960000038146973 C121.91000366210938,14.960000038146973 122.9800033569336,13.550000190734863 122.9800033569336,11.329999923706055 C122.9800033569336,9.069999694824219 121.91000366210938,7.650000095367432 120.20999908447266,7.650000095367432 C118.52999877929688,7.650000095367432 117.45999908447266,9.069999694824219 117.45999908447266,11.329999923706055 C117.45999908447266,11.329999923706055 117.45999908447266,11.329999923706055 117.45999908447266,11.329999923706055z M124.88999938964844,2.6600000858306885 C124.88999938964844,2.6600000858306885 124.88999938964844,16.5 124.88999938964844,16.5 C124.88999938964844,16.5 122.95999908447266,16.5 122.95999908447266,16.5 C122.95999908447266,16.5 122.91000366210938,15.020000457763672 122.91000366210938,15.020000457763672 C122.31999969482422,16.06999969482422 121.11000061035156,16.729999542236328 119.69000244140625,16.729999542236328 C117,16.729999542236328 115.31999969482422,14.649999618530273 115.31999969482422,11.329999923706055 C115.31999969482422,8.010000228881836 117,5.929999828338623 119.69000244140625,5.929999828338623 C121.02999877929688,5.929999828338623 122.23999786376953,6.550000190734863 122.83000183105469,7.550000190734863 C122.83000183105469,7.550000190734863 122.83000183105469,2.6600000858306885 122.83000183105469,2.6600000858306885 C122.83000183105469,2.6600000858306885 124.88999938964844,2.6600000858306885 124.88999938964844,2.6600000858306885z M104.58000183105469,2.6600000858306885 C104.58000183105469,2.6600000858306885 106.63999938964844,2.6600000858306885 106.63999938964844,2.6600000858306885 C106.63999938964844,2.6600000858306885 106.63999938964844,14.100000381469727 106.63999938964844,14.100000381469727 C106.63999938964844,14.569999694824219 106.88999938964844,14.800000190734863 107.33999633789062,14.800000190734863 C107.33999633789062,14.800000190734863 108.18000030517578,14.800000190734863 108.18000030517578,14.800000190734863 C108.18000030517578,14.800000190734863 108.18000030517578,16.5 108.18000030517578,16.5 C108.18000030517578,16.5 106.9000015258789,16.5 106.9000015258789,16.5 C105.51000213623047,16.5 104.58000183105469,15.600000381469727 104.58000183105469,14.199999809265137 C104.58000183105469,14.199999809265137 104.58000183105469,2.6600000858306885 104.58000183105469,2.6600000858306885z M99.13999938964844,4.639999866485596 C99.13999938964844,4.639999866485596 99.13999938964844,2.680000066757202 99.13999938964844,2.680000066757202 C99.13999938964844,2.680000066757202 101.30000305175781,2.680000066757202 101.30000305175781,2.680000066757202 C101.30000305175781,2.680000066757202 101.30000305175781,4.639999866485596 101.30000305175781,4.639999866485596 C101.30000305175781,4.639999866485596 99.13999938964844,4.639999866485596 99.13999938964844,4.639999866485596z M99.18000030517578,6.159999847412109 C99.18000030517578,6.159999847412109 101.25,6.159999847412109 101.25,6.159999847412109 C101.25,6.159999847412109 101.25,16.5 101.25,16.5 C101.25,16.5 99.18000030517578,16.5 99.18000030517578,16.5 C99.18000030517578,16.5 99.18000030517578,6.159999847412109 99.18000030517578,6.159999847412109z M88.83000183105469,13.75 C88.83000183105469,14.510000228881836 89.48999786376953,15.140000343322754 90.86000061035156,15.140000343322754 C92.4000015258789,15.119999885559082 93.61000061035156,14.020000457763672 93.61000061035156,11.800000190734863 C93.61000061035156,11.800000190734863 93.61000061035156,11.65999984741211 93.61000061035156,11.65999984741211 C93.61000061035156,11.65999984741211 91.4000015258789,12.050000190734863 91.4000015258789,12.050000190734863 C89.9800033569336,12.300000190734863 88.83000183105469,12.449999809265137 88.83000183105469,13.75 C88.83000183105469,13.75 88.83000183105469,13.75 88.83000183105469,13.75z M86.86000061035156,9.270000457763672 C87.2699966430664,7.179999828338623 88.91000366210938,5.929999828338623 91.29000091552734,5.929999828338623 C94.08999633789062,5.929999828338623 95.62999725341797,7.489999771118164 95.62999725341797,10.319999694824219 C95.62999725341797,10.319999694824219 95.62999725341797,14.15999984741211 95.62999725341797,14.15999984741211 C95.62999725341797,14.6899995803833 95.86000061035156,14.880000114440918 96.2699966430664,14.880000114440918 C96.2699966430664,14.880000114440918 96.68000030517578,14.880000114440918 96.68000030517578,14.880000114440918 C96.68000030517578,14.880000114440918 96.68000030517578,16.5 96.68000030517578,16.5 C96.68000030517578,16.5 96.04000091552734,16.5 96.04000091552734,16.5 C95.0999984741211,16.520000457763672 93.83000183105469,16.360000610351562 93.73999786376953,14.899999618530273 C93.2699966430664,15.890000343322754 92.12000274658203,16.729999542236328 90.41000366210938,16.729999542236328 C88.31999969482422,16.729999542236328 86.68000030517578,15.619999885559082 86.68000030517578,13.789999961853027 C86.68000030517578,11.720000267028809 88.22000122070312,11.119999885559082 90.5999984741211,10.670000076293945 C90.5999984741211,10.670000076293945 93.56999969482422,10.09000015258789 93.56999969482422,10.09000015258789 C93.55000305175781,8.430000305175781 92.79000091552734,7.610000133514404 91.29000091552734,7.610000133514404 C90.08000183105469,7.610000133514404 89.2699966430664,8.229999542236328 89,9.399999618530273 C89,9.399999618530273 86.86000061035156,9.270000457763672 86.86000061035156,9.270000457763672z M69.8499984741211,6.159999847412109 C69.8499984741211,6.159999847412109 71.75,6.159999847412109 71.75,6.159999847412109 C71.75,6.159999847412109 71.77999877929688,7.860000133514404 71.77999877929688,7.860000133514404 C72.29000091552734,6.630000114440918 73.3499984741211,5.929999828338623 74.7300033569336,5.929999828338623 C76.20999908447266,5.929999828338623 77.27999877929688,6.710000038146973 77.7300033569336,8.069999694824219 C78.19999694824219,6.690000057220459 79.2699966430664,5.929999828338623 80.83000183105469,5.929999828338623 C82.91999816894531,5.929999828338623 84.16000366210938,7.329999923706055 84.16000366210938,9.850000381469727 C84.16000366210938,9.850000381469727 84.16000366210938,16.5 84.16000366210938,16.5 C84.16000366210938,16.5 82.0999984741211,16.5 82.0999984741211,16.5 C82.0999984741211,16.5 82.0999984741211,10.489999771118164 82.0999984741211,10.489999771118164 C82.0999984741211,8.65999984741211 81.45999908447266,7.670000076293945 80.29000091552734,7.670000076293945 C78.80999755859375,7.670000076293945 77.9800033569336,8.699999809265137 77.9800033569336,10.489999771118164 C77.9800033569336,10.489999771118164 77.9800033569336,16.5 77.9800033569336,16.5 C77.9800033569336,16.5 76.04000091552734,16.5 76.04000091552734,16.5 C76.04000091552734,16.5 76.04000091552734,10.489999771118164 76.04000091552734,10.489999771118164 C76.04000091552734,8.699999809265137 75.37000274658203,7.670000076293945 74.22000122070312,7.670000076293945 C72.76000213623047,7.670000076293945 71.91999816894531,8.699999809265137 71.91999816894531,10.489999771118164 C71.91999816894531,10.489999771118164 71.91999816894531,16.5 71.91999816894531,16.5 C71.91999816894531,16.5 69.8499984741211,16.5 69.8499984741211,16.5 C69.8499984741211,16.5 69.8499984741211,6.159999847412109 69.8499984741211,6.159999847412109z M59.86000061035156,10.380000114440918 C59.86000061035156,10.380000114440918 65.06999969482422,10.380000114440918 65.06999969482422,10.380000114440918 C64.83999633789062,8.40999984741211 63.7400016784668,7.690000057220459 62.56999969482422,7.690000057220459 C61.06999969482422,7.690000057220459 60.09000015258789,8.680000305175781 59.86000061035156,10.380000114440918 C59.86000061035156,10.380000114440918 59.86000061035156,10.380000114440918 59.86000061035156,10.380000114440918z M57.63999938964844,11.329999923706055 C57.63999938964844,8.050000190734863 59.56999969482422,5.929999828338623 62.56999969482422,5.929999828338623 C65.05000305175781,5.929999828338623 67.12999725341797,7.590000152587891 67.2300033569336,11.25 C67.2300033569336,11.25 67.25,11.920000076293945 67.25,11.920000076293945 C67.25,11.920000076293945 59.81999969482422,11.920000076293945 59.81999969482422,11.920000076293945 C59.959999084472656,13.850000381469727 60.95000076293945,14.979999542236328 62.56999969482422,14.979999542236328 C63.59000015258789,14.979999542236328 64.5199966430664,14.380000114440918 64.93000030517578,13.380000114440918 C64.93000030517578,13.380000114440918 67.0999984741211,13.539999961853027 67.0999984741211,13.539999961853027 C66.5,15.510000228881836 64.68000030517578,16.729999542236328 62.56999969482422,16.729999542236328 C59.56999969482422,16.729999542236328 57.63999938964844,14.609999656677246 57.63999938964844,11.329999923706055 C57.63999938964844,11.329999923706055 57.63999938964844,11.329999923706055 57.63999938964844,11.329999923706055z M44.970001220703125,6.159999847412109 C44.970001220703125,6.159999847412109 46.869998931884766,6.159999847412109 46.869998931884766,6.159999847412109 C46.869998931884766,6.159999847412109 46.93000030517578,8.109999656677246 46.93000030517578,8.109999656677246 C47.29999923706055,6.789999961853027 48.06999969482422,6.159999847412109 49.400001525878906,6.159999847412109 C49.400001525878906,6.159999847412109 50.38999938964844,6.159999847412109 50.38999938964844,6.159999847412109 C50.38999938964844,6.159999847412109 50.38999938964844,7.860000133514404 50.38999938964844,7.860000133514404 C50.38999938964844,7.860000133514404 49.380001068115234,7.860000133514404 49.380001068115234,7.860000133514404 C47.7599983215332,7.860000133514404 47.040000915527344,8.760000228881836 47.040000915527344,10.470000267028809 C47.040000915527344,10.470000267028809 47.040000915527344,16.5 47.040000915527344,16.5 C47.040000915527344,16.5 44.970001220703125,16.5 44.970001220703125,16.5 C44.970001220703125,16.5 44.970001220703125,6.159999847412109 44.970001220703125,6.159999847412109z M34.9900016784668,10.380000114440918 C34.9900016784668,10.380000114440918 40.189998626708984,10.380000114440918 40.189998626708984,10.380000114440918 C39.959999084472656,8.40999984741211 38.869998931884766,7.690000057220459 37.70000076293945,7.690000057220459 C36.20000076293945,7.690000057220459 35.220001220703125,8.680000305175781 34.9900016784668,10.380000114440918 C34.9900016784668,10.380000114440918 34.9900016784668,10.380000114440918 34.9900016784668,10.380000114440918z M32.7599983215332,11.329999923706055 C32.7599983215332,8.050000190734863 34.70000076293945,5.929999828338623 37.70000076293945,5.929999828338623 C40.18000030517578,5.929999828338623 42.27000045776367,7.590000152587891 42.36000061035156,11.25 C42.36000061035156,11.25 42.380001068115234,11.920000076293945 42.380001068115234,11.920000076293945 C42.380001068115234,11.920000076293945 34.95000076293945,11.920000076293945 34.95000076293945,11.920000076293945 C35.08000183105469,13.850000381469727 36.08000183105469,14.979999542236328 37.70000076293945,14.979999542236328 C38.720001220703125,14.979999542236328 39.63999938964844,14.380000114440918 40.04999923706055,13.380000114440918 C40.04999923706055,13.380000114440918 42.220001220703125,13.539999961853027 42.220001220703125,13.539999961853027 C41.61000061035156,15.510000228881836 39.810001373291016,16.729999542236328 37.70000076293945,16.729999542236328 C34.70000076293945,16.729999542236328 32.7599983215332,14.609999656677246 32.7599983215332,11.329999923706055 C32.7599983215332,11.329999923706055 32.7599983215332,11.329999923706055 32.7599983215332,11.329999923706055z M26.299999237060547,3.819999933242798 C26.299999237060547,3.819999933242798 28.3700008392334,3.819999933242798 28.3700008392334,3.819999933242798 C28.3700008392334,3.819999933242798 28.3700008392334,6.159999847412109 28.3700008392334,6.159999847412109 C28.3700008392334,6.159999847412109 31.100000381469727,6.159999847412109 31.100000381469727,6.159999847412109 C31.100000381469727,6.159999847412109 31.100000381469727,7.840000152587891 31.100000381469727,7.840000152587891 C31.100000381469727,7.840000152587891 28.3700008392334,7.840000152587891 28.3700008392334,7.840000152587891 C28.3700008392334,7.840000152587891 28.3700008392334,13.539999961853027 28.3700008392334,13.539999961853027 C28.3700008392334,14.380000114440918 28.780000686645508,14.800000190734863 29.579999923706055,14.800000190734863 C29.579999923706055,14.800000190734863 31.079999923706055,14.800000190734863 31.079999923706055,14.800000190734863 C31.079999923706055,14.800000190734863 31.079999923706055,16.5 31.079999923706055,16.5 C31.079999923706055,16.5 29.360000610351562,16.5 29.360000610351562,16.5 C27.3700008392334,16.5 26.299999237060547,15.470000267028809 26.299999237060547,13.539999961853027 C26.299999237060547,13.539999961853027 26.299999237060547,7.840000152587891 26.299999237060547,7.840000152587891 C26.299999237060547,7.840000152587891 24.719999313354492,7.840000152587891 24.719999313354492,7.840000152587891 C24.719999313354492,7.840000152587891 24.719999313354492,6.159999847412109 24.719999313354492,6.159999847412109 C24.719999313354492,6.159999847412109 26.299999237060547,6.159999847412109 26.299999237060547,6.159999847412109 C26.299999237060547,6.159999847412109 26.299999237060547,3.819999933242798 26.299999237060547,3.819999933242798z M13.729999542236328,6.159999847412109 C13.729999542236328,6.159999847412109 15.630000114440918,6.159999847412109 15.630000114440918,6.159999847412109 C15.630000114440918,6.159999847412109 15.680000305175781,7.900000095367432 15.680000305175781,7.900000095367432 C16.209999084472656,6.510000228881836 17.420000076293945,5.929999828338623 18.81999969482422,5.929999828338623 C21.139999389648438,5.929999828338623 22.34000015258789,7.590000152587891 22.34000015258789,9.850000381469727 C22.34000015258789,9.850000381469727 22.34000015258789,16.5 22.34000015258789,16.5 C22.34000015258789,16.5 20.270000457763672,16.5 20.270000457763672,16.5 C20.270000457763672,16.5 20.270000457763672,10.489999771118164 20.270000457763672,10.489999771118164 C20.270000457763672,8.65999984741211 19.709999084472656,7.670000076293945 18.260000228881836,7.670000076293945 C16.760000228881836,7.670000076293945 15.800000190734863,8.65999984741211 15.800000190734863,10.489999771118164 C15.800000190734863,10.489999771118164 15.800000190734863,16.5 15.800000190734863,16.5 C15.800000190734863,16.5 13.729999542236328,16.5 13.729999542236328,16.5 C13.729999542236328,16.5 13.729999542236328,6.159999847412109 13.729999542236328,6.159999847412109z M1.6799999475479126,2.6600000858306885 C1.6799999475479126,2.6600000858306885 10.6899995803833,2.6600000858306885 10.6899995803833,2.6600000858306885 C10.6899995803833,2.6600000858306885 10.6899995803833,4.590000152587891 10.6899995803833,4.590000152587891 C10.6899995803833,4.590000152587891 3.7799999713897705,4.590000152587891 3.7799999713897705,4.590000152587891 C3.7799999713897705,4.590000152587891 3.7799999713897705,8.619999885559082 3.7799999713897705,8.619999885559082 C3.7799999713897705,8.619999885559082 10.449999809265137,8.619999885559082 10.449999809265137,8.619999885559082 C10.449999809265137,8.619999885559082 10.449999809265137,10.489999771118164 10.449999809265137,10.489999771118164 C10.449999809265137,10.489999771118164 3.7799999713897705,10.489999771118164 3.7799999713897705,10.489999771118164 C3.7799999713897705,10.489999771118164 3.7799999713897705,14.569999694824219 3.7799999713897705,14.569999694824219 C3.7799999713897705,14.569999694824219 10.84000015258789,14.569999694824219 10.84000015258789,14.569999694824219 C10.84000015258789,14.569999694824219 10.84000015258789,16.5 10.84000015258789,16.5 C10.84000015258789,16.5 1.6799999475479126,16.5 1.6799999475479126,16.5 C1.6799999475479126,16.5 1.6799999475479126,2.6600000858306885 1.6799999475479126,2.6600000858306885z"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M241,0 C241,0 0,0 0,0 C0,0 0,26 0,26 C0,26 241,26 241,26 C241,26 241,0 241,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,261,326)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <path
                  fill="url(#__lottie_element_2583)"
                  fillOpacity={1}
                  d=" M8,0 C8,0 0,0 0,0 C0,0 0,38 0,38 C0,38 8,38 8,38 C8,38 8,0 8,0z"
                />
              </g>
              <g
                clipPath="url(#__lottie_element_2586)"
                transform="matrix(1,0,0,1,109,74)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2863)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    mask="url(#__lottie_element_2870_1)"
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_2867)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                    >
                      <g
                        clipPath="url(#__lottie_element_2876)"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g
                          transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <g
                              opacity={1}
                              transform="matrix(0.75,0,0,0.75,0,0)"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity={0}
                                strokeMiterlimit={4}
                                stroke="rgb(28,33,53)"
                                strokeOpacity={1}
                                strokeWidth={2}
                                d=" M156,0 C156,0 156,4 156,4 C156,19.459999084472656 143.4600067138672,32 128,32 C128,32 29,32 29,32 C13.539999961853027,32 1,44.540000915527344 1,60 C1,60 1,70 1,70 C1,85.45999908447266 13.539999961853027,98 29,98 C29,98 290.5,98 290.5,98 C304.5799865722656,98 316,109.41999816894531 316,123.5 C316,137.5800018310547 304.5799865722656,149 290.5,149 C290.5,149 184,149 184,149 C168.5399932861328,149 156,161.5399932861328 156,177 C156,177 156,291 156,291"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={0}
                            d=" M317,0 C317,0 0,0 0,0 C0,0 0,291 0,291 C0,291 317,291 317,291 C317,291 317,0 317,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2591)"
                transform="matrix(1,0,0,1,35,74)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  mask="url(#__lottie_element_2902_1)"
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2899)"
                    transform="matrix(1,0,0,1,-13,-63)"
                    opacity={1}
                  >
                    <g
                      filter="url(#__lottie_element_2910)"
                      transform="matrix(1,0,0,1,234.04348754882812,46.64434051513672)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(100,107,141)"
                          fillOpacity={1}
                          d=" M14.5,0 C22.50255012512207,0 29,6.49744987487793 29,14.5 C29,22.50255012512207 22.50255012512207,29 14.5,29 C6.49744987487793,29 0,22.50255012512207 0,14.5 C0,6.49744987487793 6.49744987487793,0 14.5,0z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M41,-12 C41,-12 -12,-12 -12,-12 C-12,-12 -12,41 -12,41 C-12,41 41,41 41,41 C41,41 41,-12 41,-12z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2597)"
                transform="matrix(1,0,0,1,-41,77)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2945)"
                  transform="matrix(1.0000019073486328,0,0,1.0000019073486328,14.999725341796875,8.999832153320312)"
                  opacity="1.000003741494873"
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M160,25 C160,11.202500343322754 148.79750061035156,0 135,0 C135,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 135,50 135,50 C148.79750061035156,50 160,38.79750061035156 160,25 C160,25 160,25 160,25z"
                    />
                  </g>
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(29,31,53)"
                        strokeOpacity={1}
                        strokeWidth={2}
                        d=" M160,25 C160,11.202500343322754 148.79750061035156,0 135,0 C135,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 135,50 135,50 C148.79750061035156,50 160,38.79750061035156 160,25 C160,25 160,25 160,25z"
                      />
                    </g>
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M161,-1 C161,-1 -1,-1 -1,-1 C-1,-1 -1,51 -1,51 C-1,51 161,51 161,51 C161,51 161,-1 161,-1z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2957)"
                    filter="url(#__lottie_element_2959)"
                    transform="matrix(1,0,0,1,25,13)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M232,0 C232,0 0,0 0,0 C0,0 0,146 0,146 C0,146 232,146 232,146 C232,146 232,0 232,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2964)"
                      transform="matrix(1,0,0,1,60,60)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(147,163,183)"
                              fillOpacity={1}
                              d=" M75.0999984741211,8.15999984741211 C75.0999984741211,8.15999984741211 75.0999984741211,7.050000190734863 75.0999984741211,7.050000190734863 C75.0999984741211,7.050000190734863 82.1500015258789,7.050000190734863 82.1500015258789,7.050000190734863 C82.1500015258789,7.050000190734863 82.1500015258789,8.15999984741211 82.1500015258789,8.15999984741211 C82.1500015258789,8.15999984741211 75.0999984741211,8.15999984741211 75.0999984741211,8.15999984741211z M80.0199966430664,15 C79.25,15 78.68000030517578,14.819999694824219 78.30000305175781,14.460000038146973 C77.91999816894531,14.100000381469727 77.7300033569336,13.550000190734863 77.7300033569336,12.8100004196167 C77.7300033569336,12.8100004196167 77.7300033569336,5.190000057220459 77.7300033569336,5.190000057220459 C77.7300033569336,5.190000057220459 78.98999786376953,5.190000057220459 78.98999786376953,5.190000057220459 C78.98999786376953,5.190000057220459 78.98999786376953,12.8100004196167 78.98999786376953,12.8100004196167 C78.98999786376953,13.180000305175781 79.06999969482422,13.460000038146973 79.23999786376953,13.640000343322754 C79.41000366210938,13.8100004196167 79.66999816894531,13.890000343322754 80.0199966430664,13.890000343322754 C80.0199966430664,13.890000343322754 82.1500015258789,13.890000343322754 82.1500015258789,13.890000343322754 C82.1500015258789,13.890000343322754 82.1500015258789,15 82.1500015258789,15 C82.1500015258789,15 80.0199966430664,15 80.0199966430664,15z M66.31999969482422,15 C66.31999969482422,15 66.31999969482422,7.050000190734863 66.31999969482422,7.050000190734863 C66.31999969482422,7.050000190734863 67.47000122070312,7.050000190734863 67.47000122070312,7.050000190734863 C67.47000122070312,7.050000190734863 67.5199966430664,9.069999694824219 67.5199966430664,9.069999694824219 C67.5199966430664,9.069999694824219 67.37000274658203,8.9399995803833 67.37000274658203,8.9399995803833 C67.47000122070312,8.470000267028809 67.6500015258789,8.09000015258789 67.91000366210938,7.789999961853027 C68.18000030517578,7.480000019073486 68.5,7.239999771118164 68.87000274658203,7.090000152587891 C69.23999786376953,6.940000057220459 69.62999725341797,6.869999885559082 70.04000091552734,6.869999885559082 C70.6500015258789,6.869999885559082 71.1500015258789,7 71.55000305175781,7.269999980926514 C71.95999908447266,7.539999961853027 72.2699966430664,7.909999847412109 72.4800033569336,8.369999885559082 C72.69000244140625,8.819999694824219 72.80000305175781,9.329999923706055 72.80000305175781,9.890000343322754 C72.80000305175781,9.890000343322754 72.80000305175781,15 72.80000305175781,15 C72.80000305175781,15 71.54000091552734,15 71.54000091552734,15 C71.54000091552734,15 71.54000091552734,10.25 71.54000091552734,10.25 C71.54000091552734,9.510000228881836 71.4000015258789,8.949999809265137 71.11000061035156,8.569999694824219 C70.81999969482422,8.180000305175781 70.37000274658203,7.980000019073486 69.7699966430664,7.980000019073486 C69.36000061035156,7.980000019073486 68.98999786376953,8.069999694824219 68.66000366210938,8.25 C68.33000183105469,8.420000076293945 68.05999755859375,8.680000305175781 67.86000061035156,9.020000457763672 C67.66999816894531,9.350000381469727 67.58000183105469,9.760000228881836 67.58000183105469,10.25 C67.58000183105469,10.25 67.58000183105469,15 67.58000183105469,15 C67.58000183105469,15 66.31999969482422,15 66.31999969482422,15z M58.06999969482422,10.300000190734863 C58.06999969482422,10.300000190734863 62.47999954223633,10.300000190734863 62.47999954223633,10.300000190734863 C62.41999816894531,9.529999732971191 62.20000076293945,8.970000267028809 61.810001373291016,8.609999656677246 C61.41999816894531,8.25 60.93000030517578,8.069999694824219 60.34000015258789,8.069999694824219 C59.72999954223633,8.069999694824219 59.220001220703125,8.260000228881836 58.81999969482422,8.640000343322754 C58.43000030517578,9.010000228881836 58.18000030517578,9.5600004196167 58.06999969482422,10.300000190734863 C58.06999969482422,10.300000190734863 58.06999969482422,10.300000190734863 58.06999969482422,10.300000190734863z M60.400001525878906,15.180000305175781 C59.650001525878906,15.180000305175781 59,15.010000228881836 58.45000076293945,14.670000076293945 C57.90999984741211,14.329999923706055 57.4900016784668,13.850000381469727 57.189998626708984,13.229999542236328 C56.900001525878906,12.600000381469727 56.75,11.859999656677246 56.75,11.020000457763672 C56.75,10.180000305175781 56.900001525878906,9.460000038146973 57.189998626708984,8.84000015258789 C57.4900016784668,8.220000267028809 57.900001525878906,7.730000019073486 58.43000030517578,7.389999866485596 C58.970001220703125,7.039999961853027 59.61000061035156,6.869999885559082 60.34000015258789,6.869999885559082 C61.029998779296875,6.869999885559082 61.63999938964844,7.03000020980835 62.16999816894531,7.360000133514404 C62.70000076293945,7.679999828338623 63.11000061035156,8.149999618530273 63.40999984741211,8.770000457763672 C63.709999084472656,9.390000343322754 63.86000061035156,10.149999618530273 63.86000061035156,11.039999961853027 C63.86000061035156,11.039999961853027 63.86000061035156,11.40999984741211 63.86000061035156,11.40999984741211 C63.86000061035156,11.40999984741211 58.06999969482422,11.40999984741211 58.06999969482422,11.40999984741211 C58.119998931884766,12.260000228881836 58.349998474121094,12.90999984741211 58.75,13.34000015258789 C59.15999984741211,13.770000457763672 59.709999084472656,13.979999542236328 60.400001525878906,13.979999542236328 C60.91999816894531,13.979999542236328 61.349998474121094,13.859999656677246 61.68000030517578,13.619999885559082 C62.02000045776367,13.369999885559082 62.25,13.039999961853027 62.380001068115234,12.640000343322754 C62.380001068115234,12.640000343322754 63.72999954223633,12.75 63.72999954223633,12.75 C63.52000045776367,13.460000038146973 63.119998931884766,14.039999961853027 62.529998779296875,14.5 C61.95000076293945,14.949999809265137 61.2400016784668,15.180000305175781 60.400001525878906,15.180000305175781 C60.400001525878906,15.180000305175781 60.400001525878906,15.180000305175781 60.400001525878906,15.180000305175781z M50.75,5.800000190734863 C50.75,5.800000190734863 50.75,4.340000152587891 50.75,4.340000152587891 C50.75,4.340000152587891 52.06999969482422,4.340000152587891 52.06999969482422,4.340000152587891 C52.06999969482422,4.340000152587891 52.06999969482422,5.800000190734863 52.06999969482422,5.800000190734863 C52.06999969482422,5.800000190734863 50.75,5.800000190734863 50.75,5.800000190734863z M47.81999969482422,8.15999984741211 C47.81999969482422,8.15999984741211 47.81999969482422,7.050000190734863 47.81999969482422,7.050000190734863 C47.81999969482422,7.050000190734863 52.130001068115234,7.050000190734863 52.130001068115234,7.050000190734863 C52.130001068115234,7.050000190734863 52.130001068115234,8.15999984741211 52.130001068115234,8.15999984741211 C52.130001068115234,8.15999984741211 47.81999969482422,8.15999984741211 47.81999969482422,8.15999984741211z M47.66999816894531,15 C47.66999816894531,15 47.66999816894531,13.890000343322754 47.66999816894531,13.890000343322754 C47.66999816894531,13.890000343322754 54.869998931884766,13.890000343322754 54.869998931884766,13.890000343322754 C54.869998931884766,13.890000343322754 54.869998931884766,15 54.869998931884766,15 C54.869998931884766,15 47.66999816894531,15 47.66999816894531,15z M50.869998931884766,15 C50.869998931884766,15 50.869998931884766,7.050000190734863 50.869998931884766,7.050000190734863 C50.869998931884766,7.050000190734863 52.130001068115234,7.050000190734863 52.130001068115234,7.050000190734863 C52.130001068115234,7.050000190734863 52.130001068115234,15 52.130001068115234,15 C52.130001068115234,15 50.869998931884766,15 50.869998931884766,15z M41.88999938964844,13.979999542236328 C42.58000183105469,13.979999542236328 43.119998931884766,13.720000267028809 43.5099983215332,13.199999809265137 C43.90999984741211,12.680000305175781 44.11000061035156,11.949999809265137 44.11000061035156,11.020000457763672 C44.11000061035156,10.09000015258789 43.90999984741211,9.369999885559082 43.5099983215332,8.850000381469727 C43.119998931884766,8.329999923706055 42.58000183105469,8.069999694824219 41.88999938964844,8.069999694824219 C41.43000030517578,8.069999694824219 41.029998779296875,8.180000305175781 40.689998626708984,8.399999618530273 C40.36000061035156,8.619999885559082 40.099998474121094,8.949999809265137 39.90999984741211,9.390000343322754 C39.72999954223633,9.829999923706055 39.63999938964844,10.369999885559082 39.63999938964844,11.020000457763672 C39.63999938964844,11.670000076293945 39.72999954223633,12.220000267028809 39.90999984741211,12.65999984741211 C40.09000015258789,13.100000381469727 40.349998474121094,13.430000305175781 40.689998626708984,13.649999618530273 C41.029998779296875,13.869999885559082 41.43000030517578,13.979999542236328 41.88999938964844,13.979999542236328 C41.88999938964844,13.979999542236328 41.88999938964844,13.979999542236328 41.88999938964844,13.979999542236328z M38.380001068115234,17.25 C38.380001068115234,17.25 38.380001068115234,7.050000190734863 38.380001068115234,7.050000190734863 C38.380001068115234,7.050000190734863 39.54999923706055,7.050000190734863 39.54999923706055,7.050000190734863 C39.54999923706055,7.050000190734863 39.58000183105469,8.850000381469727 39.58000183105469,8.850000381469727 C39.58000183105469,8.850000381469727 39.400001525878906,8.760000228881836 39.400001525878906,8.760000228881836 C39.599998474121094,8.140000343322754 39.93000030517578,7.670000076293945 40.38999938964844,7.349999904632568 C40.86000061035156,7.03000020980835 41.400001525878906,6.869999885559082 42.0099983215332,6.869999885559082 C42.79999923706055,6.869999885559082 43.439998626708984,7.059999942779541 43.939998626708984,7.449999809265137 C44.45000076293945,7.840000152587891 44.83000183105469,8.350000381469727 45.06999969482422,8.979999542236328 C45.310001373291016,9.609999656677246 45.43000030517578,10.289999961853027 45.43000030517578,11.020000457763672 C45.43000030517578,11.75 45.310001373291016,12.4399995803833 45.06999969482422,13.069999694824219 C44.83000183105469,13.699999809265137 44.45000076293945,14.199999809265137 43.939998626708984,14.59000015258789 C43.439998626708984,14.979999542236328 42.79999923706055,15.180000305175781 42.0099983215332,15.180000305175781 C41.599998474121094,15.180000305175781 41.209999084472656,15.109999656677246 40.849998474121094,14.970000267028809 C40.5,14.829999923706055 40.20000076293945,14.640000343322754 39.95000076293945,14.390000343322754 C39.709999084472656,14.140000343322754 39.54999923706055,13.84000015258789 39.459999084472656,13.5 C39.459999084472656,13.5 39.63999938964844,13.289999961853027 39.63999938964844,13.289999961853027 C39.63999938964844,13.289999961853027 39.63999938964844,17.25 39.63999938964844,17.25 C39.63999938964844,17.25 38.380001068115234,17.25 38.380001068115234,17.25z M32.15999984741211,5.800000190734863 C32.15999984741211,5.800000190734863 32.15999984741211,4.340000152587891 32.15999984741211,4.340000152587891 C32.15999984741211,4.340000152587891 33.47999954223633,4.340000152587891 33.47999954223633,4.340000152587891 C33.47999954223633,4.340000152587891 33.47999954223633,5.800000190734863 33.47999954223633,5.800000190734863 C33.47999954223633,5.800000190734863 32.15999984741211,5.800000190734863 32.15999984741211,5.800000190734863z M29.229999542236328,8.15999984741211 C29.229999542236328,8.15999984741211 29.229999542236328,7.050000190734863 29.229999542236328,7.050000190734863 C29.229999542236328,7.050000190734863 33.540000915527344,7.050000190734863 33.540000915527344,7.050000190734863 C33.540000915527344,7.050000190734863 33.540000915527344,8.15999984741211 33.540000915527344,8.15999984741211 C33.540000915527344,8.15999984741211 29.229999542236328,8.15999984741211 29.229999542236328,8.15999984741211z M29.079999923706055,15 C29.079999923706055,15 29.079999923706055,13.890000343322754 29.079999923706055,13.890000343322754 C29.079999923706055,13.890000343322754 36.279998779296875,13.890000343322754 36.279998779296875,13.890000343322754 C36.279998779296875,13.890000343322754 36.279998779296875,15 36.279998779296875,15 C36.279998779296875,15 29.079999923706055,15 29.079999923706055,15z M32.279998779296875,15 C32.279998779296875,15 32.279998779296875,7.050000190734863 32.279998779296875,7.050000190734863 C32.279998779296875,7.050000190734863 33.540000915527344,7.050000190734863 33.540000915527344,7.050000190734863 C33.540000915527344,7.050000190734863 33.540000915527344,15 33.540000915527344,15 C33.540000915527344,15 32.279998779296875,15 32.279998779296875,15z M23.299999237060547,15.180000305175781 C22.559999465942383,15.180000305175781 21.90999984741211,15.010000228881836 21.360000610351562,14.670000076293945 C20.809999465942383,14.329999923706055 20.389999389648438,13.850000381469727 20.09000015258789,13.229999542236328 C19.790000915527344,12.600000381469727 19.639999389648438,11.859999656677246 19.639999389648438,11.020000457763672 C19.639999389648438,10.180000305175781 19.790000915527344,9.460000038146973 20.09000015258789,8.84000015258789 C20.389999389648438,8.220000267028809 20.809999465942383,7.730000019073486 21.360000610351562,7.389999866485596 C21.90999984741211,7.039999961853027 22.559999465942383,6.869999885559082 23.299999237060547,6.869999885559082 C23.889999389648438,6.869999885559082 24.420000076293945,6.980000019073486 24.8799991607666,7.199999809265137 C25.34000015258789,7.409999847412109 25.709999084472656,7.71999979019165 26.010000228881836,8.130000114440918 C26.309999465942383,8.539999961853027 26.520000457763672,9.039999961853027 26.6299991607666,9.630000114440918 C26.6299991607666,9.630000114440918 25.309999465942383,9.720000267028809 25.309999465942383,9.720000267028809 C25.190000534057617,9.1899995803833 24.950000762939453,8.779999732971191 24.59000015258789,8.5 C24.239999771118164,8.210000038146973 23.809999465942383,8.069999694824219 23.299999237060547,8.069999694824219 C22.56999969482422,8.069999694824219 21.989999771118164,8.329999923706055 21.56999969482422,8.859999656677246 C21.15999984741211,9.380000114440918 20.959999084472656,10.100000381469727 20.959999084472656,11.020000457763672 C20.959999084472656,11.9399995803833 21.15999984741211,12.670000076293945 21.56999969482422,13.199999809265137 C21.989999771118164,13.720000267028809 22.56999969482422,13.979999542236328 23.299999237060547,13.979999542236328 C23.809999465942383,13.979999542236328 24.25,13.829999923706055 24.6200008392334,13.529999732971191 C25,13.229999542236328 25.25,12.779999732971191 25.3700008392334,12.180000305175781 C25.3700008392334,12.180000305175781 26.690000534057617,12.270000457763672 26.690000534057617,12.270000457763672 C26.579999923706055,12.859999656677246 26.3700008392334,13.380000114440918 26.059999465942383,13.819999694824219 C25.75,14.25 25.360000610351562,14.579999923706055 24.889999389648438,14.819999694824219 C24.420000076293945,15.0600004196167 23.889999389648438,15.180000305175781 23.299999237060547,15.180000305175781 C23.299999237060547,15.180000305175781 23.299999237060547,15.180000305175781 23.299999237060547,15.180000305175781z M11.609999656677246,10.300000190734863 C11.609999656677246,10.300000190734863 16.020000457763672,10.300000190734863 16.020000457763672,10.300000190734863 C15.960000038146973,9.529999732971191 15.729999542236328,8.970000267028809 15.34000015258789,8.609999656677246 C14.949999809265137,8.25 14.460000038146973,8.069999694824219 13.869999885559082,8.069999694824219 C13.260000228881836,8.069999694824219 12.760000228881836,8.260000228881836 12.359999656677246,8.640000343322754 C11.970000267028809,9.010000228881836 11.720000267028809,9.5600004196167 11.609999656677246,10.300000190734863 C11.609999656677246,10.300000190734863 11.609999656677246,10.300000190734863 11.609999656677246,10.300000190734863z M13.930000305175781,15.180000305175781 C13.180000305175781,15.180000305175781 12.529999732971191,15.010000228881836 11.979999542236328,14.670000076293945 C11.4399995803833,14.329999923706055 11.020000457763672,13.850000381469727 10.720000267028809,13.229999542236328 C10.430000305175781,12.600000381469727 10.289999961853027,11.859999656677246 10.289999961853027,11.020000457763672 C10.289999961853027,10.180000305175781 10.430000305175781,9.460000038146973 10.720000267028809,8.84000015258789 C11.020000457763672,8.220000267028809 11.430000305175781,7.730000019073486 11.960000038146973,7.389999866485596 C12.5,7.039999961853027 13.140000343322754,6.869999885559082 13.869999885559082,6.869999885559082 C14.5600004196167,6.869999885559082 15.170000076293945,7.03000020980835 15.699999809265137,7.360000133514404 C16.229999542236328,7.679999828338623 16.649999618530273,8.149999618530273 16.950000762939453,8.770000457763672 C17.25,9.390000343322754 17.389999389648438,10.149999618530273 17.389999389648438,11.039999961853027 C17.389999389648438,11.039999961853027 17.389999389648438,11.40999984741211 17.389999389648438,11.40999984741211 C17.389999389648438,11.40999984741211 11.609999656677246,11.40999984741211 11.609999656677246,11.40999984741211 C11.65999984741211,12.260000228881836 11.880000114440918,12.90999984741211 12.279999732971191,13.34000015258789 C12.6899995803833,13.770000457763672 13.239999771118164,13.979999542236328 13.930000305175781,13.979999542236328 C14.449999809265137,13.979999542236328 14.869999885559082,13.859999656677246 15.199999809265137,13.619999885559082 C15.539999961853027,13.369999885559082 15.779999732971191,13.039999961853027 15.90999984741211,12.640000343322754 C15.90999984741211,12.640000343322754 17.260000228881836,12.75 17.260000228881836,12.75 C17.049999237060547,13.460000038146973 16.649999618530273,14.039999961853027 16.059999465942383,14.5 C15.479999542236328,14.949999809265137 14.770000457763672,15.180000305175781 13.930000305175781,15.180000305175781 C13.930000305175781,15.180000305175781 13.930000305175781,15.180000305175781 13.930000305175781,15.180000305175781z M2.3399999141693115,9.449999809265137 C2.3399999141693115,9.449999809265137 4.289999961853027,9.449999809265137 4.289999961853027,9.449999809265137 C5.03000020980835,9.449999809265137 5.590000152587891,9.279999732971191 5.980000019073486,8.949999809265137 C6.369999885559082,8.609999656677246 6.570000171661377,8.140000343322754 6.570000171661377,7.53000020980835 C6.570000171661377,6.909999847412109 6.369999885559082,6.440000057220459 5.980000019073486,6.110000133514404 C5.590000152587891,5.78000020980835 5.03000020980835,5.610000133514404 4.289999961853027,5.610000133514404 C4.289999961853027,5.610000133514404 2.3399999141693115,5.610000133514404 2.3399999141693115,5.610000133514404 C2.3399999141693115,5.610000133514404 2.3399999141693115,9.449999809265137 2.3399999141693115,9.449999809265137z M1.0499999523162842,15 C1.0499999523162842,15 1.0499999523162842,4.349999904632568 1.0499999523162842,4.349999904632568 C1.0499999523162842,4.349999904632568 4.289999961853027,4.349999904632568 4.289999961853027,4.349999904632568 C5.409999847412109,4.349999904632568 6.300000190734863,4.630000114440918 6.949999809265137,5.199999809265137 C7.599999904632568,5.760000228881836 7.920000076293945,6.539999961853027 7.920000076293945,7.53000020980835 C7.920000076293945,8.029999732971191 7.800000190734863,8.470000267028809 7.570000171661377,8.859999656677246 C7.340000152587891,9.239999771118164 7.050000190734863,9.550000190734863 6.690000057220459,9.770000457763672 C6.329999923706055,9.989999771118164 5.960000038146973,10.109999656677246 5.579999923706055,10.140000343322754 C5.579999923706055,10.140000343322754 5.519999980926514,9.960000038146973 5.519999980926514,9.960000038146973 C6.230000019073486,10 6.760000228881836,10.170000076293945 7.110000133514404,10.470000267028809 C7.46999979019165,10.770000457763672 7.679999828338623,11.260000228881836 7.739999771118164,11.9399995803833 C7.739999771118164,11.9399995803833 8.010000228881836,15 8.010000228881836,15 C8.010000228881836,15 6.71999979019165,15 6.71999979019165,15 C6.71999979019165,15 6.460000038146973,12.109999656677246 6.460000038146973,12.109999656677246 C6.429999828338623,11.779999732971191 6.360000133514404,11.510000228881836 6.230000019073486,11.3100004196167 C6.110000133514404,11.100000381469727 5.909999847412109,10.949999809265137 5.639999866485596,10.859999656677246 C5.380000114440918,10.760000228881836 5.019999980926514,10.710000038146973 4.559999942779541,10.710000038146973 C4.559999942779541,10.710000038146973 2.3399999141693115,10.710000038146973 2.3399999141693115,10.710000038146973 C2.3399999141693115,10.710000038146973 2.3399999141693115,15 2.3399999141693115,15 C2.3399999141693115,15 1.0499999523162842,15 1.0499999523162842,15z"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M112,0 C112,0 0,0 0,0 C0,0 0,26 0,26 C0,26 112,26 112,26 C112,26 112,0 112,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2602)"
                transform="matrix(1,0,0,1,135,77)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2975)"
                  transform="matrix(1,0,0,1,13,9)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M135,25 C135,11.202500343322754 123.79750061035156,0 110,0 C110,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 110,50 110,50 C123.79750061035156,50 135,38.79750061035156 135,25 C135,25 135,25 135,25z"
                    />
                  </g>
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(29,31,53)"
                        strokeOpacity={1}
                        strokeWidth={2}
                        d=" M135,25 C135,11.202500343322754 123.79750061035156,0 110,0 C110,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 110,50 110,50 C123.79750061035156,50 135,38.79750061035156 135,25 C135,25 135,25 135,25z"
                      />
                    </g>
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M136,-1 C136,-1 -1,-1 -1,-1 C-1,-1 -1,51 -1,51 C-1,51 136,51 136,51 C136,51 136,-1 136,-1z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2987)"
                    filter="url(#__lottie_element_2989)"
                    transform="matrix(1,0,0,1,25,13)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M207,0 C207,0 0,0 0,0 C0,0 0,146 0,146 C0,146 207,146 207,146 C207,146 207,0 207,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2994)"
                      transform="matrix(1,0,0,1,60,60)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(147,163,183)"
                              fillOpacity={1}
                              d=" M58.06999969482422,10.300000190734863 C58.06999969482422,10.300000190734863 62.47999954223633,10.300000190734863 62.47999954223633,10.300000190734863 C62.41999816894531,9.529999732971191 62.20000076293945,8.970000267028809 61.810001373291016,8.609999656677246 C61.41999816894531,8.25 60.93000030517578,8.069999694824219 60.34000015258789,8.069999694824219 C59.72999954223633,8.069999694824219 59.220001220703125,8.260000228881836 58.81999969482422,8.640000343322754 C58.43000030517578,9.010000228881836 58.18000030517578,9.5600004196167 58.06999969482422,10.300000190734863 C58.06999969482422,10.300000190734863 58.06999969482422,10.300000190734863 58.06999969482422,10.300000190734863z M60.400001525878906,15.180000305175781 C59.650001525878906,15.180000305175781 59,15.010000228881836 58.45000076293945,14.670000076293945 C57.90999984741211,14.329999923706055 57.4900016784668,13.850000381469727 57.189998626708984,13.229999542236328 C56.900001525878906,12.600000381469727 56.75,11.859999656677246 56.75,11.020000457763672 C56.75,10.180000305175781 56.900001525878906,9.460000038146973 57.189998626708984,8.84000015258789 C57.4900016784668,8.220000267028809 57.900001525878906,7.730000019073486 58.43000030517578,7.389999866485596 C58.970001220703125,7.039999961853027 59.61000061035156,6.869999885559082 60.34000015258789,6.869999885559082 C61.029998779296875,6.869999885559082 61.63999938964844,7.03000020980835 62.16999816894531,7.360000133514404 C62.70000076293945,7.679999828338623 63.11000061035156,8.149999618530273 63.40999984741211,8.770000457763672 C63.709999084472656,9.390000343322754 63.86000061035156,10.149999618530273 63.86000061035156,11.039999961853027 C63.86000061035156,11.039999961853027 63.86000061035156,11.40999984741211 63.86000061035156,11.40999984741211 C63.86000061035156,11.40999984741211 58.06999969482422,11.40999984741211 58.06999969482422,11.40999984741211 C58.119998931884766,12.260000228881836 58.349998474121094,12.90999984741211 58.75,13.34000015258789 C59.15999984741211,13.770000457763672 59.709999084472656,13.979999542236328 60.400001525878906,13.979999542236328 C60.91999816894531,13.979999542236328 61.349998474121094,13.859999656677246 61.68000030517578,13.619999885559082 C62.02000045776367,13.369999885559082 62.25,13.039999961853027 62.380001068115234,12.640000343322754 C62.380001068115234,12.640000343322754 63.72999954223633,12.75 63.72999954223633,12.75 C63.52000045776367,13.460000038146973 63.119998931884766,14.039999961853027 62.529998779296875,14.5 C61.95000076293945,14.949999809265137 61.2400016784668,15.180000305175781 60.400001525878906,15.180000305175781 C60.400001525878906,15.180000305175781 60.400001525878906,15.180000305175781 60.400001525878906,15.180000305175781z M50.88999938964844,13.380000114440918 C51.56999969482422,13.380000114440918 52.119998931884766,13.149999618530273 52.529998779296875,12.680000305175781 C52.939998626708984,12.199999809265137 53.150001525878906,11.550000190734863 53.15999984741211,10.729999542236328 C53.16999816894531,10.180000305175781 53.08000183105469,9.710000038146973 52.88999938964844,9.319999694824219 C52.709999084472656,8.920000076293945 52.439998626708984,8.609999656677246 52.09000015258789,8.399999618530273 C51.75,8.180000305175781 51.349998474121094,8.069999694824219 50.88999938964844,8.069999694824219 C50.189998626708984,8.069999694824219 49.650001525878906,8.3100004196167 49.2599983215332,8.789999961853027 C48.880001068115234,9.260000228881836 48.689998626708984,9.90999984741211 48.689998626708984,10.729999542236328 C48.689998626708984,11.550000190734863 48.88999938964844,12.199999809265137 49.279998779296875,12.680000305175781 C49.68000030517578,13.149999618530273 50.209999084472656,13.380000114440918 50.88999938964844,13.380000114440918 C50.88999938964844,13.380000114440918 50.88999938964844,13.380000114440918 50.88999938964844,13.380000114440918z M50.93000030517578,17.43000030517578 C50.36000061035156,17.43000030517578 49.84000015258789,17.329999923706055 49.380001068115234,17.139999389648438 C48.91999816894531,16.950000762939453 48.540000915527344,16.690000534057617 48.22999954223633,16.34000015258789 C47.91999816894531,15.989999771118164 47.70000076293945,15.579999923706055 47.59000015258789,15.119999885559082 C47.59000015258789,15.119999885559082 48.90999984741211,15.029999732971191 48.90999984741211,15.029999732971191 C49.029998779296875,15.399999618530273 49.25,15.6899995803833 49.54999923706055,15.899999618530273 C49.86000061035156,16.1200008392334 50.31999969482422,16.229999542236328 50.93000030517578,16.229999542236328 C51.650001525878906,16.229999542236328 52.189998626708984,16.09000015258789 52.56999969482422,15.800000190734863 C52.959999084472656,15.510000228881836 53.15999984741211,15.069999694824219 53.15999984741211,14.489999771118164 C53.15999984741211,14.489999771118164 53.15999984741211,13.199999809265137 53.15999984741211,13.199999809265137 C52.970001220703125,13.619999885559082 52.66999816894531,13.949999809265137 52.25,14.199999809265137 C51.83000183105469,14.449999809265137 51.36000061035156,14.579999923706055 50.84000015258789,14.579999923706055 C50.16999816894531,14.579999923706055 49.56999969482422,14.420000076293945 49.040000915527344,14.09000015258789 C48.52000045776367,13.760000228881836 48.099998474121094,13.300000190734863 47.79999923706055,12.720000267028809 C47.5099983215332,12.140000343322754 47.369998931884766,11.479999542236328 47.369998931884766,10.729999542236328 C47.369998931884766,9.970000267028809 47.5099983215332,9.300000190734863 47.79999923706055,8.729999542236328 C48.09000015258789,8.149999618530273 48.4900016784668,7.690000057220459 49,7.360000133514404 C49.52000045776367,7.03000020980835 50.119998931884766,6.869999885559082 50.779998779296875,6.869999885559082 C51.34000015258789,6.869999885559082 51.84000015258789,7 52.279998779296875,7.260000228881836 C52.72999954223633,7.519999980926514 53.040000915527344,7.869999885559082 53.220001220703125,8.3100004196167 C53.220001220703125,8.3100004196167 53.220001220703125,7.050000190734863 53.220001220703125,7.050000190734863 C53.220001220703125,7.050000190734863 54.41999816894531,7.050000190734863 54.41999816894531,7.050000190734863 C54.41999816894531,7.050000190734863 54.41999816894531,14.460000038146973 54.41999816894531,14.460000038146973 C54.41999816894531,15.079999923706055 54.279998779296875,15.609999656677246 54,16.049999237060547 C53.720001220703125,16.5 53.31999969482422,16.84000015258789 52.79999923706055,17.06999969482422 C52.279998779296875,17.309999465942383 51.65999984741211,17.43000030517578 50.93000030517578,17.43000030517578 C50.93000030517578,17.43000030517578 50.93000030517578,17.43000030517578 50.93000030517578,17.43000030517578z M40.75,14.069999694824219 C41.290000915527344,14.069999694824219 41.7400016784668,13.979999542236328 42.099998474121094,13.800000190734863 C42.459999084472656,13.609999656677246 42.72999954223633,13.350000381469727 42.90999984741211,13.020000457763672 C43.09000015258789,12.680000305175781 43.18000030517578,12.289999961853027 43.18000030517578,11.850000381469727 C43.18000030517578,11.850000381469727 43.18000030517578,11.15999984741211 43.18000030517578,11.15999984741211 C43.18000030517578,11.15999984741211 40.75,11.640000343322754 40.75,11.640000343322754 C40.209999084472656,11.739999771118164 39.83000183105469,11.899999618530273 39.619998931884766,12.109999656677246 C39.40999984741211,12.3100004196167 39.29999923706055,12.569999694824219 39.29999923706055,12.899999618530273 C39.29999923706055,13.270000457763672 39.43000030517578,13.5600004196167 39.68000030517578,13.770000457763672 C39.939998626708984,13.970000267028809 40.29999923706055,14.069999694824219 40.75,14.069999694824219 C40.75,14.069999694824219 40.75,14.069999694824219 40.75,14.069999694824219z M40.630001068115234,15.180000305175781 C40.130001068115234,15.180000305175781 39.68000030517578,15.09000015258789 39.279998779296875,14.90999984741211 C38.880001068115234,14.729999542236328 38.560001373291016,14.479999542236328 38.33000183105469,14.15999984741211 C38.099998474121094,13.829999923706055 37.9900016784668,13.449999809265137 37.9900016784668,13.020000457763672 C37.9900016784668,12.34000015258789 38.189998626708984,11.819999694824219 38.59000015258789,11.449999809265137 C39,11.069999694824219 39.63999938964844,10.789999961853027 40.5099983215332,10.619999885559082 C40.5099983215332,10.619999885559082 43.18000030517578,10.079999923706055 43.18000030517578,10.079999923706055 C43.18000030517578,9.399999618530273 43.02000045776367,8.899999618530273 42.709999084472656,8.569999694824219 C42.40999984741211,8.239999771118164 41.97999954223633,8.069999694824219 41.40999984741211,8.069999694824219 C40.86000061035156,8.069999694824219 40.43000030517578,8.199999809265137 40.119998931884766,8.449999809265137 C39.810001373291016,8.6899995803833 39.59000015258789,9.039999961853027 39.470001220703125,9.5 C39.470001220703125,9.5 38.13999938964844,9.390000343322754 38.13999938964844,9.390000343322754 C38.290000915527344,8.640000343322754 38.63999938964844,8.029999732971191 39.20000076293945,7.570000171661377 C39.77000045776367,7.099999904632568 40.5099983215332,6.869999885559082 41.40999984741211,6.869999885559082 C42.369998931884766,6.869999885559082 43.11000061035156,7.159999847412109 43.63999938964844,7.739999771118164 C44.16999816894531,8.3100004196167 44.439998626708984,9.100000381469727 44.439998626708984,10.109999656677246 C44.439998626708984,10.109999656677246 44.439998626708984,13.40999984741211 44.439998626708984,13.40999984741211 C44.439998626708984,13.59000015258789 44.470001220703125,13.720000267028809 44.54999923706055,13.789999961853027 C44.630001068115234,13.859999656677246 44.7599983215332,13.890000343322754 44.91999816894531,13.890000343322754 C44.91999816894531,13.890000343322754 45.43000030517578,13.890000343322754 45.43000030517578,13.890000343322754 C45.43000030517578,13.890000343322754 45.43000030517578,15 45.43000030517578,15 C45.369998931884766,15.010000228881836 45.27000045776367,15.020000457763672 45.13999938964844,15.020000457763672 C45.0099983215332,15.029999732971191 44.88999938964844,15.029999732971191 44.77000045776367,15.029999732971191 C44.43000030517578,15.029999732971191 44.13999938964844,14.970000267028809 43.900001525878906,14.859999656677246 C43.66999816894531,14.75 43.4900016784668,14.579999923706055 43.369998931884766,14.34000015258789 C43.25,14.09000015258789 43.189998626708984,13.770000457763672 43.18000030517578,13.380000114440918 C43.18000030517578,13.380000114440918 43.41999816894531,13.380000114440918 43.41999816894531,13.380000114440918 C43.349998474121094,13.720000267028809 43.18000030517578,14.029999732971191 42.90999984741211,14.3100004196167 C42.650001525878906,14.579999923706055 42.31999969482422,14.789999961853027 41.91999816894531,14.949999809265137 C41.52000045776367,15.100000381469727 41.09000015258789,15.180000305175781 40.630001068115234,15.180000305175781 C40.630001068115234,15.180000305175781 40.630001068115234,15.180000305175781 40.630001068115234,15.180000305175781z M32.529998779296875,15.180000305175781 C31.84000015258789,15.180000305175781 31.25,15.0600004196167 30.75,14.819999694824219 C30.25,14.579999923706055 29.850000381469727,14.260000228881836 29.559999465942383,13.859999656677246 C29.280000686645508,13.449999809265137 29.1200008392334,13 29.079999923706055,12.5 C29.079999923706055,12.5 30.399999618530273,12.40999984741211 30.399999618530273,12.40999984741211 C30.479999542236328,12.899999618530273 30.700000762939453,13.279999732971191 31.049999237060547,13.5600004196167 C31.40999984741211,13.84000015258789 31.899999618530273,13.979999542236328 32.529998779296875,13.979999542236328 C33.119998931884766,13.979999542236328 33.58000183105469,13.899999618530273 33.900001525878906,13.729999542236328 C34.22999954223633,13.5600004196167 34.38999938964844,13.289999961853027 34.38999938964844,12.930000305175781 C34.38999938964844,12.699999809265137 34.34000015258789,12.510000228881836 34.22999954223633,12.359999656677246 C34.119998931884766,12.210000038146973 33.90999984741211,12.079999923706055 33.61000061035156,11.979999542236328 C33.310001373291016,11.869999885559082 32.869998931884766,11.770000457763672 32.290000915527344,11.670000076293945 C31.520000457763672,11.529999732971191 30.920000076293945,11.359999656677246 30.479999542236328,11.15999984741211 C30.049999237060547,10.949999809265137 29.739999771118164,10.6899995803833 29.559999465942383,10.380000114440918 C29.3799991607666,10.069999694824219 29.290000915527344,9.699999809265137 29.290000915527344,9.270000457763672 C29.290000915527344,8.8100004196167 29.40999984741211,8.399999618530273 29.639999389648438,8.039999961853027 C29.8700008392334,7.679999828338623 30.209999084472656,7.389999866485596 30.65999984741211,7.179999828338623 C31.110000610351562,6.96999979019165 31.65999984741211,6.869999885559082 32.310001373291016,6.869999885559082 C32.970001220703125,6.869999885559082 33.52000045776367,6.989999771118164 33.959999084472656,7.230000019073486 C34.40999984741211,7.460000038146973 34.7599983215332,7.769999980926514 35.02000045776367,8.15999984741211 C35.279998779296875,8.539999961853027 35.45000076293945,8.960000038146973 35.529998779296875,9.420000076293945 C35.529998779296875,9.420000076293945 34.209999084472656,9.510000228881836 34.209999084472656,9.510000228881836 C34.150001525878906,9.229999542236328 34.040000915527344,8.979999542236328 33.869998931884766,8.770000457763672 C33.709999084472656,8.550000190734863 33.4900016784668,8.390000343322754 33.220001220703125,8.270000457763672 C32.959999084472656,8.140000343322754 32.650001525878906,8.069999694824219 32.290000915527344,8.069999694824219 C31.709999084472656,8.069999694824219 31.280000686645508,8.180000305175781 31,8.40999984741211 C30.719999313354492,8.640000343322754 30.579999923706055,8.930000305175781 30.579999923706055,9.270000457763672 C30.579999923706055,9.539999961853027 30.649999618530273,9.75 30.780000686645508,9.90999984741211 C30.90999984741211,10.069999694824219 31.1200008392334,10.199999809265137 31.40999984741211,10.300000190734863 C31.700000762939453,10.390000343322754 32.08000183105469,10.479999542236328 32.560001373291016,10.5600004196167 C33.380001068115234,10.6899995803833 34.02000045776367,10.859999656677246 34.470001220703125,11.069999694824219 C34.91999816894531,11.270000457763672 35.22999954223633,11.520000457763672 35.40999984741211,11.819999694824219 C35.59000015258789,12.119999885559082 35.68000030517578,12.489999771118164 35.68000030517578,12.930000305175781 C35.68000030517578,13.399999618530273 35.540000915527344,13.800000190734863 35.2599983215332,14.140000343322754 C34.9900016784668,14.470000267028809 34.619998931884766,14.729999542236328 34.13999938964844,14.90999984741211 C33.66999816894531,15.09000015258789 33.130001068115234,15.180000305175781 32.529998779296875,15.180000305175781 C32.529998779296875,15.180000305175781 32.529998779296875,15.180000305175781 32.529998779296875,15.180000305175781z M23.239999771118164,15.180000305175781 C22.549999237060547,15.180000305175781 21.950000762939453,15.0600004196167 21.450000762939453,14.819999694824219 C20.950000762939453,14.579999923706055 20.559999465942383,14.260000228881836 20.270000457763672,13.859999656677246 C19.989999771118164,13.449999809265137 19.829999923706055,13 19.790000915527344,12.5 C19.790000915527344,12.5 21.110000610351562,12.40999984741211 21.110000610351562,12.40999984741211 C21.190000534057617,12.899999618530273 21.399999618530273,13.279999732971191 21.75,13.5600004196167 C22.110000610351562,13.84000015258789 22.610000610351562,13.979999542236328 23.239999771118164,13.979999542236328 C23.829999923706055,13.979999542236328 24.280000686645508,13.899999618530273 24.600000381469727,13.729999542236328 C24.93000030517578,13.5600004196167 25.100000381469727,13.289999961853027 25.100000381469727,12.930000305175781 C25.100000381469727,12.699999809265137 25.040000915527344,12.510000228881836 24.93000030517578,12.359999656677246 C24.81999969482422,12.210000038146973 24.6200008392334,12.079999923706055 24.31999969482422,11.979999542236328 C24.020000457763672,11.869999885559082 23.579999923706055,11.770000457763672 23,11.670000076293945 C22.229999542236328,11.529999732971191 21.6200008392334,11.359999656677246 21.18000030517578,11.15999984741211 C20.75,10.949999809265137 20.450000762939453,10.6899995803833 20.270000457763672,10.380000114440918 C20.09000015258789,10.069999694824219 20,9.699999809265137 20,9.270000457763672 C20,8.8100004196167 20.110000610351562,8.399999618530273 20.34000015258789,8.039999961853027 C20.56999969482422,7.679999828338623 20.90999984741211,7.389999866485596 21.360000610351562,7.179999828338623 C21.809999465942383,6.96999979019165 22.360000610351562,6.869999885559082 23.010000228881836,6.869999885559082 C23.670000076293945,6.869999885559082 24.219999313354492,6.989999771118164 24.65999984741211,7.230000019073486 C25.110000610351562,7.460000038146973 25.469999313354492,7.769999980926514 25.729999542236328,8.15999984741211 C25.989999771118164,8.539999961853027 26.15999984741211,8.960000038146973 26.239999771118164,9.420000076293945 C26.239999771118164,9.420000076293945 24.920000076293945,9.510000228881836 24.920000076293945,9.510000228881836 C24.860000610351562,9.229999542236328 24.739999771118164,8.979999542236328 24.56999969482422,8.770000457763672 C24.40999984741211,8.550000190734863 24.200000762939453,8.390000343322754 23.93000030517578,8.270000457763672 C23.670000076293945,8.140000343322754 23.360000610351562,8.069999694824219 23,8.069999694824219 C22.420000076293945,8.069999694824219 21.989999771118164,8.180000305175781 21.709999084472656,8.40999984741211 C21.43000030517578,8.640000343322754 21.290000915527344,8.930000305175781 21.290000915527344,9.270000457763672 C21.290000915527344,9.539999961853027 21.350000381469727,9.75 21.479999542236328,9.90999984741211 C21.610000610351562,10.069999694824219 21.81999969482422,10.199999809265137 22.110000610351562,10.300000190734863 C22.399999618530273,10.390000343322754 22.790000915527344,10.479999542236328 23.270000457763672,10.5600004196167 C24.09000015258789,10.6899995803833 24.719999313354492,10.859999656677246 25.170000076293945,11.069999694824219 C25.6200008392334,11.270000457763672 25.940000534057617,11.520000457763672 26.1200008392334,11.819999694824219 C26.299999237060547,12.119999885559082 26.389999389648438,12.489999771118164 26.389999389648438,12.930000305175781 C26.389999389648438,13.399999618530273 26.25,13.800000190734863 25.969999313354492,14.140000343322754 C25.700000762939453,14.470000267028809 25.31999969482422,14.729999542236328 24.84000015258789,14.90999984741211 C24.3700008392334,15.09000015258789 23.84000015258789,15.180000305175781 23.239999771118164,15.180000305175781 C23.239999771118164,15.180000305175781 23.239999771118164,15.180000305175781 23.239999771118164,15.180000305175781z M11.609999656677246,10.300000190734863 C11.609999656677246,10.300000190734863 16.020000457763672,10.300000190734863 16.020000457763672,10.300000190734863 C15.960000038146973,9.529999732971191 15.729999542236328,8.970000267028809 15.34000015258789,8.609999656677246 C14.949999809265137,8.25 14.460000038146973,8.069999694824219 13.869999885559082,8.069999694824219 C13.260000228881836,8.069999694824219 12.760000228881836,8.260000228881836 12.359999656677246,8.640000343322754 C11.970000267028809,9.010000228881836 11.720000267028809,9.5600004196167 11.609999656677246,10.300000190734863 C11.609999656677246,10.300000190734863 11.609999656677246,10.300000190734863 11.609999656677246,10.300000190734863z M13.930000305175781,15.180000305175781 C13.180000305175781,15.180000305175781 12.529999732971191,15.010000228881836 11.979999542236328,14.670000076293945 C11.4399995803833,14.329999923706055 11.020000457763672,13.850000381469727 10.720000267028809,13.229999542236328 C10.430000305175781,12.600000381469727 10.289999961853027,11.859999656677246 10.289999961853027,11.020000457763672 C10.289999961853027,10.180000305175781 10.430000305175781,9.460000038146973 10.720000267028809,8.84000015258789 C11.020000457763672,8.220000267028809 11.430000305175781,7.730000019073486 11.960000038146973,7.389999866485596 C12.5,7.039999961853027 13.140000343322754,6.869999885559082 13.869999885559082,6.869999885559082 C14.5600004196167,6.869999885559082 15.170000076293945,7.03000020980835 15.699999809265137,7.360000133514404 C16.229999542236328,7.679999828338623 16.649999618530273,8.149999618530273 16.950000762939453,8.770000457763672 C17.25,9.390000343322754 17.389999389648438,10.149999618530273 17.389999389648438,11.039999961853027 C17.389999389648438,11.039999961853027 17.389999389648438,11.40999984741211 17.389999389648438,11.40999984741211 C17.389999389648438,11.40999984741211 11.609999656677246,11.40999984741211 11.609999656677246,11.40999984741211 C11.65999984741211,12.260000228881836 11.880000114440918,12.90999984741211 12.279999732971191,13.34000015258789 C12.6899995803833,13.770000457763672 13.239999771118164,13.979999542236328 13.930000305175781,13.979999542236328 C14.449999809265137,13.979999542236328 14.869999885559082,13.859999656677246 15.199999809265137,13.619999885559082 C15.539999961853027,13.369999885559082 15.779999732971191,13.039999961853027 15.90999984741211,12.640000343322754 C15.90999984741211,12.640000343322754 17.260000228881836,12.75 17.260000228881836,12.75 C17.049999237060547,13.460000038146973 16.649999618530273,14.039999961853027 16.059999465942383,14.5 C15.479999542236328,14.949999809265137 14.770000457763672,15.180000305175781 13.930000305175781,15.180000305175781 C13.930000305175781,15.180000305175781 13.930000305175781,15.180000305175781 13.930000305175781,15.180000305175781z M3.930000066757202,13.800000190734863 C3.930000066757202,13.800000190734863 1.9199999570846558,5.550000190734863 1.9199999570846558,5.550000190734863 C1.9199999570846558,5.550000190734863 2.0399999618530273,5.550000190734863 2.0399999618530273,5.550000190734863 C2.0399999618530273,5.550000190734863 2.0399999618530273,15 2.0399999618530273,15 C2.0399999618530273,15 0.75,15 0.75,15 C0.75,15 0.75,4.349999904632568 0.75,4.349999904632568 C0.75,4.349999904632568 2.700000047683716,4.349999904632568 2.700000047683716,4.349999904632568 C2.700000047683716,4.349999904632568 4.800000190734863,13.109999656677246 4.800000190734863,13.109999656677246 C4.800000190734863,13.109999656677246 4.199999809265137,13.109999656677246 4.199999809265137,13.109999656677246 C4.199999809265137,13.109999656677246 6.300000190734863,4.349999904632568 6.300000190734863,4.349999904632568 C6.300000190734863,4.349999904632568 8.25,4.349999904632568 8.25,4.349999904632568 C8.25,4.349999904632568 8.25,15 8.25,15 C8.25,15 6.960000038146973,15 6.960000038146973,15 C6.960000038146973,15 6.960000038146973,5.550000190734863 6.960000038146973,5.550000190734863 C6.960000038146973,5.550000190734863 7.079999923706055,5.550000190734863 7.079999923706055,5.550000190734863 C7.079999923706055,5.550000190734863 5.070000171661377,13.800000190734863 5.070000171661377,13.800000190734863 C5.070000171661377,13.800000190734863 3.930000066757202,13.800000190734863 3.930000066757202,13.800000190734863z"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M87,0 C87,0 0,0 0,0 C0,0 0,26 0,26 C0,26 87,26 87,26 C87,26 87,0 87,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2607)"
                transform="matrix(1,0,0,1,284,77)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_3005)"
                  transform="matrix(1,0,0,1,13,9)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M135,25 C135,11.202500343322754 123.79750061035156,0 110,0 C110,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 110,50 110,50 C123.79750061035156,50 135,38.79750061035156 135,25 C135,25 135,25 135,25z"
                    />
                  </g>
                  <g
                    transform="matrix(1,0,0,1,61,61)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(29,31,53)"
                        strokeOpacity={1}
                        strokeWidth={2}
                        d=" M135,25 C135,11.202500343322754 123.79750061035156,0 110,0 C110,0 25,0 25,0 C11.202500343322754,0 0,11.202500343322754 0,25 C0,25 0,25 0,25 C0,38.79750061035156 11.202500343322754,50 25,50 C25,50 110,50 110,50 C123.79750061035156,50 135,38.79750061035156 135,25 C135,25 135,25 135,25z"
                      />
                    </g>
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M136,-1 C136,-1 -1,-1 -1,-1 C-1,-1 -1,51 -1,51 C-1,51 136,51 136,51 C136,51 136,-1 136,-1z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3017)"
                    filter="url(#__lottie_element_3019)"
                    transform="matrix(1,0,0,1,25,13)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M207,0 C207,0 0,0 0,0 C0,0 0,146 0,146 C0,146 207,146 207,146 C207,146 207,0 207,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_3024)"
                      transform="matrix(1,0,0,1,60,60)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(147,163,183)"
                              fillOpacity={1}
                              d=" M56.52000045776367,8.15999984741211 C56.52000045776367,8.15999984741211 56.52000045776367,7.050000190734863 56.52000045776367,7.050000190734863 C56.52000045776367,7.050000190734863 63.56999969482422,7.050000190734863 63.56999969482422,7.050000190734863 C63.56999969482422,7.050000190734863 63.56999969482422,8.15999984741211 63.56999969482422,8.15999984741211 C63.56999969482422,8.15999984741211 56.52000045776367,8.15999984741211 56.52000045776367,8.15999984741211z M61.43000030517578,15 C60.65999984741211,15 60.09000015258789,14.819999694824219 59.709999084472656,14.460000038146973 C59.33000183105469,14.100000381469727 59.13999938964844,13.550000190734863 59.13999938964844,12.8100004196167 C59.13999938964844,12.8100004196167 59.13999938964844,5.190000057220459 59.13999938964844,5.190000057220459 C59.13999938964844,5.190000057220459 60.400001525878906,5.190000057220459 60.400001525878906,5.190000057220459 C60.400001525878906,5.190000057220459 60.400001525878906,12.8100004196167 60.400001525878906,12.8100004196167 C60.400001525878906,13.180000305175781 60.4900016784668,13.460000038146973 60.65999984741211,13.640000343322754 C60.83000183105469,13.8100004196167 61.08000183105469,13.890000343322754 61.43000030517578,13.890000343322754 C61.43000030517578,13.890000343322754 63.56999969482422,13.890000343322754 63.56999969482422,13.890000343322754 C63.56999969482422,13.890000343322754 63.56999969482422,15 63.56999969482422,15 C63.56999969482422,15 61.43000030517578,15 61.43000030517578,15z M51.18000030517578,15.180000305175781 C50.439998626708984,15.180000305175781 49.79999923706055,15.010000228881836 49.25,14.670000076293945 C48.70000076293945,14.329999923706055 48.27000045776367,13.850000381469727 47.970001220703125,13.229999542236328 C47.66999816894531,12.600000381469727 47.52000045776367,11.859999656677246 47.52000045776367,11.020000457763672 C47.52000045776367,10.180000305175781 47.66999816894531,9.460000038146973 47.970001220703125,8.84000015258789 C48.27000045776367,8.220000267028809 48.70000076293945,7.730000019073486 49.25,7.389999866485596 C49.79999923706055,7.039999961853027 50.439998626708984,6.869999885559082 51.18000030517578,6.869999885559082 C51.77000045776367,6.869999885559082 52.290000915527344,6.980000019073486 52.75,7.199999809265137 C53.209999084472656,7.409999847412109 53.59000015258789,7.71999979019165 53.88999938964844,8.130000114440918 C54.189998626708984,8.539999961853027 54.400001525878906,9.039999961853027 54.5099983215332,9.630000114440918 C54.5099983215332,9.630000114440918 53.189998626708984,9.720000267028809 53.189998626708984,9.720000267028809 C53.06999969482422,9.1899995803833 52.83000183105469,8.779999732971191 52.470001220703125,8.5 C52.119998931884766,8.210000038146973 51.689998626708984,8.069999694824219 51.18000030517578,8.069999694824219 C50.45000076293945,8.069999694824219 49.880001068115234,8.329999923706055 49.459999084472656,8.859999656677246 C49.04999923706055,9.380000114440918 48.84000015258789,10.100000381469727 48.84000015258789,11.020000457763672 C48.84000015258789,11.9399995803833 49.04999923706055,12.670000076293945 49.459999084472656,13.199999809265137 C49.880001068115234,13.720000267028809 50.45000076293945,13.979999542236328 51.18000030517578,13.979999542236328 C51.689998626708984,13.979999542236328 52.130001068115234,13.829999923706055 52.5,13.529999732971191 C52.880001068115234,13.229999542236328 53.130001068115234,12.779999732971191 53.25,12.180000305175781 C53.25,12.180000305175781 54.56999969482422,12.270000457763672 54.56999969482422,12.270000457763672 C54.459999084472656,12.859999656677246 54.25,13.380000114440918 53.939998626708984,13.819999694824219 C53.630001068115234,14.25 53.2400016784668,14.579999923706055 52.77000045776367,14.819999694824219 C52.29999923706055,15.0600004196167 51.77000045776367,15.180000305175781 51.18000030517578,15.180000305175781 C51.18000030517578,15.180000305175781 51.18000030517578,15.180000305175781 51.18000030517578,15.180000305175781z M39.4900016784668,10.300000190734863 C39.4900016784668,10.300000190734863 43.900001525878906,10.300000190734863 43.900001525878906,10.300000190734863 C43.84000015258789,9.529999732971191 43.61000061035156,8.970000267028809 43.220001220703125,8.609999656677246 C42.83000183105469,8.25 42.34000015258789,8.069999694824219 41.75,8.069999694824219 C41.13999938964844,8.069999694824219 40.63999938964844,8.260000228881836 40.2400016784668,8.640000343322754 C39.849998474121094,9.010000228881836 39.599998474121094,9.5600004196167 39.4900016784668,10.300000190734863 C39.4900016784668,10.300000190734863 39.4900016784668,10.300000190734863 39.4900016784668,10.300000190734863z M41.810001373291016,15.180000305175781 C41.060001373291016,15.180000305175781 40.40999984741211,15.010000228881836 39.86000061035156,14.670000076293945 C39.31999969482422,14.329999923706055 38.900001525878906,13.850000381469727 38.599998474121094,13.229999542236328 C38.310001373291016,12.600000381469727 38.16999816894531,11.859999656677246 38.16999816894531,11.020000457763672 C38.16999816894531,10.180000305175781 38.310001373291016,9.460000038146973 38.599998474121094,8.84000015258789 C38.900001525878906,8.220000267028809 39.31999969482422,7.730000019073486 39.849998474121094,7.389999866485596 C40.38999938964844,7.039999961853027 41.02000045776367,6.869999885559082 41.75,6.869999885559082 C42.439998626708984,6.869999885559082 43.04999923706055,7.03000020980835 43.58000183105469,7.360000133514404 C44.11000061035156,7.679999828338623 44.529998779296875,8.149999618530273 44.83000183105469,8.770000457763672 C45.130001068115234,9.390000343322754 45.279998779296875,10.149999618530273 45.279998779296875,11.039999961853027 C45.279998779296875,11.039999961853027 45.279998779296875,11.40999984741211 45.279998779296875,11.40999984741211 C45.279998779296875,11.40999984741211 39.4900016784668,11.40999984741211 39.4900016784668,11.40999984741211 C39.540000915527344,12.260000228881836 39.7599983215332,12.90999984741211 40.15999984741211,13.34000015258789 C40.56999969482422,13.770000457763672 41.119998931884766,13.979999542236328 41.810001373291016,13.979999542236328 C42.33000183105469,13.979999542236328 42.7599983215332,13.859999656677246 43.09000015258789,13.619999885559082 C43.43000030517578,13.369999885559082 43.65999984741211,13.039999961853027 43.790000915527344,12.640000343322754 C43.790000915527344,12.640000343322754 45.13999938964844,12.75 45.13999938964844,12.75 C44.93000030517578,13.460000038146973 44.529998779296875,14.039999961853027 43.939998626708984,14.5 C43.36000061035156,14.949999809265137 42.650001525878906,15.180000305175781 41.810001373291016,15.180000305175781 C41.810001373291016,15.180000305175781 41.810001373291016,15.180000305175781 41.810001373291016,15.180000305175781z M33.150001525878906,5.800000190734863 C33.150001525878906,5.800000190734863 33.150001525878906,4.340000152587891 33.150001525878906,4.340000152587891 C33.150001525878906,4.340000152587891 34.470001220703125,4.340000152587891 34.470001220703125,4.340000152587891 C34.470001220703125,4.340000152587891 34.470001220703125,5.800000190734863 34.470001220703125,5.800000190734863 C34.470001220703125,5.800000190734863 33.150001525878906,5.800000190734863 33.150001525878906,5.800000190734863z M29.68000030517578,8.15999984741211 C29.68000030517578,8.15999984741211 29.68000030517578,7.050000190734863 29.68000030517578,7.050000190734863 C29.68000030517578,7.050000190734863 33.939998626708984,7.050000190734863 33.939998626708984,7.050000190734863 C33.939998626708984,7.050000190734863 33.939998626708984,8.15999984741211 33.939998626708984,8.15999984741211 C33.939998626708984,8.15999984741211 29.68000030517578,8.15999984741211 29.68000030517578,8.15999984741211z M29.530000686645508,17.25 C29.530000686645508,17.25 29.530000686645508,16.139999389648438 29.530000686645508,16.139999389648438 C29.530000686645508,16.139999389648438 32.04999923706055,16.139999389648438 32.04999923706055,16.139999389648438 C32.439998626708984,16.139999389648438 32.72999954223633,16.059999465942383 32.91999816894531,15.890000343322754 C33.119998931884766,15.720000267028809 33.220001220703125,15.390000343322754 33.220001220703125,14.90999984741211 C33.220001220703125,14.90999984741211 33.220001220703125,7.050000190734863 33.220001220703125,7.050000190734863 C33.220001220703125,7.050000190734863 34.47999954223633,7.050000190734863 34.47999954223633,7.050000190734863 C34.47999954223633,7.050000190734863 34.47999954223633,15 34.47999954223633,15 C34.47999954223633,15.729999542236328 34.29999923706055,16.280000686645508 33.939998626708984,16.65999984741211 C33.58000183105469,17.049999237060547 33,17.25 32.20000076293945,17.25 C32.20000076293945,17.25 29.530000686645508,17.25 29.530000686645508,17.25z M23.510000228881836,13.979999542236328 C24.18000030517578,13.979999542236328 24.700000762939453,13.710000038146973 25.079999923706055,13.180000305175781 C25.469999313354492,12.649999618530273 25.670000076293945,11.930000305175781 25.670000076293945,11.020000457763672 C25.670000076293945,10.100000381469727 25.469999313354492,9.380000114440918 25.079999923706055,8.859999656677246 C24.700000762939453,8.329999923706055 24.190000534057617,8.069999694824219 23.540000915527344,8.069999694824219 C23.049999237060547,8.069999694824219 22.6299991607666,8.1899995803833 22.280000686645508,8.430000305175781 C21.93000030517578,8.65999984741211 21.65999984741211,8.989999771118164 21.469999313354492,9.430000305175781 C21.290000915527344,9.869999885559082 21.200000762939453,10.399999618530273 21.200000762939453,11.020000457763672 C21.200000762939453,11.619999885559082 21.290000915527344,12.149999618530273 21.469999313354492,12.600000381469727 C21.65999984741211,13.039999961853027 21.920000076293945,13.380000114440918 22.260000228881836,13.619999885559082 C22.610000610351562,13.859999656677246 23.030000686645508,13.979999542236328 23.510000228881836,13.979999542236328 C23.510000228881836,13.979999542236328 23.510000228881836,13.979999542236328 23.510000228881836,13.979999542236328z M23.579999923706055,15.180000305175781 C23.030000686645508,15.180000305175781 22.540000915527344,15.0600004196167 22.110000610351562,14.819999694824219 C21.68000030517578,14.569999694824219 21.360000610351562,14.229999542236328 21.1299991607666,13.800000190734863 C21.1299991607666,13.800000190734863 21.079999923706055,15 21.079999923706055,15 C21.079999923706055,15 19.940000534057617,15 19.940000534057617,15 C19.940000534057617,15 19.940000534057617,4.349999904632568 19.940000534057617,4.349999904632568 C19.940000534057617,4.349999904632568 21.200000762939453,4.349999904632568 21.200000762939453,4.349999904632568 C21.200000762939453,4.349999904632568 21.200000762939453,8.15999984741211 21.200000762939453,8.15999984741211 C21.399999618530273,7.829999923706055 21.709999084472656,7.53000020980835 22.1299991607666,7.269999980926514 C22.549999237060547,7 23.030000686645508,6.869999885559082 23.579999923706055,6.869999885559082 C24.280000686645508,6.869999885559082 24.889999389648438,7.039999961853027 25.399999618530273,7.380000114440918 C25.90999984741211,7.71999979019165 26.299999237060547,8.199999809265137 26.56999969482422,8.819999694824219 C26.850000381469727,9.4399995803833 26.989999771118164,10.170000076293945 26.989999771118164,11.020000457763672 C26.989999771118164,11.869999885559082 26.850000381469727,12.609999656677246 26.56999969482422,13.229999542236328 C26.299999237060547,13.850000381469727 25.90999984741211,14.329999923706055 25.399999618530273,14.670000076293945 C24.889999389648438,15.010000228881836 24.280000686645508,15.180000305175781 23.579999923706055,15.180000305175781 C23.579999923706055,15.180000305175781 23.579999923706055,15.180000305175781 23.579999923706055,15.180000305175781z M13.239999771118164,15.180000305175781 C12.449999809265137,15.180000305175781 11.819999694824219,14.920000076293945 11.350000381469727,14.390000343322754 C10.880000114440918,13.850000381469727 10.640000343322754,13.100000381469727 10.640000343322754,12.15999984741211 C10.640000343322754,12.15999984741211 10.640000343322754,7.050000190734863 10.640000343322754,7.050000190734863 C10.640000343322754,7.050000190734863 11.899999618530273,7.050000190734863 11.899999618530273,7.050000190734863 C11.899999618530273,7.050000190734863 11.899999618530273,11.819999694824219 11.899999618530273,11.819999694824219 C11.899999618530273,12.59000015258789 12.039999961853027,13.15999984741211 12.3100004196167,13.529999732971191 C12.59000015258789,13.890000343322754 13.020000457763672,14.069999694824219 13.59000015258789,14.069999694824219 C14.210000038146973,14.069999694824219 14.6899995803833,13.869999885559082 15.050000190734863,13.470000267028809 C15.40999984741211,13.0600004196167 15.59000015258789,12.5 15.59000015258789,11.789999961853027 C15.59000015258789,11.789999961853027 15.59000015258789,7.050000190734863 15.59000015258789,7.050000190734863 C15.59000015258789,7.050000190734863 16.860000610351562,7.050000190734863 16.860000610351562,7.050000190734863 C16.860000610351562,7.050000190734863 16.860000610351562,15 16.860000610351562,15 C16.860000610351562,15 15.649999618530273,15 15.649999618530273,15 C15.649999618530273,15 15.649999618530273,13.039999961853027 15.649999618530273,13.039999961853027 C15.649999618530273,13.039999961853027 15.850000381469727,13.140000343322754 15.850000381469727,13.140000343322754 C15.6899995803833,13.789999961853027 15.380000114440918,14.300000190734863 14.930000305175781,14.65999984741211 C14.479999542236328,15.010000228881836 13.920000076293945,15.180000305175781 13.239999771118164,15.180000305175781 C13.239999771118164,15.180000305175781 13.239999771118164,15.180000305175781 13.239999771118164,15.180000305175781z M4.659999847412109,15.239999771118164 C3.9100000858306885,15.239999771118164 3.25,15.079999923706055 2.6700000762939453,14.770000457763672 C2.0899999141693115,14.460000038146973 1.6200000047683716,14.039999961853027 1.2699999809265137,13.5 C0.9200000166893005,12.949999809265137 0.7200000286102295,12.3100004196167 0.6600000262260437,11.59000015258789 C0.6600000262260437,11.59000015258789 2.009999990463257,11.5 2.009999990463257,11.5 C2.0799999237060547,12.029999732971191 2.2300000190734863,12.489999771118164 2.4600000381469727,12.859999656677246 C2.700000047683716,13.229999542236328 3.009999990463257,13.510000228881836 3.380000114440918,13.699999809265137 C3.759999990463257,13.890000343322754 4.199999809265137,13.979999542236328 4.699999809265137,13.979999542236328 C5.199999809265137,13.979999542236328 5.610000133514404,13.920000076293945 5.949999809265137,13.800000190734863 C6.289999961853027,13.670000076293945 6.550000190734863,13.489999771118164 6.71999979019165,13.25 C6.900000095367432,13 6.989999771118164,12.699999809265137 6.989999771118164,12.359999656677246 C6.989999771118164,12.020000457763672 6.909999847412109,11.729999542236328 6.75,11.479999542236328 C6.599999904632568,11.220000267028809 6.309999942779541,10.970000267028809 5.880000114440918,10.75 C5.460000038146973,10.529999732971191 4.829999923706055,10.3100004196167 4,10.079999923706055 C3.259999990463257,9.869999885559082 2.6600000858306885,9.640000343322754 2.200000047683716,9.390000343322754 C1.75,9.140000343322754 1.4199999570846558,8.84000015258789 1.2100000381469727,8.479999542236328 C1.0099999904632568,8.119999885559082 0.9100000262260437,7.670000076293945 0.9100000262260437,7.139999866485596 C0.9100000262260437,6.539999961853027 1.059999942779541,6.019999980926514 1.340000033378601,5.570000171661377 C1.6299999952316284,5.110000133514404 2.0399999618530273,4.75 2.569999933242798,4.5 C3.0999999046325684,4.239999771118164 3.7200000286102295,4.110000133514404 4.449999809265137,4.110000133514404 C5.179999828338623,4.110000133514404 5.809999942779541,4.260000228881836 6.329999923706055,4.559999942779541 C6.849999904632568,4.849999904632568 7.260000228881836,5.25 7.559999942779541,5.760000228881836 C7.869999885559082,6.269999980926514 8.0600004196167,6.849999904632568 8.140000343322754,7.5 C8.140000343322754,7.5 6.800000190734863,7.590000152587891 6.800000190734863,7.590000152587891 C6.739999771118164,7.159999847412109 6.610000133514404,6.78000020980835 6.420000076293945,6.449999809265137 C6.230000019073486,6.110000133514404 5.96999979019165,5.849999904632568 5.639999866485596,5.659999847412109 C5.309999942779541,5.46999979019165 4.909999847412109,5.369999885559082 4.429999828338623,5.369999885559082 C3.7699999809265137,5.369999885559082 3.240000009536743,5.53000020980835 2.8499999046325684,5.849999904632568 C2.4600000381469727,6.159999847412109 2.2699999809265137,6.570000171661377 2.2699999809265137,7.079999923706055 C2.2699999809265137,7.409999847412109 2.3399999141693115,7.690000057220459 2.4800000190734863,7.909999847412109 C2.630000114440918,8.119999885559082 2.880000114440918,8.3100004196167 3.25,8.479999542236328 C3.619999885559082,8.640000343322754 4.150000095367432,8.8100004196167 4.820000171661377,9 C5.690000057220459,9.239999771118164 6.380000114440918,9.510000228881836 6.889999866485596,9.8100004196167 C7.409999847412109,10.109999656677246 7.78000020980835,10.470000267028809 8,10.890000343322754 C8.229999542236328,11.300000190734863 8.34000015258789,11.800000190734863 8.34000015258789,12.390000343322754 C8.34000015258789,12.949999809265137 8.1899995803833,13.449999809265137 7.880000114440918,13.880000114440918 C7.570000171661377,14.3100004196167 7.139999866485596,14.640000343322754 6.590000152587891,14.880000114440918 C6.039999961853027,15.119999885559082 5.389999866485596,15.239999771118164 4.659999847412109,15.239999771118164 C4.659999847412109,15.239999771118164 4.659999847412109,15.239999771118164 4.659999847412109,15.239999771118164z"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M87,0 C87,0 0,0 0,0 C0,0 0,26 0,26 C0,26 87,26 87,26 C87,26 87,0 87,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2612)"
                transform="matrix(1,0,0,1,106.5,193)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,61,61)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(20,22,36)"
                    fillOpacity={1}
                    d=" M191,28 C191,12.546799659729004 178.4532012939453,0 163,0 C163,0 28,0 28,0 C12.546799659729004,0 0,12.546799659729004 0,28 C0,28 0,28 0,28 C0,43.45320129394531 12.546799659729004,56 28,56 C28,56 163,56 163,56 C178.4532012939453,56 191,43.45320129394531 191,28 C191,28 191,28 191,28z"
                  />
                </g>
                <g
                  clipPath="url(#__lottie_element_3039)"
                  filter="url(#__lottie_element_3041)"
                  transform="matrix(1,0,0,1,51,16)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M211,0 C211,0 0,0 0,0 C0,0 0,146 0,146 C0,146 211,146 211,146 C211,146 211,0 211,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3073)"
                    transform="matrix(1,0,0,1,60,60)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(247,249,252)"
                            fillOpacity={1}
                            d=" M59.93000030517578,10.380000114440918 C59.93000030517578,10.380000114440918 65.13999938964844,10.380000114440918 65.13999938964844,10.380000114440918 C64.91000366210938,8.40999984741211 63.810001373291016,7.690000057220459 62.63999938964844,7.690000057220459 C61.13999938964844,7.690000057220459 60.15999984741211,8.680000305175781 59.93000030517578,10.380000114440918 C59.93000030517578,10.380000114440918 59.93000030517578,10.380000114440918 59.93000030517578,10.380000114440918z M57.709999084472656,11.329999923706055 C57.709999084472656,8.050000190734863 59.63999938964844,5.929999828338623 62.63999938964844,5.929999828338623 C65.12000274658203,5.929999828338623 67.19999694824219,7.590000152587891 67.30000305175781,11.25 C67.30000305175781,11.25 67.31999969482422,11.920000076293945 67.31999969482422,11.920000076293945 C67.31999969482422,11.920000076293945 59.88999938964844,11.920000076293945 59.88999938964844,11.920000076293945 C60.029998779296875,13.850000381469727 61.02000045776367,14.979999542236328 62.63999938964844,14.979999542236328 C63.65999984741211,14.979999542236328 64.58999633789062,14.380000114440918 65,13.380000114440918 C65,13.380000114440918 67.16999816894531,13.539999961853027 67.16999816894531,13.539999961853027 C66.55999755859375,15.510000228881836 64.75,16.729999542236328 62.63999938964844,16.729999542236328 C59.63999938964844,16.729999542236328 57.709999084472656,14.609999656677246 57.709999084472656,11.329999923706055 C57.709999084472656,11.329999923706055 57.709999084472656,11.329999923706055 57.709999084472656,11.329999923706055z M47.58000183105469,11.329999923706055 C47.58000183105469,13.550000190734863 48.66999816894531,14.960000038146973 50.33000183105469,14.960000038146973 C52.029998779296875,14.960000038146973 53.099998474121094,13.550000190734863 53.099998474121094,11.329999923706055 C53.099998474121094,9.069999694824219 52.029998779296875,7.650000095367432 50.33000183105469,7.650000095367432 C48.650001525878906,7.650000095367432 47.58000183105469,9.069999694824219 47.58000183105469,11.329999923706055 C47.58000183105469,11.329999923706055 47.58000183105469,11.329999923706055 47.58000183105469,11.329999923706055z M55.0099983215332,2.6600000858306885 C55.0099983215332,2.6600000858306885 55.0099983215332,16.5 55.0099983215332,16.5 C55.0099983215332,16.5 53.08000183105469,16.5 53.08000183105469,16.5 C53.08000183105469,16.5 53.02000045776367,15.020000457763672 53.02000045776367,15.020000457763672 C52.43000030517578,16.06999969482422 51.220001220703125,16.729999542236328 49.79999923706055,16.729999542236328 C47.11000061035156,16.729999542236328 45.439998626708984,14.649999618530273 45.439998626708984,11.329999923706055 C45.439998626708984,8.010000228881836 47.11000061035156,5.929999828338623 49.79999923706055,5.929999828338623 C51.13999938964844,5.929999828338623 52.36000061035156,6.550000190734863 52.95000076293945,7.550000190734863 C52.95000076293945,7.550000190734863 52.95000076293945,2.6600000858306885 52.95000076293945,2.6600000858306885 C52.95000076293945,2.6600000858306885 55.0099983215332,2.6600000858306885 55.0099983215332,2.6600000858306885z M35.84000015258789,13.75 C35.84000015258789,14.510000228881836 36.5,15.140000343322754 37.869998931884766,15.140000343322754 C39.40999984741211,15.119999885559082 40.619998931884766,14.020000457763672 40.619998931884766,11.800000190734863 C40.619998931884766,11.800000190734863 40.619998931884766,11.65999984741211 40.619998931884766,11.65999984741211 C40.619998931884766,11.65999984741211 38.40999984741211,12.050000190734863 38.40999984741211,12.050000190734863 C36.9900016784668,12.300000190734863 35.84000015258789,12.449999809265137 35.84000015258789,13.75 C35.84000015258789,13.75 35.84000015258789,13.75 35.84000015258789,13.75z M33.869998931884766,9.270000457763672 C34.279998779296875,7.179999828338623 35.91999816894531,5.929999828338623 38.29999923706055,5.929999828338623 C41.11000061035156,5.929999828338623 42.650001525878906,7.489999771118164 42.650001525878906,10.319999694824219 C42.650001525878906,10.319999694824219 42.650001525878906,14.15999984741211 42.650001525878906,14.15999984741211 C42.650001525878906,14.6899995803833 42.880001068115234,14.880000114440918 43.290000915527344,14.880000114440918 C43.290000915527344,14.880000114440918 43.70000076293945,14.880000114440918 43.70000076293945,14.880000114440918 C43.70000076293945,14.880000114440918 43.70000076293945,16.5 43.70000076293945,16.5 C43.70000076293945,16.5 43.04999923706055,16.5 43.04999923706055,16.5 C42.119998931884766,16.520000457763672 40.849998474121094,16.360000610351562 40.75,14.899999618530273 C40.290000915527344,15.890000343322754 39.130001068115234,16.729999542236328 37.41999816894531,16.729999542236328 C35.33000183105469,16.729999542236328 33.70000076293945,15.619999885559082 33.70000076293945,13.789999961853027 C33.70000076293945,11.720000267028809 35.2400016784668,11.119999885559082 37.619998931884766,10.670000076293945 C37.619998931884766,10.670000076293945 40.58000183105469,10.09000015258789 40.58000183105469,10.09000015258789 C40.560001373291016,8.430000305175781 39.79999923706055,7.610000133514404 38.29999923706055,7.610000133514404 C37.09000015258789,7.610000133514404 36.290000915527344,8.229999542236328 36.02000045776367,9.399999618530273 C36.02000045776367,9.399999618530273 33.869998931884766,9.270000457763672 33.869998931884766,9.270000457763672z M29.420000076293945,9.789999961853027 C29.209999084472656,8.479999542236328 28.190000534057617,7.730000019073486 27.020000457763672,7.730000019073486 C25.270000457763672,7.730000019073486 24.229999542236328,9.069999694824219 24.229999542236328,11.329999923706055 C24.229999542236328,13.59000015258789 25.270000457763672,14.9399995803833 27.020000457763672,14.9399995803833 C28.25,14.9399995803833 29.270000457763672,14.140000343322754 29.479999542236328,12.699999809265137 C29.479999542236328,12.699999809265137 31.639999389648438,12.819999694824219 31.639999389648438,12.819999694824219 C31.329999923706055,15.239999771118164 29.399999618530273,16.729999542236328 27.020000457763672,16.729999542236328 C24.020000457763672,16.729999542236328 22.09000015258789,14.609999656677246 22.09000015258789,11.329999923706055 C22.09000015258789,8.050000190734863 24.020000457763672,5.929999828338623 27.020000457763672,5.929999828338623 C29.31999969482422,5.929999828338623 31.299999237060547,7.360000133514404 31.56999969482422,9.680000305175781 C31.56999969482422,9.680000305175781 29.420000076293945,9.789999961853027 29.420000076293945,9.789999961853027z M15.180000305175781,6.159999847412109 C15.180000305175781,6.159999847412109 17.06999969482422,6.159999847412109 17.06999969482422,6.159999847412109 C17.06999969482422,6.159999847412109 17.1299991607666,8.109999656677246 17.1299991607666,8.109999656677246 C17.5,6.789999961853027 18.280000686645508,6.159999847412109 19.610000610351562,6.159999847412109 C19.610000610351562,6.159999847412109 20.610000610351562,6.159999847412109 20.610000610351562,6.159999847412109 C20.610000610351562,6.159999847412109 20.610000610351562,7.860000133514404 20.610000610351562,7.860000133514404 C20.610000610351562,7.860000133514404 19.59000015258789,7.860000133514404 19.59000015258789,7.860000133514404 C17.969999313354492,7.860000133514404 17.25,8.760000228881836 17.25,10.470000267028809 C17.25,10.470000267028809 17.25,16.5 17.25,16.5 C17.25,16.5 15.180000305175781,16.5 15.180000305175781,16.5 C15.180000305175781,16.5 15.180000305175781,6.159999847412109 15.180000305175781,6.159999847412109z M4.599999904632568,10.979999542236328 C4.599999904632568,10.979999542236328 8.930000305175781,10.979999542236328 8.930000305175781,10.979999542236328 C8.930000305175781,10.979999542236328 6.769999980926514,4.659999847412109 6.769999980926514,4.659999847412109 C6.769999980926514,4.659999847412109 4.599999904632568,10.979999542236328 4.599999904632568,10.979999542236328z M0.4300000071525574,16.5 C0.4300000071525574,16.5 5.420000076293945,2.6600000858306885 5.420000076293945,2.6600000858306885 C5.420000076293945,2.6600000858306885 8.109999656677246,2.6600000858306885 8.109999656677246,2.6600000858306885 C8.109999656677246,2.6600000858306885 13.109999656677246,16.5 13.109999656677246,16.5 C13.109999656677246,16.5 10.84000015258789,16.5 10.84000015258789,16.5 C10.84000015258789,16.5 9.59000015258789,12.890000343322754 9.59000015258789,12.890000343322754 C9.59000015258789,12.890000343322754 3.940000057220459,12.890000343322754 3.940000057220459,12.890000343322754 C3.940000057220459,12.890000343322754 2.6700000762939453,16.5 2.6700000762939453,16.5 C2.6700000762939453,16.5 0.4300000071525574,16.5 0.4300000071525574,16.5z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M91,0 C91,0 0,0 0,0 C0,0 0,26 0,26 C0,26 91,26 91,26 C91,26 91,0 91,0z"
                      />
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3043)"
                  transform="matrix(1,0,0,1,187.5,48)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    mask="url(#__lottie_element_3087_1)"
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3084)"
                      transform="matrix(1.2000000476837158,0,0,1.2000000476837158,0.5,0.1999969482421875)"
                      opacity={1}
                    >
                      <g
                        mask="url(#__lottie_element_3096_1)"
                        style={{ display: 'block' }}
                      >
                        <g
                          clipPath="url(#__lottie_element_3093)"
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                        >
                          <g
                            transform="matrix(1,0,0,1,1,6)"
                            opacity={1}
                            style={{ display: 'block' }}
                          >
                            <path
                              fill="rgb(66,39,44)"
                              fillOpacity={1}
                              d=" M3,0 C3,0 0,0 0,0 C0,0 0,56 0,56 C0,56 3,56 3,56 C3,56 3,0 3,0z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3047)"
                  transform="matrix(1,0,0,1,187.5,48)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    mask="url(#__lottie_element_3136_1)"
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3133)"
                      transform="matrix(1.199999213218689,0,0,1.199999213218689,0.5000019073486328,0.2000274658203125)"
                      opacity={1}
                    >
                      <g
                        mask="url(#__lottie_element_3145_1)"
                        style={{ display: 'block' }}
                      >
                        <g
                          clipPath="url(#__lottie_element_3142)"
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                        >
                          <g
                            transform="matrix(1,0,0,1,1,6)"
                            opacity={1}
                            style={{ display: 'block' }}
                          >
                            <path
                              fill="rgb(36,66,47)"
                              fillOpacity={1}
                              d=" M3,0 C3,0 0,0 0,0 C0,0 0,56 0,56 C0,56 3,56 3,56 C3,56 3,0 3,0z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3051)"
                  transform="matrix(1,0,0,1,188.5,55)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    mask="url(#__lottie_element_3185_1)"
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3182)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                    >
                      <g
                        transform="matrix(1.2000000476837158,0,0,1.2000000476837158,0.6999999284744263,0.3999977111816406)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(36,66,47)"
                          fillOpacity={1}
                          d=" M3,0 C3,0 0,0 0,0 C0,0 0,56 0,56 C0,56 3,56 3,56 C3,56 3,0 3,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3056)"
                  transform="matrix(0.5,0,0,0.5,214,80)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_3209)"
                    transform="matrix(1,0,0,1,2,2)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3213)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_3218)"
                        transform="matrix(1,0,0,1,2,2)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g
                          transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <g
                              opacity={1}
                              transform="matrix(0.75,0,0,0.75,0,0)"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                fillOpacity={0}
                                strokeMiterlimit={4}
                                stroke="rgb(234,30,79)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M26.329999923706055,14 C26.329999923706055,20.809999465942383 20.809999465942383,26.329999923706055 14,26.329999923706055 C7.190000057220459,26.329999923706055 1.6699999570846558,20.809999465942383 1.6699999570846558,14 C1.6699999570846558,7.190000057220459 7.190000057220459,1.6699999570846558 14,1.6699999570846558 C20.809999465942383,1.6699999570846558 26.329999923706055,7.190000057220459 26.329999923706055,14 C26.329999923706055,14 26.329999923706055,14 26.329999923706055,14z M18,18 C18,18 10,10 10,10 M18,10 C18,10 10,18 10,18"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={0}
                            d=" M28,0 C28,0 0,0 0,0 C0,0 0,28 0,28 C0,28 28,28 28,28 C28,28 28,0 28,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3061)"
                  transform="matrix(0.5,0,0,0.5,215,80)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_3229)"
                    transform="matrix(1,0,0,1,2,2)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3233)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_3238)"
                        transform="matrix(1,0,0,1,2,2)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g
                          transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <g
                              opacity={1}
                              transform="matrix(0.75,0,0,0.75,0,0)"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity={0}
                                stroke="rgb(79,168,112)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M26.329999923706055,14 C26.329999923706055,20.809999465942383 20.809999465942383,26.329999923706055 14,26.329999923706055 C7.190000057220459,26.329999923706055 1.6699999570846558,20.809999465942383 1.6699999570846558,14 C1.6699999570846558,7.190000057220459 7.190000057220459,1.6699999570846558 14,1.6699999570846558 C20.809999465942383,1.6699999570846558 26.329999923706055,7.190000057220459 26.329999923706055,14 C26.329999923706055,14 26.329999923706055,14 26.329999923706055,14z M18,10.670000076293945 C18,10.670000076293945 12,18 12,18 C12,18 9.329999923706055,15.329999923706055 9.329999923706055,15.329999923706055"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,0,0)"
                          opacity={1}
                          style={{ display: 'block' }}
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={0}
                            d=" M28,0 C28,0 0,0 0,0 C0,0 0,28 0,28 C0,28 28,28 28,28 C28,28 28,0 28,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3066)"
                  transform="matrix(0.5,0,0,0.5,216,81)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_3248)"
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      clipPath="url(#__lottie_element_3253)"
                      transform="matrix(1,0,0,1,2,2)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fillOpacity={0}
                              stroke="rgb(79,168,112)"
                              strokeOpacity={1}
                              strokeWidth={3}
                              d=" M26.329999923706055,14 C26.329999923706055,20.809999465942383 20.809999465942383,26.329999923706055 14,26.329999923706055 C7.190000057220459,26.329999923706055 1.6699999570846558,20.809999465942383 1.6699999570846558,14 C1.6699999570846558,7.190000057220459 7.190000057220459,1.6699999570846558 14,1.6699999570846558 C20.809999465942383,1.6699999570846558 26.329999923706055,7.190000057220459 26.329999923706055,14 C26.329999923706055,14 26.329999923706055,14 26.329999923706055,14z M18,10.670000076293945 C18,10.670000076293945 12,18 12,18 C12,18 9.329999923706055,15.329999923706055 9.329999923706055,15.329999923706055"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,0,0)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M28,0 C28,0 0,0 0,0 C0,0 0,28 0,28 C0,28 28,28 28,28 C28,28 28,0 28,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2618)"
                transform="matrix(1,0,0,1,47,72)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_3263)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <g opacity={1} transform="matrix(0.75,0,0,0.75,0,0)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(28,33,53)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M217,213.2100067138672 C217,213.2100067138672 217,292 217,292 M217.69000244140625,67.75 C217.69000244140625,67.75 37,67.75 37,67.75 C17.1200008392334,67.75 1,83.87000274658203 1,103.75 C1,103.75 1,177.2100067138672 1,177.2100067138672 C1,197.10000610351562 17.1200008392334,213.2100067138672 37,213.2100067138672 C37,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,67.75 C217.69000244140625,67.75 397,67.75 397,67.75 C416.8800048828125,67.75 433,83.87000274658203 433,103.75 C433,103.75 433,177.2100067138672 433,177.2100067138672 C433,197.10000610351562 416.8800048828125,213.2100067138672 397,213.2100067138672 C397,213.2100067138672 217,213.2100067138672 217,213.2100067138672 M217.69000244140625,0 C217.69000244140625,0 217.69000244140625,67.75 217.69000244140625,67.75"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M434,0 C434,0 0,0 0,0 C0,0 0,292 0,292 C0,292 434,292 434,292 C434,292 434,0 434,0z"
                    />
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2623)"
                transform="matrix(0.5,0,0,0.5,29.5,191.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(4,6,24)"
                    fillOpacity={1}
                    d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                  />
                </g>
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="miter"
                      fillOpacity={0}
                      strokeMiterlimit={10}
                      stroke="rgb(29,31,53)"
                      strokeOpacity={1}
                      strokeWidth={2}
                      d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                    />
                  </g>
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M81,-1 C81,-1 -1,-1 -1,-1 C-1,-1 -1,81 -1,81 C-1,81 81,81 81,81 C81,81 81,-1 81,-1z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3281)"
                  transform="matrix(1,0,0,1,20,25)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(147,163,183)"
                          fillOpacity={1}
                          d=" M20.8700008392334,16.34000015258789 C19.350000381469727,16.34000015258789 18.100000381469727,14.90999984741211 18.100000381469727,13.180000305175781 C18.100000381469727,11.449999809265137 19.31999969482422,10.029999732971191 20.8700008392334,10.029999732971191 C22.420000076293945,10.029999732971191 23.670000076293945,11.449999809265137 23.639999389648438,13.180000305175781 C23.639999389648438,14.90999984741211 22.420000076293945,16.34000015258789 20.8700008392334,16.34000015258789 C20.8700008392334,16.34000015258789 20.8700008392334,16.34000015258789 20.8700008392334,16.34000015258789z M10.630000114440918,16.34000015258789 C9.109999656677246,16.34000015258789 7.860000133514404,14.90999984741211 7.860000133514404,13.180000305175781 C7.860000133514404,11.449999809265137 9.079999923706055,10.029999732971191 10.630000114440918,10.029999732971191 C12.180000305175781,10.029999732971191 13.420000076293945,11.449999809265137 13.399999618530273,13.180000305175781 C13.399999618530273,14.90999984741211 12.180000305175781,16.34000015258789 10.630000114440918,16.34000015258789 C10.630000114440918,16.34000015258789 10.630000114440918,16.34000015258789 10.630000114440918,16.34000015258789z M26.450000762939453,2.069999933242798 C24.43000030517578,1.1200000047683716 22.290000915527344,0.44999998807907104 20.09000015258789,0.07000000029802322 C19.81999969482422,0.5600000023841858 19.489999771118164,1.2300000190734863 19.270000457763672,1.7599999904632568 C16.899999618530273,1.399999976158142 14.5600004196167,1.399999976158142 12.229999542236328,1.7599999904632568 C12.010000228881836,1.2300000190734863 11.680000305175781,0.5600000023841858 11.399999618530273,0.07000000029802322 C9.199999809265137,0.44999998807907104 7.059999942779541,1.1200000047683716 5.039999961853027,2.069999933242798 C1.0099999904632568,8.149999618530273 -0.07999999821186066,14.079999923706055 0.4699999988079071,19.93000030517578 C3.140000104904175,21.920000076293945 5.71999979019165,23.139999389648438 8.270000457763672,23.93000030517578 C8.899999618530273,23.059999465942383 9.460000038146973,22.139999389648438 9.9399995803833,21.18000030517578 C9.029999732971191,20.829999923706055 8.149999618530273,20.399999618530273 7.309999942779541,19.899999618530273 C7.53000020980835,19.739999771118164 7.739999771118164,19.56999969482422 7.949999809265137,19.389999389648438 C13.020000457763672,21.760000228881836 18.540000915527344,21.760000228881836 23.549999237060547,19.389999389648438 C23.760000228881836,19.56999969482422 23.969999313354492,19.739999771118164 24.190000534057617,19.899999618530273 C23.350000381469727,20.399999618530273 22.469999313354492,20.829999923706055 21.559999465942383,21.18000030517578 C22.040000915527344,22.139999389648438 22.600000381469727,23.06999969482422 23.229999542236328,23.93000030517578 C25.780000686645508,23.139999389648438 28.360000610351562,21.93000030517578 31.030000686645508,19.93000030517578 C31.670000076293945,13.149999618530273 29.940000534057617,7.28000020980835 26.450000762939453,2.069999933242798 C26.450000762939453,2.069999933242798 26.450000762939453,2.069999933242798 26.450000762939453,2.069999933242798z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M42,0 C42,0 0,0 0,0 C0,0 0,32 0,32 C0,32 42,32 42,32 C42,32 42,0 42,0z"
                    />
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2628)"
                transform="matrix(0.5,0,0,0.5,457.5,191.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(4,6,24)"
                    fillOpacity={1}
                    d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                  />
                </g>
                <g
                  transform="matrix(1,0,0,1,1,1)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="miter"
                      fillOpacity={0}
                      strokeMiterlimit={10}
                      stroke="rgb(29,31,53)"
                      strokeOpacity={1}
                      strokeWidth={2}
                      d=" M80,40 C80,17.923999786376953 62.07600021362305,0 40,0 C40,0 40,0 40,0 C17.923999786376953,0 0,17.923999786376953 0,40 C0,40 0,40 0,40 C0,62.07600021362305 17.923999786376953,80 40,80 C40,80 40,80 40,80 C62.07600021362305,80 80,62.07600021362305 80,40 C80,40 80,40 80,40z"
                    />
                  </g>
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M81,-1 C81,-1 -1,-1 -1,-1 C-1,-1 -1,81 -1,81 C-1,81 81,81 81,81 C81,81 81,-1 81,-1z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3299)"
                  transform="matrix(1,0,0,1,19.777000427246094,25)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_3304)"
                    transform="matrix(1,0,0,1,0,8)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(66,132,244)"
                            fillOpacity={1}
                            d=" M7.230000019073486,17.8799991607666 C7.230000019073486,17.8799991607666 7.230000019073486,5.579999923706055 7.230000019073486,5.579999923706055 C7.230000019073486,5.579999923706055 3.4200000762939453,2.0899999141693115 3.4200000762939453,2.0899999141693115 C3.4200000762939453,2.0899999141693115 0,0.1599999964237213 0,0.1599999964237213 C0,0.1599999964237213 0,15.710000038146973 0,15.710000038146973 C0,16.90999984741211 0.9700000286102295,17.8799991607666 2.1700000762939453,17.8799991607666 C2.1700000762939453,17.8799991607666 7.230000019073486,17.8799991607666 7.230000019073486,17.8799991607666z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M10,0 C10,0 0,0 0,0 C0,0 0,24 0,24 C0,24 10,24 10,24 C10,24 10,0 10,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3309)"
                    transform="matrix(1,0,0,1,32,8)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(51,168,84)"
                            fillOpacity={1}
                            d=" M0.6000000238418579,17.8799991607666 C0.6000000238418579,17.8799991607666 5.659999847412109,17.8799991607666 5.659999847412109,17.8799991607666 C6.860000133514404,17.8799991607666 7.840000152587891,16.90999984741211 7.840000152587891,15.710000038146973 C7.840000152587891,15.710000038146973 7.840000152587891,0.1599999964237213 7.840000152587891,0.1599999964237213 C7.840000152587891,0.1599999964237213 3.9600000381469727,2.380000114440918 3.9600000381469727,2.380000114440918 C3.9600000381469727,2.380000114440918 0.6000000238418579,5.579999923706055 0.6000000238418579,5.579999923706055 C0.6000000238418579,5.579999923706055 0.6000000238418579,17.8799991607666 0.6000000238418579,17.8799991607666z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M11,0 C11,0 0,0 0,0 C0,0 0,24 0,24 C0,24 11,24 11,24 C11,24 11,0 11,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3314)"
                    transform="matrix(1,0,0,1,8,2)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(234,66,53)"
                              fillOpacity={1}
                              d=" M1.2300000190734863,10.079999923706055 C1.2300000190734863,10.079999923706055 0.7099999785423279,5.28000020980835 0.7099999785423279,5.28000020980835 C0.7099999785423279,5.28000020980835 1.2300000190734863,0.6800000071525574 1.2300000190734863,0.6800000071525574 C1.2300000190734863,0.6800000071525574 9.920000076293945,7.190000057220459 9.920000076293945,7.190000057220459 C9.920000076293945,7.190000057220459 18.600000381469727,0.6800000071525574 18.600000381469727,0.6800000071525574 C18.600000381469727,0.6800000071525574 19.18000030517578,5.03000020980835 19.18000030517578,5.03000020980835 C19.18000030517578,5.03000020980835 18.600000381469727,10.079999923706055 18.600000381469727,10.079999923706055 C18.600000381469727,10.079999923706055 9.920000076293945,16.59000015258789 9.920000076293945,16.59000015258789 C9.920000076293945,16.59000015258789 1.2300000190734863,10.079999923706055 1.2300000190734863,10.079999923706055z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M26,0 C26,0 0,0 0,0 C0,0 0,23 0,23 C0,23 26,23 26,23 C26,23 26,0 26,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3319)"
                    transform="matrix(1,0,0,1,32,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(249,188,5)"
                            fillOpacity={1}
                            d=" M0.6000000238418579,2.180000066757202 C0.6000000238418579,2.180000066757202 0.6000000238418579,11.579999923706055 0.6000000238418579,11.579999923706055 C0.6000000238418579,11.579999923706055 7.840000152587891,6.159999847412109 7.840000152587891,6.159999847412109 C7.840000152587891,6.159999847412109 7.840000152587891,3.259999990463257 7.840000152587891,3.259999990463257 C7.840000152587891,0.5799999833106995 4.769999980926514,-0.949999988079071 2.630000114440918,0.6600000262260437 C2.630000114440918,0.6600000262260437 0.6000000238418579,2.180000066757202 0.6000000238418579,2.180000066757202z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M11,0 C11,0 0,0 0,0 C0,0 0,16 0,16 C0,16 11,16 11,16 C11,16 11,0 11,0z"
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3324)"
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(196,33,30)"
                            fillOpacity={1}
                            d=" M0,6.159999847412109 C0,6.159999847412109 7.230000019073486,11.579999923706055 7.230000019073486,11.579999923706055 C7.230000019073486,11.579999923706055 7.230000019073486,2.180000066757202 7.230000019073486,2.180000066757202 C7.230000019073486,2.180000066757202 5.210000038146973,0.6600000262260437 5.210000038146973,0.6600000262260437 C3.059999942779541,-0.949999988079071 0,0.5799999833106995 0,3.259999990463257 C0,3.259999990463257 0,6.159999847412109 0,6.159999847412109z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M10,0 C10,0 0,0 0,0 C0,0 0,16 0,16 C0,16 10,16 10,16 C10,16 10,0 10,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2633)"
                transform="matrix(0.5,0,0,0.5,149,-12.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,61,61)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(20,22,36)"
                    fillOpacity={1}
                    d=" M342,36 C342,16.13159942626953 325.868408203125,0 306,0 C306,0 36,0 36,0 C16.13159942626953,0 0,16.13159942626953 0,36 C0,36 0,36 0,36 C0,55.86840057373047 16.13159942626953,72 36,72 C36,72 306,72 306,72 C325.868408203125,72 342,55.86840057373047 342,36 C342,36 342,36 342,36z"
                  />
                </g>
                <g
                  clipPath="url(#__lottie_element_3363)"
                  transform="matrix(1,0,0,1,95,81)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_3373)"
                    transform="matrix(1,0,0,1,2,4)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(147,163,183)"
                            fillOpacity={1}
                            d=" M20.8799991607666,4.75 C20.8799991607666,2.4700000286102295 19.030000686645508,0.6299999952316284 16.75,0.6299999952316284 C16.75,0.6299999952316284 16.75,2.880000114440918 16.75,2.880000114440918 C17.790000915527344,2.880000114440918 18.6299991607666,3.7100000381469727 18.6299991607666,4.75 C18.6299991607666,4.75 20.8799991607666,4.75 20.8799991607666,4.75z M11.34000015258789,7.980000019073486 C10.8100004196167,8.25 10.1899995803833,8.25 9.65999984741211,7.980000019073486 C9.65999984741211,7.980000019073486 8.640000343322754,9.979999542236328 8.640000343322754,9.979999542236328 C9.8100004196167,10.569999694824219 11.1899995803833,10.569999694824219 12.359999656677246,9.979999542236328 C12.359999656677246,9.979999542236328 11.34000015258789,7.980000019073486 11.34000015258789,7.980000019073486z M18.6299991607666,13.25 C18.6299991607666,14.289999961853027 17.790000915527344,15.130000114440918 16.75,15.130000114440918 C16.75,15.130000114440918 16.75,17.3799991607666 16.75,17.3799991607666 C19.030000686645508,17.3799991607666 20.8799991607666,15.529999732971191 20.8799991607666,13.25 C20.8799991607666,13.25 18.6299991607666,13.25 18.6299991607666,13.25z M4.25,15.130000114440918 C3.2100000381469727,15.130000114440918 2.380000114440918,14.289999961853027 2.380000114440918,13.25 C2.380000114440918,13.25 0.12999999523162842,13.25 0.12999999523162842,13.25 C0.12999999523162842,15.529999732971191 1.9700000286102295,17.3799991607666 4.25,17.3799991607666 C4.25,17.3799991607666 4.25,15.130000114440918 4.25,15.130000114440918z M2.380000114440918,4.75 C2.380000114440918,3.7100000381469727 3.2100000381469727,2.880000114440918 4.25,2.880000114440918 C4.25,2.880000114440918 4.25,0.6299999952316284 4.25,0.6299999952316284 C1.9700000286102295,0.6299999952316284 0.12999999523162842,2.4700000286102295 0.12999999523162842,4.75 C0.12999999523162842,4.75 2.380000114440918,4.75 2.380000114440918,4.75z M9.65999984741211,7.980000019073486 C9.65999984741211,7.980000019073486 1.7599999904632568,4 1.7599999904632568,4 C1.7599999904632568,4 0.7400000095367432,6 0.7400000095367432,6 C0.7400000095367432,6 8.640000343322754,9.979999542236328 8.640000343322754,9.979999542236328 C8.640000343322754,9.979999542236328 9.65999984741211,7.980000019073486 9.65999984741211,7.980000019073486z M19.239999771118164,4 C19.239999771118164,4 11.34000015258789,7.980000019073486 11.34000015258789,7.980000019073486 C11.34000015258789,7.980000019073486 12.359999656677246,9.979999542236328 12.359999656677246,9.979999542236328 C12.359999656677246,9.979999542236328 20.260000228881836,6 20.260000228881836,6 C20.260000228881836,6 19.239999771118164,4 19.239999771118164,4z M4.25,2.880000114440918 C4.25,2.880000114440918 16.75,2.880000114440918 16.75,2.880000114440918 C16.75,2.880000114440918 16.75,0.6299999952316284 16.75,0.6299999952316284 C16.75,0.6299999952316284 4.25,0.6299999952316284 4.25,0.6299999952316284 C4.25,0.6299999952316284 4.25,2.880000114440918 4.25,2.880000114440918z M2.380000114440918,13.25 C2.380000114440918,13.25 2.380000114440918,4.75 2.380000114440918,4.75 C2.380000114440918,4.75 0.12999999523162842,4.75 0.12999999523162842,4.75 C0.12999999523162842,4.75 0.12999999523162842,13.25 0.12999999523162842,13.25 C0.12999999523162842,13.25 2.380000114440918,13.25 2.380000114440918,13.25z M16.75,15.130000114440918 C16.75,15.130000114440918 4.25,15.130000114440918 4.25,15.130000114440918 C4.25,15.130000114440918 4.25,17.3799991607666 4.25,17.3799991607666 C4.25,17.3799991607666 16.75,17.3799991607666 16.75,17.3799991607666 C16.75,17.3799991607666 16.75,15.130000114440918 16.75,15.130000114440918z M18.6299991607666,4.75 C18.6299991607666,4.75 18.6299991607666,13.25 18.6299991607666,13.25 C18.6299991607666,13.25 20.8799991607666,13.25 20.8799991607666,13.25 C20.8799991607666,13.25 20.8799991607666,4.75 20.8799991607666,4.75 C20.8799991607666,4.75 18.6299991607666,4.75 18.6299991607666,4.75z M1.7599999904632568,4 C1.2100000381469727,3.7200000286102295 0.5299999713897705,3.940000057220459 0.25,4.489999771118164 C-0.029999999329447746,5.039999961853027 0.1899999976158142,5.71999979019165 0.7400000095367432,6 C0.7400000095367432,6 1.7599999904632568,4 1.7599999904632568,4z M20.260000228881836,6 C20.809999465942383,5.71999979019165 21.030000686645508,5.039999961853027 20.75,4.489999771118164 C20.469999313354492,3.940000057220459 19.790000915527344,3.7200000286102295 19.239999771118164,4 C19.239999771118164,4 20.260000228881836,6 20.260000228881836,6z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M28,0 C28,0 0,0 0,0 C0,0 0,24 0,24 C0,24 28,24 28,24 C28,24 28,0 28,0z"
                      />
                    </g>
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_3368)"
                  filter="url(#__lottie_element_3370)"
                  transform="matrix(1,0,0,1,87,24)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M342,0 C342,0 0,0 0,0 C0,0 0,146 0,146 C0,146 342,146 342,146 C342,146 342,0 342,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3386)"
                    transform="matrix(1,0,0,1,60,60)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(204,214,224)"
                            fillOpacity={1}
                            d=" M161.89999389648438,2.6600000858306885 C161.89999389648438,2.6600000858306885 163.97000122070312,2.6600000858306885 163.97000122070312,2.6600000858306885 C163.97000122070312,2.6600000858306885 163.97000122070312,14.100000381469727 163.97000122070312,14.100000381469727 C163.97000122070312,14.569999694824219 164.22000122070312,14.800000190734863 164.6699981689453,14.800000190734863 C164.6699981689453,14.800000190734863 165.50999450683594,14.800000190734863 165.50999450683594,14.800000190734863 C165.50999450683594,14.800000190734863 165.50999450683594,16.5 165.50999450683594,16.5 C165.50999450683594,16.5 164.22000122070312,16.5 164.22000122070312,16.5 C162.83999633789062,16.5 161.89999389648438,15.600000381469727 161.89999389648438,14.199999809265137 C161.89999389648438,14.199999809265137 161.89999389648438,2.6600000858306885 161.89999389648438,2.6600000858306885z M156.4600067138672,4.639999866485596 C156.4600067138672,4.639999866485596 156.4600067138672,2.680000066757202 156.4600067138672,2.680000066757202 C156.4600067138672,2.680000066757202 158.6300048828125,2.680000066757202 158.6300048828125,2.680000066757202 C158.6300048828125,2.680000066757202 158.6300048828125,4.639999866485596 158.6300048828125,4.639999866485596 C158.6300048828125,4.639999866485596 156.4600067138672,4.639999866485596 156.4600067138672,4.639999866485596z M156.5,6.159999847412109 C156.5,6.159999847412109 158.57000732421875,6.159999847412109 158.57000732421875,6.159999847412109 C158.57000732421875,6.159999847412109 158.57000732421875,16.5 158.57000732421875,16.5 C158.57000732421875,16.5 156.5,16.5 156.5,16.5 C156.5,16.5 156.5,6.159999847412109 156.5,6.159999847412109z M146.14999389648438,13.75 C146.14999389648438,14.510000228881836 146.82000732421875,15.140000343322754 148.17999267578125,15.140000343322754 C149.72000122070312,15.119999885559082 150.92999267578125,14.020000457763672 150.92999267578125,11.800000190734863 C150.92999267578125,11.800000190734863 150.92999267578125,11.65999984741211 150.92999267578125,11.65999984741211 C150.92999267578125,11.65999984741211 148.72999572753906,12.050000190734863 148.72999572753906,12.050000190734863 C147.30999755859375,12.300000190734863 146.14999389648438,12.449999809265137 146.14999389648438,13.75 C146.14999389648438,13.75 146.14999389648438,13.75 146.14999389648438,13.75z M144.17999267578125,9.270000457763672 C144.58999633789062,7.179999828338623 146.22999572753906,5.929999828338623 148.61000061035156,5.929999828338623 C151.4199981689453,5.929999828338623 152.9600067138672,7.489999771118164 152.9600067138672,10.319999694824219 C152.9600067138672,10.319999694824219 152.9600067138672,14.15999984741211 152.9600067138672,14.15999984741211 C152.9600067138672,14.6899995803833 153.19000244140625,14.880000114440918 153.60000610351562,14.880000114440918 C153.60000610351562,14.880000114440918 154.00999450683594,14.880000114440918 154.00999450683594,14.880000114440918 C154.00999450683594,14.880000114440918 154.00999450683594,16.5 154.00999450683594,16.5 C154.00999450683594,16.5 153.3699951171875,16.5 153.3699951171875,16.5 C152.44000244140625,16.520000457763672 151.1699981689453,16.360000610351562 151.07000732421875,14.899999618530273 C150.60000610351562,15.890000343322754 149.44000244140625,16.729999542236328 147.72999572753906,16.729999542236328 C145.63999938964844,16.729999542236328 144.00999450683594,15.619999885559082 144.00999450683594,13.789999961853027 C144.00999450683594,11.720000267028809 145.5500030517578,11.119999885559082 147.92999267578125,10.670000076293945 C147.92999267578125,10.670000076293945 150.88999938964844,10.09000015258789 150.88999938964844,10.09000015258789 C150.8699951171875,8.430000305175781 150.11000061035156,7.610000133514404 148.61000061035156,7.610000133514404 C147.39999389648438,7.610000133514404 146.60000610351562,8.229999542236328 146.3300018310547,9.399999618530273 C146.3300018310547,9.399999618530273 144.17999267578125,9.270000457763672 144.17999267578125,9.270000457763672z M127.18000030517578,6.159999847412109 C127.18000030517578,6.159999847412109 129.07000732421875,6.159999847412109 129.07000732421875,6.159999847412109 C129.07000732421875,6.159999847412109 129.11000061035156,7.860000133514404 129.11000061035156,7.860000133514404 C129.6199951171875,6.630000114440918 130.6699981689453,5.929999828338623 132.0500030517578,5.929999828338623 C133.52999877929688,5.929999828338623 134.61000061035156,6.710000038146973 135.05999755859375,8.069999694824219 C135.52999877929688,6.690000057220459 136.60000610351562,5.929999828338623 138.16000366210938,5.929999828338623 C140.25,5.929999828338623 141.49000549316406,7.329999923706055 141.49000549316406,9.850000381469727 C141.49000549316406,9.850000381469727 141.49000549316406,16.5 141.49000549316406,16.5 C141.49000549316406,16.5 139.42999267578125,16.5 139.42999267578125,16.5 C139.42999267578125,16.5 139.42999267578125,10.489999771118164 139.42999267578125,10.489999771118164 C139.42999267578125,8.65999984741211 138.77999877929688,7.670000076293945 137.61000061035156,7.670000076293945 C136.1300048828125,7.670000076293945 135.30999755859375,8.699999809265137 135.30999755859375,10.489999771118164 C135.30999755859375,10.489999771118164 135.30999755859375,16.5 135.30999755859375,16.5 C135.30999755859375,16.5 133.36000061035156,16.5 133.36000061035156,16.5 C133.36000061035156,16.5 133.36000061035156,10.489999771118164 133.36000061035156,10.489999771118164 C133.36000061035156,8.699999809265137 132.6999969482422,7.670000076293945 131.5500030517578,7.670000076293945 C130.08999633789062,7.670000076293945 129.25,8.699999809265137 129.25,10.489999771118164 C129.25,10.489999771118164 129.25,16.5 129.25,16.5 C129.25,16.5 127.18000030517578,16.5 127.18000030517578,16.5 C127.18000030517578,16.5 127.18000030517578,6.159999847412109 127.18000030517578,6.159999847412109z M117.19000244140625,10.380000114440918 C117.19000244140625,10.380000114440918 122.4000015258789,10.380000114440918 122.4000015258789,10.380000114440918 C122.16999816894531,8.40999984741211 121.06999969482422,7.690000057220459 119.9000015258789,7.690000057220459 C118.4000015258789,7.690000057220459 117.41999816894531,8.680000305175781 117.19000244140625,10.380000114440918 C117.19000244140625,10.380000114440918 117.19000244140625,10.380000114440918 117.19000244140625,10.380000114440918z M114.97000122070312,11.329999923706055 C114.97000122070312,8.050000190734863 116.9000015258789,5.929999828338623 119.9000015258789,5.929999828338623 C122.37999725341797,5.929999828338623 124.45999908447266,7.590000152587891 124.55999755859375,11.25 C124.55999755859375,11.25 124.58000183105469,11.920000076293945 124.58000183105469,11.920000076293945 C124.58000183105469,11.920000076293945 117.1500015258789,11.920000076293945 117.1500015258789,11.920000076293945 C117.29000091552734,13.850000381469727 118.27999877929688,14.979999542236328 119.9000015258789,14.979999542236328 C120.91999816894531,14.979999542236328 121.8499984741211,14.380000114440918 122.26000213623047,13.380000114440918 C122.26000213623047,13.380000114440918 124.43000030517578,13.539999961853027 124.43000030517578,13.539999961853027 C123.81999969482422,15.510000228881836 122.01000213623047,16.729999542236328 119.9000015258789,16.729999542236328 C116.9000015258789,16.729999542236328 114.97000122070312,14.609999656677246 114.97000122070312,11.329999923706055 C114.97000122070312,11.329999923706055 114.97000122070312,11.329999923706055 114.97000122070312,11.329999923706055z M101.47000122070312,6.159999847412109 C101.47000122070312,6.159999847412109 103.7699966430664,14.15999984741211 103.7699966430664,14.15999984741211 C103.7699966430664,14.15999984741211 106.06999969482422,6.159999847412109 106.06999969482422,6.159999847412109 C106.06999969482422,6.159999847412109 108.18000030517578,6.159999847412109 108.18000030517578,6.159999847412109 C108.18000030517578,6.159999847412109 104.9800033569336,16.5 104.9800033569336,16.5 C104.9800033569336,16.5 102.68000030517578,16.5 102.68000030517578,16.5 C102.68000030517578,16.5 100.5,9.09000015258789 100.5,9.09000015258789 C100.5,9.09000015258789 98.33000183105469,16.5 98.33000183105469,16.5 C98.33000183105469,16.5 96.02999877929688,16.5 96.02999877929688,16.5 C96.02999877929688,16.5 92.8499984741211,6.159999847412109 92.8499984741211,6.159999847412109 C92.8499984741211,6.159999847412109 94.94000244140625,6.159999847412109 94.94000244140625,6.159999847412109 C94.94000244140625,6.159999847412109 97.22000122070312,14.15999984741211 97.22000122070312,14.15999984741211 C97.22000122070312,14.15999984741211 99.5199966430664,6.159999847412109 99.5199966430664,6.159999847412109 C99.5199966430664,6.159999847412109 101.47000122070312,6.159999847412109 101.47000122070312,6.159999847412109z M84.30000305175781,10.380000114440918 C84.30000305175781,10.380000114440918 89.5,10.380000114440918 89.5,10.380000114440918 C89.2699966430664,8.40999984741211 88.18000030517578,7.690000057220459 87.01000213623047,7.690000057220459 C85.51000213623047,7.690000057220459 84.52999877929688,8.680000305175781 84.30000305175781,10.380000114440918 C84.30000305175781,10.380000114440918 84.30000305175781,10.380000114440918 84.30000305175781,10.380000114440918z M82.06999969482422,11.329999923706055 C82.06999969482422,8.050000190734863 84.01000213623047,5.929999828338623 87.01000213623047,5.929999828338623 C89.48999786376953,5.929999828338623 91.56999969482422,7.590000152587891 91.66999816894531,11.25 C91.66999816894531,11.25 91.69000244140625,11.920000076293945 91.69000244140625,11.920000076293945 C91.69000244140625,11.920000076293945 84.26000213623047,11.920000076293945 84.26000213623047,11.920000076293945 C84.4000015258789,13.850000381469727 85.38999938964844,14.979999542236328 87.01000213623047,14.979999542236328 C88.0199966430664,14.979999542236328 88.95999908447266,14.380000114440918 89.37000274658203,13.380000114440918 C89.37000274658203,13.380000114440918 91.52999877929688,13.539999961853027 91.52999877929688,13.539999961853027 C90.91999816894531,15.510000228881836 89.12000274658203,16.729999542236328 87.01000213623047,16.729999542236328 C84.01000213623047,16.729999542236328 82.06999969482422,14.609999656677246 82.06999969482422,11.329999923706055 C82.06999969482422,11.329999923706055 82.06999969482422,11.329999923706055 82.06999969482422,11.329999923706055z M71.04000091552734,6.159999847412109 C71.04000091552734,6.159999847412109 72.93000030517578,6.159999847412109 72.93000030517578,6.159999847412109 C72.93000030517578,6.159999847412109 72.9800033569336,7.900000095367432 72.9800033569336,7.900000095367432 C73.51000213623047,6.510000228881836 74.72000122070312,5.929999828338623 76.12000274658203,5.929999828338623 C78.44000244140625,5.929999828338623 79.62999725341797,7.590000152587891 79.62999725341797,9.850000381469727 C79.62999725341797,9.850000381469727 79.62999725341797,16.5 79.62999725341797,16.5 C79.62999725341797,16.5 77.56999969482422,16.5 77.56999969482422,16.5 C77.56999969482422,16.5 77.56999969482422,10.489999771118164 77.56999969482422,10.489999771118164 C77.56999969482422,8.65999984741211 77,7.670000076293945 75.55999755859375,7.670000076293945 C74.05999755859375,7.670000076293945 73.0999984741211,8.65999984741211 73.0999984741211,10.489999771118164 C73.0999984741211,10.489999771118164 73.0999984741211,16.5 73.0999984741211,16.5 C73.0999984741211,16.5 71.04000091552734,16.5 71.04000091552734,16.5 C71.04000091552734,16.5 71.04000091552734,6.159999847412109 71.04000091552734,6.159999847412109z M55.79999923706055,10.380000114440918 C55.79999923706055,10.380000114440918 61.0099983215332,10.380000114440918 61.0099983215332,10.380000114440918 C60.779998779296875,8.40999984741211 59.68000030517578,7.690000057220459 58.5099983215332,7.690000057220459 C57.0099983215332,7.690000057220459 56.029998779296875,8.680000305175781 55.79999923706055,10.380000114440918 C55.79999923706055,10.380000114440918 55.79999923706055,10.380000114440918 55.79999923706055,10.380000114440918z M53.58000183105469,11.329999923706055 C53.58000183105469,8.050000190734863 55.5099983215332,5.929999828338623 58.5099983215332,5.929999828338623 C60.9900016784668,5.929999828338623 63.06999969482422,7.590000152587891 63.16999816894531,11.25 C63.16999816894531,11.25 63.189998626708984,11.920000076293945 63.189998626708984,11.920000076293945 C63.189998626708984,11.920000076293945 55.7599983215332,11.920000076293945 55.7599983215332,11.920000076293945 C55.900001525878906,13.850000381469727 56.88999938964844,14.979999542236328 58.5099983215332,14.979999542236328 C59.52000045776367,14.979999542236328 60.459999084472656,14.380000114440918 60.869998931884766,13.380000114440918 C60.869998931884766,13.380000114440918 63.040000915527344,13.539999961853027 63.040000915527344,13.539999961853027 C62.43000030517578,15.510000228881836 60.619998931884766,16.729999542236328 58.5099983215332,16.729999542236328 C55.5099983215332,16.729999542236328 53.58000183105469,14.609999656677246 53.58000183105469,11.329999923706055 C53.58000183105469,11.329999923706055 53.58000183105469,11.329999923706055 53.58000183105469,11.329999923706055z M47.11000061035156,3.819999933242798 C47.11000061035156,3.819999933242798 49.18000030517578,3.819999933242798 49.18000030517578,3.819999933242798 C49.18000030517578,3.819999933242798 49.18000030517578,6.159999847412109 49.18000030517578,6.159999847412109 C49.18000030517578,6.159999847412109 51.90999984741211,6.159999847412109 51.90999984741211,6.159999847412109 C51.90999984741211,6.159999847412109 51.90999984741211,7.840000152587891 51.90999984741211,7.840000152587891 C51.90999984741211,7.840000152587891 49.18000030517578,7.840000152587891 49.18000030517578,7.840000152587891 C49.18000030517578,7.840000152587891 49.18000030517578,13.539999961853027 49.18000030517578,13.539999961853027 C49.18000030517578,14.380000114440918 49.59000015258789,14.800000190734863 50.38999938964844,14.800000190734863 C50.38999938964844,14.800000190734863 51.88999938964844,14.800000190734863 51.88999938964844,14.800000190734863 C51.88999938964844,14.800000190734863 51.88999938964844,16.5 51.88999938964844,16.5 C51.88999938964844,16.5 50.18000030517578,16.5 50.18000030517578,16.5 C48.189998626708984,16.5 47.11000061035156,15.470000267028809 47.11000061035156,13.539999961853027 C47.11000061035156,13.539999961853027 47.11000061035156,7.840000152587891 47.11000061035156,7.840000152587891 C47.11000061035156,7.840000152587891 45.540000915527344,7.840000152587891 45.540000915527344,7.840000152587891 C45.540000915527344,7.840000152587891 45.540000915527344,6.159999847412109 45.540000915527344,6.159999847412109 C45.540000915527344,6.159999847412109 47.11000061035156,6.159999847412109 47.11000061035156,6.159999847412109 C47.11000061035156,6.159999847412109 47.11000061035156,3.819999933242798 47.11000061035156,3.819999933242798z M36.59000015258789,13.75 C36.59000015258789,14.510000228881836 37.2400016784668,15.140000343322754 38.61000061035156,15.140000343322754 C40.150001525878906,15.119999885559082 41.36000061035156,14.020000457763672 41.36000061035156,11.800000190734863 C41.36000061035156,11.800000190734863 41.36000061035156,11.65999984741211 41.36000061035156,11.65999984741211 C41.36000061035156,11.65999984741211 39.15999984741211,12.050000190734863 39.15999984741211,12.050000190734863 C37.7400016784668,12.300000190734863 36.59000015258789,12.449999809265137 36.59000015258789,13.75 C36.59000015258789,13.75 36.59000015258789,13.75 36.59000015258789,13.75z M34.61000061035156,9.270000457763672 C35.02000045776367,7.179999828338623 36.65999984741211,5.929999828338623 39.040000915527344,5.929999828338623 C41.84000015258789,5.929999828338623 43.38999938964844,7.489999771118164 43.38999938964844,10.319999694824219 C43.38999938964844,10.319999694824219 43.38999938964844,14.15999984741211 43.38999938964844,14.15999984741211 C43.38999938964844,14.6899995803833 43.619998931884766,14.880000114440918 44.029998779296875,14.880000114440918 C44.029998779296875,14.880000114440918 44.439998626708984,14.880000114440918 44.439998626708984,14.880000114440918 C44.439998626708984,14.880000114440918 44.439998626708984,16.5 44.439998626708984,16.5 C44.439998626708984,16.5 43.79999923706055,16.5 43.79999923706055,16.5 C42.86000061035156,16.520000457763672 41.59000015258789,16.360000610351562 41.5,14.899999618530273 C41.029998779296875,15.890000343322754 39.869998931884766,16.729999542236328 38.15999984741211,16.729999542236328 C36.06999969482422,16.729999542236328 34.439998626708984,15.619999885559082 34.439998626708984,13.789999961853027 C34.439998626708984,11.720000267028809 35.97999954223633,11.119999885559082 38.36000061035156,10.670000076293945 C38.36000061035156,10.670000076293945 41.31999969482422,10.09000015258789 41.31999969482422,10.09000015258789 C41.29999923706055,8.430000305175781 40.540000915527344,7.610000133514404 39.040000915527344,7.610000133514404 C37.83000183105469,7.610000133514404 37.029998779296875,8.229999542236328 36.7599983215332,9.399999618530273 C36.7599983215332,9.399999618530273 34.61000061035156,9.270000457763672 34.61000061035156,9.270000457763672z M24.829999923706055,10.380000114440918 C24.829999923706055,10.380000114440918 30.040000915527344,10.380000114440918 30.040000915527344,10.380000114440918 C29.809999465942383,8.40999984741211 28.709999084472656,7.690000057220459 27.540000915527344,7.690000057220459 C26.040000915527344,7.690000057220459 25.059999465942383,8.680000305175781 24.829999923706055,10.380000114440918 C24.829999923706055,10.380000114440918 24.829999923706055,10.380000114440918 24.829999923706055,10.380000114440918z M22.610000610351562,11.329999923706055 C22.610000610351562,8.050000190734863 24.540000915527344,5.929999828338623 27.540000915527344,5.929999828338623 C30.020000457763672,5.929999828338623 32.099998474121094,7.590000152587891 32.20000076293945,11.25 C32.20000076293945,11.25 32.220001220703125,11.920000076293945 32.220001220703125,11.920000076293945 C32.220001220703125,11.920000076293945 24.790000915527344,11.920000076293945 24.790000915527344,11.920000076293945 C24.93000030517578,13.850000381469727 25.920000076293945,14.979999542236328 27.540000915527344,14.979999542236328 C28.549999237060547,14.979999542236328 29.489999771118164,14.380000114440918 29.899999618530273,13.380000114440918 C29.899999618530273,13.380000114440918 32.060001373291016,13.539999961853027 32.060001373291016,13.539999961853027 C31.450000762939453,15.510000228881836 29.649999618530273,16.729999542236328 27.540000915527344,16.729999542236328 C24.540000915527344,16.729999542236328 22.610000610351562,14.609999656677246 22.610000610351562,11.329999923706055 C22.610000610351562,11.329999923706055 22.610000610351562,11.329999923706055 22.610000610351562,11.329999923706055z M15.699999809265137,6.159999847412109 C15.699999809265137,6.159999847412109 17.59000015258789,6.159999847412109 17.59000015258789,6.159999847412109 C17.59000015258789,6.159999847412109 17.649999618530273,8.109999656677246 17.649999618530273,8.109999656677246 C18.020000457763672,6.789999961853027 18.799999237060547,6.159999847412109 20.1299991607666,6.159999847412109 C20.1299991607666,6.159999847412109 21.1200008392334,6.159999847412109 21.1200008392334,6.159999847412109 C21.1200008392334,6.159999847412109 21.1200008392334,7.860000133514404 21.1200008392334,7.860000133514404 C21.1200008392334,7.860000133514404 20.110000610351562,7.860000133514404 20.110000610351562,7.860000133514404 C18.489999771118164,7.860000133514404 17.770000457763672,8.760000228881836 17.770000457763672,10.470000267028809 C17.770000457763672,10.470000267028809 17.770000457763672,16.5 17.770000457763672,16.5 C17.770000457763672,16.5 15.699999809265137,16.5 15.699999809265137,16.5 C15.699999809265137,16.5 15.699999809265137,6.159999847412109 15.699999809265137,6.159999847412109z M13.050000190734863,11.800000190734863 C12.520000457763672,14.84000015258789 10.529999732971191,16.809999465942383 7.289999961853027,16.809999465942383 C3.2699999809265137,16.809999465942383 0.8999999761581421,13.649999618530273 0.8999999761581421,9.600000381469727 C0.8999999761581421,5.539999961853027 3.2699999809265137,2.3399999141693115 7.289999961853027,2.3399999141693115 C10.3100004196167,2.3399999141693115 12.34000015258789,4.190000057220459 12.949999809265137,7.079999923706055 C12.949999809265137,7.079999923706055 10.729999542236328,7.199999809265137 10.729999542236328,7.199999809265137 C10.319999694824219,5.329999923706055 9.0600004196167,4.269999980926514 7.269999980926514,4.269999980926514 C4.360000133514404,4.269999980926514 3.0799999237060547,6.690000057220459 3.0799999237060547,9.600000381469727 C3.0799999237060547,12.489999771118164 4.380000114440918,14.880000114440918 7.269999980926514,14.880000114440918 C9.15999984741211,14.880000114440918 10.430000305175781,13.729999542236328 10.800000190734863,11.680000305175781 C10.800000190734863,11.680000305175781 13.050000190734863,11.800000190734863 13.050000190734863,11.800000190734863z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M222,0 C222,0 0,0 0,0 C0,0 0,26 0,26 C0,26 222,26 222,26 C222,26 222,0 222,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,262,326)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <path
                  fill="url(#__lottie_element_2640)"
                  fillOpacity={1}
                  d=" M7,0 C7,0 0,0 0,0 C0,0 0,38 0,38 C0,38 7,38 7,38 C7,38 7,0 7,0z"
                />
              </g>
              <g
                clipPath="url(#__lottie_element_2643)"
                transform="matrix(0.5,0,0,0.5,184.75,237.5)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  transform="matrix(1,0,0,1,61,61)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(20,22,36)"
                    fillOpacity={1}
                    d=" M191,28 C191,12.546799659729004 178.4532012939453,0 163,0 C163,0 28,0 28,0 C12.546799659729004,0 0,12.546799659729004 0,28 C0,28 0,28 0,28 C0,43.45320129394531 12.546799659729004,56 28,56 C28,56 163,56 163,56 C178.4532012939453,56 191,43.45320129394531 191,28 C191,28 191,28 191,28z"
                  />
                </g>
                <g
                  clipPath="url(#__lottie_element_3401)"
                  filter="url(#__lottie_element_3403)"
                  transform="matrix(1,0,0,1,56,16)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={0}
                      d=" M211,0 C211,0 0,0 0,0 C0,0 0,146 0,146 C0,146 211,146 211,146 C211,146 211,0 211,0z"
                    />
                  </g>
                  <g
                    clipPath="url(#__lottie_element_3408)"
                    transform="matrix(1,0,0,1,60,60)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <g
                      transform="matrix(1.333299994468689,0,0,1.333299994468689,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(247,249,252)"
                            fillOpacity={1}
                            d=" M59.93000030517578,10.380000114440918 C59.93000030517578,10.380000114440918 65.13999938964844,10.380000114440918 65.13999938964844,10.380000114440918 C64.91000366210938,8.40999984741211 63.810001373291016,7.690000057220459 62.63999938964844,7.690000057220459 C61.13999938964844,7.690000057220459 60.15999984741211,8.680000305175781 59.93000030517578,10.380000114440918 C59.93000030517578,10.380000114440918 59.93000030517578,10.380000114440918 59.93000030517578,10.380000114440918z M57.709999084472656,11.329999923706055 C57.709999084472656,8.050000190734863 59.63999938964844,5.929999828338623 62.63999938964844,5.929999828338623 C65.12000274658203,5.929999828338623 67.19999694824219,7.590000152587891 67.30000305175781,11.25 C67.30000305175781,11.25 67.31999969482422,11.920000076293945 67.31999969482422,11.920000076293945 C67.31999969482422,11.920000076293945 59.88999938964844,11.920000076293945 59.88999938964844,11.920000076293945 C60.029998779296875,13.850000381469727 61.02000045776367,14.979999542236328 62.63999938964844,14.979999542236328 C63.65999984741211,14.979999542236328 64.58999633789062,14.380000114440918 65,13.380000114440918 C65,13.380000114440918 67.16999816894531,13.539999961853027 67.16999816894531,13.539999961853027 C66.55999755859375,15.510000228881836 64.75,16.729999542236328 62.63999938964844,16.729999542236328 C59.63999938964844,16.729999542236328 57.709999084472656,14.609999656677246 57.709999084472656,11.329999923706055 C57.709999084472656,11.329999923706055 57.709999084472656,11.329999923706055 57.709999084472656,11.329999923706055z M47.58000183105469,11.329999923706055 C47.58000183105469,13.550000190734863 48.66999816894531,14.960000038146973 50.33000183105469,14.960000038146973 C52.029998779296875,14.960000038146973 53.099998474121094,13.550000190734863 53.099998474121094,11.329999923706055 C53.099998474121094,9.069999694824219 52.029998779296875,7.650000095367432 50.33000183105469,7.650000095367432 C48.650001525878906,7.650000095367432 47.58000183105469,9.069999694824219 47.58000183105469,11.329999923706055 C47.58000183105469,11.329999923706055 47.58000183105469,11.329999923706055 47.58000183105469,11.329999923706055z M55.0099983215332,2.6600000858306885 C55.0099983215332,2.6600000858306885 55.0099983215332,16.5 55.0099983215332,16.5 C55.0099983215332,16.5 53.08000183105469,16.5 53.08000183105469,16.5 C53.08000183105469,16.5 53.02000045776367,15.020000457763672 53.02000045776367,15.020000457763672 C52.43000030517578,16.06999969482422 51.220001220703125,16.729999542236328 49.79999923706055,16.729999542236328 C47.11000061035156,16.729999542236328 45.439998626708984,14.649999618530273 45.439998626708984,11.329999923706055 C45.439998626708984,8.010000228881836 47.11000061035156,5.929999828338623 49.79999923706055,5.929999828338623 C51.13999938964844,5.929999828338623 52.36000061035156,6.550000190734863 52.95000076293945,7.550000190734863 C52.95000076293945,7.550000190734863 52.95000076293945,2.6600000858306885 52.95000076293945,2.6600000858306885 C52.95000076293945,2.6600000858306885 55.0099983215332,2.6600000858306885 55.0099983215332,2.6600000858306885z M35.84000015258789,13.75 C35.84000015258789,14.510000228881836 36.5,15.140000343322754 37.869998931884766,15.140000343322754 C39.40999984741211,15.119999885559082 40.619998931884766,14.020000457763672 40.619998931884766,11.800000190734863 C40.619998931884766,11.800000190734863 40.619998931884766,11.65999984741211 40.619998931884766,11.65999984741211 C40.619998931884766,11.65999984741211 38.40999984741211,12.050000190734863 38.40999984741211,12.050000190734863 C36.9900016784668,12.300000190734863 35.84000015258789,12.449999809265137 35.84000015258789,13.75 C35.84000015258789,13.75 35.84000015258789,13.75 35.84000015258789,13.75z M33.869998931884766,9.270000457763672 C34.279998779296875,7.179999828338623 35.91999816894531,5.929999828338623 38.29999923706055,5.929999828338623 C41.11000061035156,5.929999828338623 42.650001525878906,7.489999771118164 42.650001525878906,10.319999694824219 C42.650001525878906,10.319999694824219 42.650001525878906,14.15999984741211 42.650001525878906,14.15999984741211 C42.650001525878906,14.6899995803833 42.880001068115234,14.880000114440918 43.290000915527344,14.880000114440918 C43.290000915527344,14.880000114440918 43.70000076293945,14.880000114440918 43.70000076293945,14.880000114440918 C43.70000076293945,14.880000114440918 43.70000076293945,16.5 43.70000076293945,16.5 C43.70000076293945,16.5 43.04999923706055,16.5 43.04999923706055,16.5 C42.119998931884766,16.520000457763672 40.849998474121094,16.360000610351562 40.75,14.899999618530273 C40.290000915527344,15.890000343322754 39.130001068115234,16.729999542236328 37.41999816894531,16.729999542236328 C35.33000183105469,16.729999542236328 33.70000076293945,15.619999885559082 33.70000076293945,13.789999961853027 C33.70000076293945,11.720000267028809 35.2400016784668,11.119999885559082 37.619998931884766,10.670000076293945 C37.619998931884766,10.670000076293945 40.58000183105469,10.09000015258789 40.58000183105469,10.09000015258789 C40.560001373291016,8.430000305175781 39.79999923706055,7.610000133514404 38.29999923706055,7.610000133514404 C37.09000015258789,7.610000133514404 36.290000915527344,8.229999542236328 36.02000045776367,9.399999618530273 C36.02000045776367,9.399999618530273 33.869998931884766,9.270000457763672 33.869998931884766,9.270000457763672z M29.420000076293945,9.789999961853027 C29.209999084472656,8.479999542236328 28.190000534057617,7.730000019073486 27.020000457763672,7.730000019073486 C25.270000457763672,7.730000019073486 24.229999542236328,9.069999694824219 24.229999542236328,11.329999923706055 C24.229999542236328,13.59000015258789 25.270000457763672,14.9399995803833 27.020000457763672,14.9399995803833 C28.25,14.9399995803833 29.270000457763672,14.140000343322754 29.479999542236328,12.699999809265137 C29.479999542236328,12.699999809265137 31.639999389648438,12.819999694824219 31.639999389648438,12.819999694824219 C31.329999923706055,15.239999771118164 29.399999618530273,16.729999542236328 27.020000457763672,16.729999542236328 C24.020000457763672,16.729999542236328 22.09000015258789,14.609999656677246 22.09000015258789,11.329999923706055 C22.09000015258789,8.050000190734863 24.020000457763672,5.929999828338623 27.020000457763672,5.929999828338623 C29.31999969482422,5.929999828338623 31.299999237060547,7.360000133514404 31.56999969482422,9.680000305175781 C31.56999969482422,9.680000305175781 29.420000076293945,9.789999961853027 29.420000076293945,9.789999961853027z M15.180000305175781,6.159999847412109 C15.180000305175781,6.159999847412109 17.06999969482422,6.159999847412109 17.06999969482422,6.159999847412109 C17.06999969482422,6.159999847412109 17.1299991607666,8.109999656677246 17.1299991607666,8.109999656677246 C17.5,6.789999961853027 18.280000686645508,6.159999847412109 19.610000610351562,6.159999847412109 C19.610000610351562,6.159999847412109 20.610000610351562,6.159999847412109 20.610000610351562,6.159999847412109 C20.610000610351562,6.159999847412109 20.610000610351562,7.860000133514404 20.610000610351562,7.860000133514404 C20.610000610351562,7.860000133514404 19.59000015258789,7.860000133514404 19.59000015258789,7.860000133514404 C17.969999313354492,7.860000133514404 17.25,8.760000228881836 17.25,10.470000267028809 C17.25,10.470000267028809 17.25,16.5 17.25,16.5 C17.25,16.5 15.180000305175781,16.5 15.180000305175781,16.5 C15.180000305175781,16.5 15.180000305175781,6.159999847412109 15.180000305175781,6.159999847412109z M4.599999904632568,10.979999542236328 C4.599999904632568,10.979999542236328 8.930000305175781,10.979999542236328 8.930000305175781,10.979999542236328 C8.930000305175781,10.979999542236328 6.769999980926514,4.659999847412109 6.769999980926514,4.659999847412109 C6.769999980926514,4.659999847412109 4.599999904632568,10.979999542236328 4.599999904632568,10.979999542236328z M0.4300000071525574,16.5 C0.4300000071525574,16.5 5.420000076293945,2.6600000858306885 5.420000076293945,2.6600000858306885 C5.420000076293945,2.6600000858306885 8.109999656677246,2.6600000858306885 8.109999656677246,2.6600000858306885 C8.109999656677246,2.6600000858306885 13.109999656677246,16.5 13.109999656677246,16.5 C13.109999656677246,16.5 10.84000015258789,16.5 10.84000015258789,16.5 C10.84000015258789,16.5 9.59000015258789,12.890000343322754 9.59000015258789,12.890000343322754 C9.59000015258789,12.890000343322754 3.940000057220459,12.890000343322754 3.940000057220459,12.890000343322754 C3.940000057220459,12.890000343322754 2.6700000762939453,16.5 2.6700000762939453,16.5 C2.6700000762939453,16.5 0.4300000071525574,16.5 0.4300000071525574,16.5z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <path
                        fill="rgb(0,0,0)"
                        fillOpacity={0}
                        d=" M91,0 C91,0 0,0 0,0 C0,0 0,26 0,26 C0,26 91,26 91,26 C91,26 91,0 91,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="home_funcionalities-block_child-content_wrapper">
          <div className="home_funcionalities-block_child-content">
            <div className="heading-style-h5">Tool Evaluations</div>
            <p className="funcionalities-block_text">
              Automate and benchmark LLM-Tool interactions for reliable
              performance.
            </p>
          </div>
          <a
            href="https://docs.arcade.dev/home/evaluate-tools/create-an-evaluation-suite"
            className="link_more-red w-inline-block"
          >
            <div>Learn More</div>
            <img
              src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/677727cf8951ad6f68619b65_arrow-up-right.svg"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Desccard4;
