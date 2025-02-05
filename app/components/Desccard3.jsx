'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const Desccard3 = ({ codesc, setCodesc }) => {
  const ref = useRef(null);
  const [viewed, setViewed] = useState(false);
  const isInView = useInView(ref, { margin: '0% 0px -45% 0px' });
  //   console.log(isInView);

  useEffect(() => {
    if (codesc === 2) {
      setCodesc(3);
    }
    if (codesc === 3) {
      setCodesc(2);
    }

    // if (isInView) {
    //   setViewed(true);
    //   setCodesc(3);
    // }
    // if (!isInView) {
    //   if (codesc === 3) {
    //     setCodesc(2);
    //   }
    // if (viewed) {
    //   setCodesc(2);
    // }
    // }
  }, [isInView]);
  return (
    <div
      ref={ref}
      card-box={3}
      className="home_funcionalities-block is-3 duration-300"
      style={{
        opacity: isInView ? 1 : 0.4,
        backgroundColor: isInView ? 'rgb(7, 10, 32)' : 'rgb(0,0,0,0)',
      }}
    >
      <div className="home_funcionalities-block_child">
        <div
          data-w-id="fed9fc3e-d871-6fc7-5fa8-f9fe71b890ea"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6787f7ab702a04c13ab5afcf_Custom%20SDKs%20NO%20BG.json"
          data-loop={1}
          data-direction={1}
          data-autoplay={1}
          data-is-ix2-target={0}
          data-renderer="svg"
          data-default-duration={0}
          data-duration="9.15"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 604 463"
            width={604}
            height={463}
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '100%',
              height: '100%',
              transform: 'translate3d(0px, 0px, 0px)',
              contentVisibility: 'visible',
            }}
          >
            <defs>
              <clipPath id="__lottie_element_2098">
                <rect width={604} height={463} x={0} y={0} />
              </clipPath>
              <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAJCAYAAAC8G0U0AAAAAXNSR0IArs4c6QAAARJJREFUOE/NVMsRgjAQ3YwNWIodgCf15tkZOoAaxBqwg/Qg3MQOOFIGHUReZOMmEh1u5gSzj5f32UHRHxwlNVS6ThWpsyHzIKK2yA5tTGOApSI7lN+wIx+4E3CHWCfiqps7gESqIzIbEBoylznyStclxL6wFgl8m2f7bSjkjcXE496ySStCAOE8nYjsc57tvbQwu+rG4NIQO7p0xCxmModX5uWREy1FJDNApOER+86kb+tykGlEzLlE2KAV8VKr1lyDpA4rmXYB1aEKWxufBVgvZU4CSwNijrgjwshs4nW8++Xv4nVYg8OUtBUvBbu+52L+vZjxFHgikpOheUv8sXSVvh1pteqL067/9QtZjAXhDPcTr8irCg+SXpkAAAAASUVORK5CYII=" />
              <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAwCAYAAAAlzZsxAAAAAXNSR0IArs4c6QAAAS5JREFUSEvtVVsRwjAQ3HOACATgAPgrIuIABgmABkBBRdA/KgEpCGAmcJlcuDwYCAx/zV/b2917NUuoPFQZjwxwbLvxDRivTdOVyAJg355mBNoAmEmghd09nvuVWfTyzgH27Wnrg4sZWti5gBzg0Hb2GUkXwF61EqssTTPnGErYWTqkpOWWpnHkFLOnGTm1Cb+VtBhwVqwXAC4gPUHBd4dBcjitEVzHA/tuZRZbl5IvWqtk7NzeCFCagVaUDgUF+chArodAU88aBhYNrmaffl++d2qDwrsOZZMeAC86MOzS/1dD30/68tLK4g+ZmUhQCiz4Q15JZCixP7jrnRF8g2uv+NRQ6v0hqEgt9ZZVNhQaiZl4u6o2lNh2meWFV/epT2Q/EANT988m/cnSfe1Ad0yWnTFoZpNNAAAAAElFTkSuQmCC" />
              <image xlinkHref="data:image/png;base64,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" />
              <clipPath id="__lottie_element_2102">
                <path d="M0,0 L5,0 L5,104 L0,104z" />
              </clipPath>
              <clipPath id="__lottie_element_2119">
                <path d="M0,0 L223,0 L223,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2124">
                <path d="M0,0 L40,0 L40,40 L0,40z" />
              </clipPath>
              <clipPath id="__lottie_element_2129">
                <path d="M0,0 L604,0 L604,5 L0,5z" />
              </clipPath>
              <clipPath id="__lottie_element_2134">
                <path d="M0,0 L550,0 L550,118 L0,118z" />
              </clipPath>
              <clipPath id="__lottie_element_2139">
                <path d="M0,0 L686,0 L686,177 L0,177z" />
              </clipPath>
              <clipPath id="__lottie_element_2144">
                <path d="M0,0 L686,0 L686,178 L0,178z" />
              </clipPath>
              <clipPath id="__lottie_element_2149">
                <path d="M0,0 L686,0 L686,177 L0,177z" />
              </clipPath>
              <clipPath id="__lottie_element_2154">
                <path d="M0,0 L686,0 L686,178 L0,178z" />
              </clipPath>
              <clipPath id="__lottie_element_2166">
                <path d="M0,0 L5,0 L5,104 L0,104z" />
              </clipPath>
              <clipPath id="__lottie_element_2182">
                <path d="M0,0 L34,0 L34,34 L0,34z" />
              </clipPath>
              <clipPath id="__lottie_element_2186">
                <path d="M0,0 L34,0 L34,34 L0,34z" />
              </clipPath>
              <clipPath id="__lottie_element_2203">
                <path d="M0,0 L14,0 L14,128 L0,128z" />
              </clipPath>
              <clipPath id="__lottie_element_2208">
                <path d="M0,0 L90,0 L90,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2213">
                <path d="M0,0 L152,0 L152,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2218">
                <path d="M0,0 L74,0 L74,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2223">
                <path d="M0,0 L106,0 L106,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2228">
                <path d="M0,0 L120,0 L120,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2233">
                <path d="M0,0 L100,0 L100,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2238">
                <path d="M0,0 L176,0 L176,20 L0,20z" />
              </clipPath>
              <linearGradient
                id="__lottie_element_2245"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1={262}
                y1={0}
                x2={262}
                y2={72}
              >
                <stop offset="0%" stopColor="rgb(21,23,37)" stopOpacity={0} />
                <stop offset="100%" stopColor="rgb(21,23,37)" stopOpacity={1} />
              </linearGradient>
              <clipPath id="__lottie_element_2248">
                <path d="M0,0 L60,0 L60,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2253">
                <path d="M0,0 L164,0 L164,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2258">
                <path d="M0,0 L96,0 L96,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2263">
                <path d="M0,0 L64,0 L64,20 L0,20z" />
              </clipPath>
              <clipPath id="__lottie_element_2307">
                <path d="M0,0 L645,0 L645,136 L0,136z" />
              </clipPath>
              <g id="__lottie_element_2317">
                <g
                  transform="matrix(1,0,0,1,41,41)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={1}
                    d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                  />
                </g>
              </g>
              <clipPath id="__lottie_element_2322">
                <path d="M0,0 L115,0 L115,111 L0,111z" />
              </clipPath>
              <filter
                id="__lottie_element_2324"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <clipPath id="__lottie_element_2327">
                <path d="M0,0 L316,0 L316,106 L0,106z" />
              </clipPath>
              <filter
                id="__lottie_element_2329"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <mask id="__lottie_element_2317_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2317" />
              </mask>
              <clipPath id="__lottie_element_2334">
                <path d="M0,0 L36,0 L36,36 L0,36z" />
              </clipPath>
              <clipPath id="__lottie_element_2339">
                <path d="M0,0 L34,0 L34,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2352">
                <path d="M0,0 L236,0 L236,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2363">
                <path d="M0,0 L645,0 L645,137 L0,137z" />
              </clipPath>
              <g id="__lottie_element_2373">
                <g
                  transform="matrix(1,0,0,1,41,41)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={1}
                    d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                  />
                </g>
              </g>
              <clipPath id="__lottie_element_2378">
                <path d="M0,0 L114,0 L114,111 L0,111z" />
              </clipPath>
              <filter
                id="__lottie_element_2380"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <clipPath id="__lottie_element_2383">
                <path d="M0,0 L300,0 L300,107 L0,107z" />
              </clipPath>
              <filter
                id="__lottie_element_2385"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <mask id="__lottie_element_2373_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2373" />
              </mask>
              <clipPath id="__lottie_element_2390">
                <path d="M0,0 L36,0 L36,36 L0,36z" />
              </clipPath>
              <clipPath id="__lottie_element_2395">
                <path d="M0,0 L32,0 L32,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2412">
                <path d="M0,0 L220,0 L220,27 L0,27z" />
              </clipPath>
              <clipPath id="__lottie_element_2423">
                <path d="M0,0 L645,0 L645,136 L0,136z" />
              </clipPath>
              <g id="__lottie_element_2433">
                <g
                  transform="matrix(1,0,0,1,41,41)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={1}
                    d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                  />
                </g>
              </g>
              <clipPath id="__lottie_element_2438">
                <path d="M0,0 L114,0 L114,111 L0,111z" />
              </clipPath>
              <filter
                id="__lottie_element_2440"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <clipPath id="__lottie_element_2443">
                <path d="M0,0 L336,0 L336,106 L0,106z" />
              </clipPath>
              <filter
                id="__lottie_element_2445"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <mask id="__lottie_element_2433_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2433" />
              </mask>
              <clipPath id="__lottie_element_2450">
                <path d="M0,0 L36,0 L36,36 L0,36z" />
              </clipPath>
              <clipPath id="__lottie_element_2455">
                <path d="M0,0 L32,0 L32,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2472">
                <path d="M0,0 L256,0 L256,26 L0,26z" />
              </clipPath>
              <clipPath id="__lottie_element_2483">
                <path d="M0,0 L645,0 L645,137 L0,137z" />
              </clipPath>
              <g id="__lottie_element_2493">
                <g
                  transform="matrix(1,0,0,1,41,41)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={1}
                    d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                  />
                </g>
              </g>
              <clipPath id="__lottie_element_2498">
                <path d="M0,0 L116,0 L116,112 L0,112z" />
              </clipPath>
              <filter
                id="__lottie_element_2500"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <clipPath id="__lottie_element_2503">
                <path d="M0,0 L252,0 L252,106 L0,106z" />
              </clipPath>
              <filter
                id="__lottie_element_2505"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="filter_result_0_drop_shadow_1"
                  stdDeviation={10}
                />
                <feOffset
                  dx={0}
                  dy={0}
                  in="filter_result_0_drop_shadow_1"
                  result="filter_result_0_drop_shadow_2"
                />
                <feFlood
                  floodColor="#ffffff"
                  floodOpacity="0.25098039215686274"
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
              <mask id="__lottie_element_2493_1" mask-type="alpha">
                <use xlinkHref="#__lottie_element_2493" />
              </mask>
              <clipPath id="__lottie_element_2510">
                <path d="M0,0 L36,0 L36,36 L0,36z" />
              </clipPath>
              <clipPath id="__lottie_element_2515">
                <path d="M0,0 L36,0 L36,28 L0,28z" />
              </clipPath>
              <clipPath id="__lottie_element_2528">
                <path d="M0,0 L172,0 L172,26 L0,26z" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_2098)">
              <g
                clipPath="url(#__lottie_element_2102)"
                transform="matrix(1,0,0,1,301,234)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2166)"
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
                          fillRule="evenodd"
                          fill="rgb(237,20,94)"
                          fillOpacity={1}
                          d=" M0,78 C0,78 0,75.20999908447266 0,75.20999908447266 C0,75.20999908447266 3,75.20999908447266 3,75.20999908447266 C3,75.20999908447266 3,78 3,78 C3,78 0,78 0,78z M0,69.63999938964844 C0,69.63999938964844 0,64.06999969482422 0,64.06999969482422 C0,64.06999969482422 3,64.06999969482422 3,64.06999969482422 C3,64.06999969482422 3,69.63999938964844 3,69.63999938964844 C3,69.63999938964844 0,69.63999938964844 0,69.63999938964844z M0,58.5 C0,58.5 0,52.93000030517578 0,52.93000030517578 C0,52.93000030517578 3,52.93000030517578 3,52.93000030517578 C3,52.93000030517578 3,58.5 3,58.5 C3,58.5 0,58.5 0,58.5z M0,47.36000061035156 C0,47.36000061035156 0,41.790000915527344 0,41.790000915527344 C0,41.790000915527344 3,41.790000915527344 3,41.790000915527344 C3,41.790000915527344 3,47.36000061035156 3,47.36000061035156 C3,47.36000061035156 0,47.36000061035156 0,47.36000061035156z M0,36.209999084472656 C0,36.209999084472656 0,30.639999389648438 0,30.639999389648438 C0,30.639999389648438 3,30.639999389648438 3,30.639999389648438 C3,30.639999389648438 3,36.209999084472656 3,36.209999084472656 C3,36.209999084472656 0,36.209999084472656 0,36.209999084472656z M0,25.06999969482422 C0,25.06999969482422 0,19.5 0,19.5 C0,19.5 3,19.5 3,19.5 C3,19.5 3,25.06999969482422 3,25.06999969482422 C3,25.06999969482422 0,25.06999969482422 0,25.06999969482422z M0,13.930000305175781 C0,13.930000305175781 0,8.359999656677246 0,8.359999656677246 C0,8.359999656677246 3,8.359999656677246 3,8.359999656677246 C3,8.359999656677246 3,13.930000305175781 3,13.930000305175781 C3,13.930000305175781 0,13.930000305175781 0,13.930000305175781z M0,2.7899999618530273 C0,2.7899999618530273 0,0 0,0 C0,0 3,0 3,0 C3,0 3,2.7899999618530273 3,2.7899999618530273 C3,2.7899999618530273 0,2.7899999618530273 0,2.7899999618530273z"
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
                      d=" M5,0 C5,0 0,0 0,0 C0,0 0,104 0,104 C0,104 5,104 5,104 C5,104 5,0 5,0z"
                    />
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,274,258)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <path
                  fill="rgb(4,6,24)"
                  fillOpacity={1}
                  d=" M28,0 C43.45320129394531,0 56,12.546799659729004 56,28 C56,43.45320129394531 43.45320129394531,56 28,56 C12.546799659729004,56 0,43.45320129394531 0,28 C0,12.546799659729004 12.546799659729004,0 28,0z"
                />
              </g>
              <g
                transform="matrix(1,0,0,1,0,0)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <path
                  fill="rgb(20,22,36)"
                  fillOpacity={1}
                  d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,210 0,210 C0,223.24560546875 10.754400253295898,234 24,234 C24,234 580,234 580,234 C593.24560546875,234 604,223.24560546875 604,210 C604,210 604,24 604,24z"
                />
              </g>
              <g
                transform="matrix(0.33329999446868896,0,0,0.33329999446868896,-4,-4)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <image
                  width="300px"
                  height="300px"
                  preserveAspectRatio="xMidYMid slice"
                  xlinkHref="data:image/png;base64,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"
                />
              </g>
              <g
                clipPath="url(#__lottie_element_2119)"
                transform="matrix(1,0,0,1,88,34)"
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
                        d=" M162.35000610351562,2.6600000858306885 C162.35000610351562,2.6600000858306885 164.4199981689453,2.6600000858306885 164.4199981689453,2.6600000858306885 C164.4199981689453,2.6600000858306885 164.4199981689453,14.100000381469727 164.4199981689453,14.100000381469727 C164.4199981689453,14.569999694824219 164.6699981689453,14.800000190734863 165.1199951171875,14.800000190734863 C165.1199951171875,14.800000190734863 165.9600067138672,14.800000190734863 165.9600067138672,14.800000190734863 C165.9600067138672,14.800000190734863 165.9600067138672,16.5 165.9600067138672,16.5 C165.9600067138672,16.5 164.6699981689453,16.5 164.6699981689453,16.5 C163.27999877929688,16.5 162.35000610351562,15.600000381469727 162.35000610351562,14.199999809265137 C162.35000610351562,14.199999809265137 162.35000610351562,2.6600000858306885 162.35000610351562,2.6600000858306885z M151.94000244140625,11.329999923706055 C151.94000244140625,13.59000015258789 152.97999572753906,14.9399995803833 154.72999572753906,14.9399995803833 C156.47999572753906,14.9399995803833 157.5,13.59000015258789 157.5,11.329999923706055 C157.5,9.069999694824219 156.47999572753906,7.730000019073486 154.72999572753906,7.730000019073486 C152.97999572753906,7.730000019073486 151.94000244140625,9.069999694824219 151.94000244140625,11.329999923706055 C151.94000244140625,11.329999923706055 151.94000244140625,11.329999923706055 151.94000244140625,11.329999923706055z M154.72999572753906,16.729999542236328 C151.75,16.729999542236328 149.8000030517578,14.630000114440918 149.8000030517578,11.329999923706055 C149.8000030517578,8.029999732971191 151.75,5.929999828338623 154.72999572753906,5.929999828338623 C157.69000244140625,5.929999828338623 159.63999938964844,8.029999732971191 159.63999938964844,11.329999923706055 C159.63999938964844,14.630000114440918 157.69000244140625,16.729999542236328 154.72999572753906,16.729999542236328 C154.72999572753906,16.729999542236328 154.72999572753906,16.729999542236328 154.72999572753906,16.729999542236328z M139.99000549316406,11.329999923706055 C139.99000549316406,13.59000015258789 141.02999877929688,14.9399995803833 142.77999877929688,14.9399995803833 C144.52999877929688,14.9399995803833 145.5500030517578,13.59000015258789 145.5500030517578,11.329999923706055 C145.5500030517578,9.069999694824219 144.52999877929688,7.730000019073486 142.77999877929688,7.730000019073486 C141.02999877929688,7.730000019073486 139.99000549316406,9.069999694824219 139.99000549316406,11.329999923706055 C139.99000549316406,11.329999923706055 139.99000549316406,11.329999923706055 139.99000549316406,11.329999923706055z M142.77999877929688,16.729999542236328 C139.8000030517578,16.729999542236328 137.85000610351562,14.630000114440918 137.85000610351562,11.329999923706055 C137.85000610351562,8.029999732971191 139.8000030517578,5.929999828338623 142.77999877929688,5.929999828338623 C145.74000549316406,5.929999828338623 147.6999969482422,8.029999732971191 147.6999969482422,11.329999923706055 C147.6999969482422,14.630000114440918 145.74000549316406,16.729999542236328 142.77999877929688,16.729999542236328 C142.77999877929688,16.729999542236328 142.77999877929688,16.729999542236328 142.77999877929688,16.729999542236328z M137.49000549316406,2.6600000858306885 C137.49000549316406,2.6600000858306885 137.49000549316406,4.590000152587891 137.49000549316406,4.590000152587891 C137.49000549316406,4.590000152587891 133.24000549316406,4.590000152587891 133.24000549316406,4.590000152587891 C133.24000549316406,4.590000152587891 133.24000549316406,16.5 133.24000549316406,16.5 C133.24000549316406,16.5 131.1300048828125,16.5 131.1300048828125,16.5 C131.1300048828125,16.5 131.1300048828125,4.590000152587891 131.1300048828125,4.590000152587891 C131.1300048828125,4.590000152587891 126.87999725341797,4.590000152587891 126.87999725341797,4.590000152587891 C126.87999725341797,4.590000152587891 126.87999725341797,2.6600000858306885 126.87999725341797,2.6600000858306885 C126.87999725341797,2.6600000858306885 137.49000549316406,2.6600000858306885 137.49000549316406,2.6600000858306885z M105.05999755859375,6.159999847412109 C105.05999755859375,6.159999847412109 106.94999694824219,6.159999847412109 106.94999694824219,6.159999847412109 C106.94999694824219,6.159999847412109 106.98999786376953,7.860000133514404 106.98999786376953,7.860000133514404 C107.5,6.630000114440918 108.55999755859375,5.929999828338623 109.94000244140625,5.929999828338623 C111.41999816894531,5.929999828338623 112.48999786376953,6.710000038146973 112.94000244140625,8.069999694824219 C113.41000366210938,6.690000057220459 114.4800033569336,5.929999828338623 116.04000091552734,5.929999828338623 C118.12999725341797,5.929999828338623 119.37999725341797,7.329999923706055 119.37999725341797,9.850000381469727 C119.37999725341797,9.850000381469727 119.37999725341797,16.5 119.37999725341797,16.5 C119.37999725341797,16.5 117.30999755859375,16.5 117.30999755859375,16.5 C117.30999755859375,16.5 117.30999755859375,10.489999771118164 117.30999755859375,10.489999771118164 C117.30999755859375,8.65999984741211 116.66999816894531,7.670000076293945 115.5,7.670000076293945 C114.0199966430664,7.670000076293945 113.19999694824219,8.699999809265137 113.19999694824219,10.489999771118164 C113.19999694824219,10.489999771118164 113.19999694824219,16.5 113.19999694824219,16.5 C113.19999694824219,16.5 111.23999786376953,16.5 111.23999786376953,16.5 C111.23999786376953,16.5 111.23999786376953,10.489999771118164 111.23999786376953,10.489999771118164 C111.23999786376953,8.699999809265137 110.58000183105469,7.670000076293945 109.43000030517578,7.670000076293945 C107.97000122070312,7.670000076293945 107.12999725341797,8.699999809265137 107.12999725341797,10.489999771118164 C107.12999725341797,10.489999771118164 107.12999725341797,16.5 107.12999725341797,16.5 C107.12999725341797,16.5 105.05999755859375,16.5 105.05999755859375,16.5 C105.05999755859375,16.5 105.05999755859375,6.159999847412109 105.05999755859375,6.159999847412109z M94.7699966430664,11.329999923706055 C94.7699966430664,13.59000015258789 95.80000305175781,14.9399995803833 97.55000305175781,14.9399995803833 C99.30999755859375,14.9399995803833 100.31999969482422,13.59000015258789 100.31999969482422,11.329999923706055 C100.31999969482422,9.069999694824219 99.30999755859375,7.730000019073486 97.55000305175781,7.730000019073486 C95.80000305175781,7.730000019073486 94.7699966430664,9.069999694824219 94.7699966430664,11.329999923706055 C94.7699966430664,11.329999923706055 94.7699966430664,11.329999923706055 94.7699966430664,11.329999923706055z M97.55000305175781,16.729999542236328 C94.56999969482422,16.729999542236328 92.62000274658203,14.630000114440918 92.62000274658203,11.329999923706055 C92.62000274658203,8.029999732971191 94.56999969482422,5.929999828338623 97.55000305175781,5.929999828338623 C100.51000213623047,5.929999828338623 102.47000122070312,8.029999732971191 102.47000122070312,11.329999923706055 C102.47000122070312,14.630000114440918 100.51000213623047,16.729999542236328 97.55000305175781,16.729999542236328 C97.55000305175781,16.729999542236328 97.55000305175781,16.729999542236328 97.55000305175781,16.729999542236328z M86.16000366210938,3.819999933242798 C86.16000366210938,3.819999933242798 88.2300033569336,3.819999933242798 88.2300033569336,3.819999933242798 C88.2300033569336,3.819999933242798 88.2300033569336,6.159999847412109 88.2300033569336,6.159999847412109 C88.2300033569336,6.159999847412109 90.95999908447266,6.159999847412109 90.95999908447266,6.159999847412109 C90.95999908447266,6.159999847412109 90.95999908447266,7.840000152587891 90.95999908447266,7.840000152587891 C90.95999908447266,7.840000152587891 88.2300033569336,7.840000152587891 88.2300033569336,7.840000152587891 C88.2300033569336,7.840000152587891 88.2300033569336,13.539999961853027 88.2300033569336,13.539999961853027 C88.2300033569336,14.380000114440918 88.63999938964844,14.800000190734863 89.44000244140625,14.800000190734863 C89.44000244140625,14.800000190734863 90.94000244140625,14.800000190734863 90.94000244140625,14.800000190734863 C90.94000244140625,14.800000190734863 90.94000244140625,16.5 90.94000244140625,16.5 C90.94000244140625,16.5 89.22000122070312,16.5 89.22000122070312,16.5 C87.2300033569336,16.5 86.16000366210938,15.470000267028809 86.16000366210938,13.539999961853027 C86.16000366210938,13.539999961853027 86.16000366210938,7.840000152587891 86.16000366210938,7.840000152587891 C86.16000366210938,7.840000152587891 84.58000183105469,7.840000152587891 84.58000183105469,7.840000152587891 C84.58000183105469,7.840000152587891 84.58000183105469,6.159999847412109 84.58000183105469,6.159999847412109 C84.58000183105469,6.159999847412109 86.16000366210938,6.159999847412109 86.16000366210938,6.159999847412109 C86.16000366210938,6.159999847412109 86.16000366210938,3.819999933242798 86.16000366210938,3.819999933242798z M80.6500015258789,9.420000076293945 C80.44000244140625,8.3100004196167 79.4000015258789,7.650000095367432 78.33000183105469,7.650000095367432 C77.27999877929688,7.650000095367432 76.41999816894531,8.1899995803833 76.41999816894531,9.109999656677246 C76.44000244140625,10.050000190734863 77.62999725341797,10.420000076293945 78.72000122070312,10.630000114440918 C81.29000091552734,11.100000381469727 82.93000030517578,11.779999732971191 82.93000030517578,13.8100004196167 C82.93000030517578,15.84000015258789 80.9000015258789,16.729999542236328 78.69999694824219,16.729999542236328 C76.06999969482422,16.729999542236328 74.18000030517578,15.399999618530273 74.0199966430664,13.239999771118164 C74.0199966430664,13.239999771118164 76.13999938964844,13.109999656677246 76.13999938964844,13.109999656677246 C76.3499984741211,14.279999732971191 77.26000213623047,15.020000457763672 78.68000030517578,15.020000457763672 C79.62000274658203,15.020000457763672 80.79000091552734,14.6899995803833 80.79000091552734,13.710000038146973 C80.7699966430664,12.600000381469727 79.45999908447266,12.460000038146973 78.3499984741211,12.210000038146973 C76.1500015258789,11.739999771118164 74.2699966430664,11.140000343322754 74.2699966430664,9.170000076293945 C74.2699966430664,7.159999847412109 75.91000366210938,5.929999828338623 78.4800033569336,5.929999828338623 C80.72000122070312,5.929999828338623 82.44000244140625,7.230000019073486 82.7699966430664,9.300000190734863 C82.7699966430664,9.300000190734863 80.6500015258789,9.420000076293945 80.6500015258789,9.420000076293945z M71.56999969482422,16.5 C71.56999969482422,16.5 69.63999938964844,16.5 69.63999938964844,16.5 C69.63999938964844,16.5 69.62999725341797,14.800000190734863 69.62999725341797,14.800000190734863 C69.06999969482422,16.15999984741211 67.88999938964844,16.729999542236328 66.55000305175781,16.729999542236328 C64.26000213623047,16.729999542236328 63.06999969482422,15.079999923706055 63.06999969482422,12.819999694824219 C63.06999969482422,12.819999694824219 63.06999969482422,6.159999847412109 63.06999969482422,6.159999847412109 C63.06999969482422,6.159999847412109 65.13999938964844,6.159999847412109 65.13999938964844,6.159999847412109 C65.13999938964844,6.159999847412109 65.13999938964844,12.170000076293945 65.13999938964844,12.170000076293945 C65.13999938964844,14 65.69000244140625,15 67.08999633789062,15 C68.56999969482422,15 69.51000213623047,14 69.51000213623047,12.170000076293945 C69.51000213623047,12.170000076293945 69.51000213623047,6.159999847412109 69.51000213623047,6.159999847412109 C69.51000213623047,6.159999847412109 71.56999969482422,6.159999847412109 71.56999969482422,6.159999847412109 C71.56999969482422,6.159999847412109 71.56999969482422,16.5 71.56999969482422,16.5z M60.41999816894531,11.800000190734863 C59.88999938964844,14.84000015258789 57.900001525878906,16.809999465942383 54.66999816894531,16.809999465942383 C50.650001525878906,16.809999465942383 48.27000045776367,13.649999618530273 48.27000045776367,9.600000381469727 C48.27000045776367,5.539999961853027 50.650001525878906,2.3399999141693115 54.66999816894531,2.3399999141693115 C57.689998626708984,2.3399999141693115 59.720001220703125,4.190000057220459 60.31999969482422,7.079999923706055 C60.31999969482422,7.079999923706055 58.099998474121094,7.199999809265137 58.099998474121094,7.199999809265137 C57.689998626708984,5.329999923706055 56.439998626708984,4.269999980926514 54.650001525878906,4.269999980926514 C51.7400016784668,4.269999980926514 50.459999084472656,6.690000057220459 50.459999084472656,9.600000381469727 C50.459999084472656,12.489999771118164 51.7599983215332,14.880000114440918 54.650001525878906,14.880000114440918 C56.540000915527344,14.880000114440918 57.810001373291016,13.729999542236328 58.18000030517578,11.680000305175781 C58.18000030517578,11.680000305175781 60.41999816894531,11.800000190734863 60.41999816894531,11.800000190734863z M34.72999954223633,6.159999847412109 C34.72999954223633,6.159999847412109 37.040000915527344,14.15999984741211 37.040000915527344,14.15999984741211 C37.040000915527344,14.15999984741211 39.34000015258789,6.159999847412109 39.34000015258789,6.159999847412109 C39.34000015258789,6.159999847412109 41.45000076293945,6.159999847412109 41.45000076293945,6.159999847412109 C41.45000076293945,6.159999847412109 38.25,16.5 38.25,16.5 C38.25,16.5 35.95000076293945,16.5 35.95000076293945,16.5 C35.95000076293945,16.5 33.7599983215332,9.09000015258789 33.7599983215332,9.09000015258789 C33.7599983215332,9.09000015258789 31.600000381469727,16.5 31.600000381469727,16.5 C31.600000381469727,16.5 29.299999237060547,16.5 29.299999237060547,16.5 C29.299999237060547,16.5 26.1200008392334,6.159999847412109 26.1200008392334,6.159999847412109 C26.1200008392334,6.159999847412109 28.200000762939453,6.159999847412109 28.200000762939453,6.159999847412109 C28.200000762939453,6.159999847412109 30.479999542236328,14.15999984741211 30.479999542236328,14.15999984741211 C30.479999542236328,14.15999984741211 32.790000915527344,6.159999847412109 32.790000915527344,6.159999847412109 C32.790000915527344,6.159999847412109 34.72999954223633,6.159999847412109 34.72999954223633,6.159999847412109z M17.559999465942383,10.380000114440918 C17.559999465942383,10.380000114440918 22.770000457763672,10.380000114440918 22.770000457763672,10.380000114440918 C22.540000915527344,8.40999984741211 21.440000534057617,7.690000057220459 20.270000457763672,7.690000057220459 C18.770000457763672,7.690000057220459 17.790000915527344,8.680000305175781 17.559999465942383,10.380000114440918 C17.559999465942383,10.380000114440918 17.559999465942383,10.380000114440918 17.559999465942383,10.380000114440918z M15.34000015258789,11.329999923706055 C15.34000015258789,8.050000190734863 17.270000457763672,5.929999828338623 20.270000457763672,5.929999828338623 C22.75,5.929999828338623 24.829999923706055,7.590000152587891 24.93000030517578,11.25 C24.93000030517578,11.25 24.950000762939453,11.920000076293945 24.950000762939453,11.920000076293945 C24.950000762939453,11.920000076293945 17.520000457763672,11.920000076293945 17.520000457763672,11.920000076293945 C17.65999984741211,13.850000381469727 18.649999618530273,14.979999542236328 20.270000457763672,14.979999542236328 C21.290000915527344,14.979999542236328 22.219999313354492,14.380000114440918 22.6299991607666,13.380000114440918 C22.6299991607666,13.380000114440918 24.799999237060547,13.539999961853027 24.799999237060547,13.539999961853027 C24.190000534057617,15.510000228881836 22.3799991607666,16.729999542236328 20.270000457763672,16.729999542236328 C17.270000457763672,16.729999542236328 15.34000015258789,14.609999656677246 15.34000015258789,11.329999923706055 C15.34000015258789,11.329999923706055 15.34000015258789,11.329999923706055 15.34000015258789,11.329999923706055z M1.6799999475479126,2.6600000858306885 C1.6799999475479126,2.6600000858306885 4.329999923706055,2.6600000858306885 4.329999923706055,2.6600000858306885 C4.329999923706055,2.6600000858306885 10.670000076293945,13.710000038146973 10.670000076293945,13.710000038146973 C10.670000076293945,13.710000038146973 10.670000076293945,2.6600000858306885 10.670000076293945,2.6600000858306885 C10.670000076293945,2.6600000858306885 12.770000457763672,2.6600000858306885 12.770000457763672,2.6600000858306885 C12.770000457763672,2.6600000858306885 12.770000457763672,16.5 12.770000457763672,16.5 C12.770000457763672,16.5 10.020000457763672,16.5 10.020000457763672,16.5 C10.020000457763672,16.5 3.7799999713897705,5.679999828338623 3.7799999713897705,5.679999828338623 C3.7799999713897705,5.679999828338623 3.7799999713897705,16.5 3.7799999713897705,16.5 C3.7799999713897705,16.5 1.6799999475479126,16.5 1.6799999475479126,16.5 C1.6799999475479126,16.5 1.6799999475479126,2.6600000858306885 1.6799999475479126,2.6600000858306885z"
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
                    d=" M223,0 C223,0 0,0 0,0 C0,0 0,26 0,26 C0,26 223,26 223,26 C223,26 223,0 223,0z"
                  />
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2124)"
                transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,273.9997253417969,286)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2182)"
                  transform="matrix(1.100000023841858,0,0,1.100000023841858,1.2999992370605469,1.2999992370605469)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    clipPath="url(#__lottie_element_2186)"
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
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={3}
                            d=" M12.829999923706055,21.170000076293945 C12.829999923706055,21.170000076293945 21.170000076293945,12.829999923706055 21.170000076293945,12.829999923706055 M6.210000038146973,13.239999771118164 C6.210000038146973,13.239999771118164 4.590000152587891,14.859999656677246 4.590000152587891,14.859999656677246 C0.5699999928474426,18.8799991607666 0.5699999928474426,25.389999389648438 4.590000152587891,29.40999984741211 C8.609999656677246,33.43000030517578 15.119999885559082,33.43000030517578 19.139999389648438,29.40999984741211 C19.139999389648438,29.40999984741211 20.739999771118164,27.799999237060547 20.739999771118164,27.799999237060547 M13.25,6.210000038146973 C13.25,6.210000038146973 14.859999656677246,4.590000152587891 14.859999656677246,4.590000152587891 C18.8799991607666,0.5699999928474426 25.389999389648438,0.5699999928474426 29.40999984741211,4.590000152587891 C33.43000030517578,8.609999656677246 33.43000030517578,15.119999885559082 29.40999984741211,19.139999389648438 C29.40999984741211,19.139999389648438 27.790000915527344,20.760000228881836 27.790000915527344,20.760000228881836"
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
                        d=" M34,0 C34,0 0,0 0,0 C0,0 0,34 0,34 C0,34 34,34 34,34 C34,34 34,0 34,0z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2129)"
                transform="matrix(1,0,0,1,0,88)"
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
                        stroke="rgb(5,7,25)"
                        strokeOpacity={1}
                        strokeWidth={4}
                        d=" M0,2 C0,2 604,2 604,2"
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
                    d=" M604,0 C604,0 0,0 0,0 C0,0 0,5 0,5 C0,5 604,5 604,5 C604,5 604,0 604,0z"
                  />
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2134)"
                transform="matrix(1,0,0,1,32,116)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2203)"
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
                          fill="rgb(51,63,84)"
                          fillOpacity={1}
                          d=" M2.109999895095825,86.06999969482422 C2.109999895095825,86.06999969482422 6.400000095367432,86.06999969482422 6.400000095367432,86.06999969482422 C6.400000095367432,86.06999969482422 6.400000095367432,80.2699966430664 6.400000095367432,80.2699966430664 C6.400000095367432,80.2699966430664 2.109999895095825,86.06999969482422 2.109999895095825,86.06999969482422z M6.400000095367432,90 C6.400000095367432,90 6.400000095367432,87.45999908447266 6.400000095367432,87.45999908447266 C6.400000095367432,87.45999908447266 0.6600000262260437,87.45999908447266 0.6600000262260437,87.45999908447266 C0.6600000262260437,87.45999908447266 0.6600000262260437,86.16999816894531 0.6600000262260437,86.16999816894531 C0.6600000262260437,86.16999816894531 6.300000190734863,78.29000091552734 6.300000190734863,78.29000091552734 C6.300000190734863,78.29000091552734 7.820000171661377,78.29000091552734 7.820000171661377,78.29000091552734 C7.820000171661377,78.29000091552734 7.820000171661377,86.06999969482422 7.820000171661377,86.06999969482422 C7.820000171661377,86.06999969482422 9.239999771118164,86.06999969482422 9.239999771118164,86.06999969482422 C9.239999771118164,86.06999969482422 9.239999771118164,87.45999908447266 9.239999771118164,87.45999908447266 C9.239999771118164,87.45999908447266 7.820000171661377,87.45999908447266 7.820000171661377,87.45999908447266 C7.820000171661377,87.45999908447266 7.820000171661377,90 7.820000171661377,90 C7.820000171661377,90 6.400000095367432,90 6.400000095367432,90z M4.849999904632568,66.2699966430664 C3.5799999237060547,66.2699966430664 2.609999895095825,65.97000122070312 1.9299999475479126,65.36000061035156 C1.25,64.75 0.8700000047683716,63.95000076293945 0.8199999928474426,62.97999954223633 C0.8199999928474426,62.97999954223633 2.2899999618530273,62.880001068115234 2.2899999618530273,62.880001068115234 C2.359999895095825,63.59000015258789 2.630000114440918,64.11000061035156 3.0899999141693115,64.41000366210938 C3.559999942779541,64.72000122070312 4.150000095367432,64.87999725341797 4.849999904632568,64.87999725341797 C5.320000171661377,64.87999725341797 5.769999980926514,64.80999755859375 6.190000057220459,64.68000030517578 C6.610000133514404,64.54000091552734 6.949999809265137,64.30999755859375 7.199999809265137,64 C7.460000038146973,63.68000030517578 7.590000152587891,63.2599983215332 7.590000152587891,62.72999954223633 C7.590000152587891,62.209999084472656 7.46999979019165,61.790000915527344 7.239999771118164,61.459999084472656 C7.010000228881836,61.119998931884766 6.699999809265137,60.880001068115234 6.289999961853027,60.720001220703125 C5.900000095367432,60.560001373291016 5.440000057220459,60.470001220703125 4.929999828338623,60.470001220703125 C4.929999828338623,60.470001220703125 4.010000228881836,60.470001220703125 4.010000228881836,60.470001220703125 C4.010000228881836,60.470001220703125 4.010000228881836,59.09000015258789 4.010000228881836,59.09000015258789 C4.010000228881836,59.09000015258789 4.929999828338623,59.09000015258789 4.929999828338623,59.09000015258789 C5.340000152587891,59.09000015258789 5.710000038146973,59.029998779296875 6.050000190734863,58.90999984741211 C6.389999866485596,58.790000915527344 6.659999847412109,58.59000015258789 6.860000133514404,58.33000183105469 C7.070000171661377,58.04999923706055 7.179999828338623,57.689998626708984 7.179999828338623,57.25 C7.179999828338623,56.63999938964844 6.980000019073486,56.20000076293945 6.599999904632568,55.88999938964844 C6.210000038146973,55.56999969482422 5.659999847412109,55.40999984741211 4.929999828338623,55.40999984741211 C4.190000057220459,55.40999984741211 3.640000104904175,55.54999923706055 3.25,55.849998474121094 C2.880000114440918,56.150001525878906 2.6500000953674316,56.54999923706055 2.569999933242798,57.06999969482422 C2.569999933242798,57.06999969482422 1.090000033378601,56.970001220703125 1.090000033378601,56.970001220703125 C1.2000000476837158,56.09000015258789 1.5800000429153442,55.38999938964844 2.240000009536743,54.849998474121094 C2.9000000953674316,54.29999923706055 3.799999952316284,54.02000045776367 4.929999828338623,54.02000045776367 C5.690000057220459,54.02000045776367 6.349999904632568,54.150001525878906 6.909999847412109,54.41999816894531 C7.46999979019165,54.66999816894531 7.900000095367432,55.029998779296875 8.199999809265137,55.5099983215332 C8.510000228881836,55.97999954223633 8.65999984741211,56.540000915527344 8.65999984741211,57.189998626708984 C8.65999984741211,57.91999816894531 8.430000305175781,58.5 7.96999979019165,58.95000076293945 C7.519999980926514,59.38999938964844 6.849999904632568,59.689998626708984 5.960000038146973,59.86000061035156 C5.960000038146973,59.86000061035156 5.960000038146973,59.56999969482422 5.960000038146973,59.56999969482422 C6.920000076293945,59.68000030517578 7.670000076293945,60.02000045776367 8.229999542236328,60.59000015258789 C8.789999961853027,61.15999984741211 9.069999694824219,61.869998931884766 9.069999694824219,62.72999954223633 C9.069999694824219,63.47999954223633 8.890000343322754,64.12000274658203 8.529999732971191,64.6500015258789 C8.170000076293945,65.18000030517578 7.670000076293945,65.58000183105469 7.03000020980835,65.8499984741211 C6.389999866485596,66.12000274658203 5.659999847412109,66.2699966430664 4.849999904632568,66.2699966430664 C4.849999904632568,66.2699966430664 4.849999904632568,66.2699966430664 4.849999904632568,66.2699966430664z M0.8199999928474426,42 C0.8199999928474426,41.18000030517578 0.949999988079071,40.43000030517578 1.2000000476837158,39.77000045776367 C1.4700000286102295,39.099998474121094 1.9199999570846558,38.470001220703125 2.569999933242798,37.86000061035156 C3.2300000190734863,37.25 4.150000095367432,36.650001525878906 5.309999942779541,36.029998779296875 C5.849999904632568,35.7400016784668 6.289999961853027,35.470001220703125 6.619999885559082,35.22999954223633 C6.949999809265137,34.9900016784668 7.179999828338623,34.72999954223633 7.340000152587891,34.459999084472656 C7.489999771118164,34.18000030517578 7.570000171661377,33.84000015258789 7.570000171661377,33.45000076293945 C7.570000171661377,33.040000915527344 7.489999771118164,32.70000076293945 7.309999942779541,32.400001525878906 C7.130000114440918,32.09000015258789 6.880000114440918,31.850000381469727 6.519999980926514,31.670000076293945 C6.179999828338623,31.489999771118164 5.75,31.40999984741211 5.230000019073486,31.40999984741211 C4.409999847412109,31.40999984741211 3.75,31.6200008392334 3.2699999809265137,32.04999923706055 C2.799999952316284,32.47999954223633 2.5,33.09000015258789 2.380000114440918,33.880001068115234 C2.380000114440918,33.880001068115234 0.8899999856948853,33.779998779296875 0.8899999856948853,33.779998779296875 C1.0199999809265137,32.63999938964844 1.4600000381469727,31.719999313354492 2.2100000381469727,31.040000915527344 C2.9600000381469727,30.360000610351562 3.9600000381469727,30.020000457763672 5.230000019073486,30.020000457763672 C6.03000020980835,30.020000457763672 6.71999979019165,30.15999984741211 7.289999961853027,30.450000762939453 C7.860000133514404,30.739999771118164 8.300000190734863,31.139999389648438 8.600000381469727,31.65999984741211 C8.90999984741211,32.15999984741211 9.0600004196167,32.75 9.0600004196167,33.41999816894531 C9.0600004196167,34.0099983215332 8.960000038146973,34.529998779296875 8.760000228881836,34.970001220703125 C8.5600004196167,35.400001525878906 8.220000267028809,35.810001373291016 7.75,36.18000030517578 C7.289999961853027,36.560001373291016 6.659999847412109,36.95000076293945 5.840000152587891,37.380001068115234 C5.139999866485596,37.7599983215332 4.539999961853027,38.130001068115234 4.059999942779541,38.52000045776367 C3.5899999141693115,38.900001525878906 3.2200000286102295,39.279998779296875 2.9700000286102295,39.63999938964844 C2.7300000190734863,39.9900016784668 2.5899999141693115,40.310001373291016 2.569999933242798,40.61000061035156 C2.569999933242798,40.61000061035156 9.069999694824219,40.61000061035156 9.069999694824219,40.61000061035156 C9.069999694824219,40.61000061035156 9.069999694824219,42 9.069999694824219,42 C9.069999694824219,42 0.8199999928474426,42 0.8199999928474426,42z M0.9900000095367432,18 C0.9900000095367432,18 0.9900000095367432,16.610000610351562 0.9900000095367432,16.610000610351562 C0.9900000095367432,16.610000610351562 8.90999984741211,16.610000610351562 8.90999984741211,16.610000610351562 C8.90999984741211,16.610000610351562 8.90999984741211,18 8.90999984741211,18 C8.90999984741211,18 0.9900000095367432,18 0.9900000095367432,18z M4.690000057220459,18 C4.690000057220459,18 4.690000057220459,9.319999694824219 4.690000057220459,9.319999694824219 C4.690000057220459,9.319999694824219 1.6200000047683716,9.319999694824219 1.6200000047683716,9.319999694824219 C1.6200000047683716,9.319999694824219 1.6200000047683716,8.100000381469727 1.6200000047683716,8.100000381469727 C1.6200000047683716,8.100000381469727 3.200000047683716,8.100000381469727 3.200000047683716,8.100000381469727 C3.619999885559082,8.100000381469727 3.9600000381469727,8.039999961853027 4.210000038146973,7.920000076293945 C4.480000019073486,7.800000190734863 4.659999847412109,7.610000133514404 4.769999980926514,7.340000152587891 C4.889999866485596,7.079999923706055 4.949999809265137,6.730000019073486 4.949999809265137,6.289999961853027 C4.949999809265137,6.289999961853027 6.110000133514404,6.289999961853027 6.110000133514404,6.289999961853027 C6.110000133514404,6.289999961853027 6.110000133514404,18 6.110000133514404,18 C6.110000133514404,18 4.690000057220459,18 4.690000057220459,18z"
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
                      d=" M14,0 C14,0 0,0 0,0 C0,0 0,128 0,128 C0,128 14,128 14,128 C14,128 14,0 14,0z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2208)"
                  transform="matrix(1,0,0,1,40,6)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M90,4 C90,1.7924000024795532 88.20760345458984,0 86,0 C86,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 86,20 86,20 C88.20760345458984,20 90,18.207599639892578 90,16 C90,16 90,4 90,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2213)"
                  transform="matrix(1,0,0,1,140,6)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M152,4 C152,1.7924000024795532 150.2075958251953,0 148,0 C148,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 148,20 148,20 C150.2075958251953,20 152,18.207599639892578 152,16 C152,16 152,4 152,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2218)"
                  transform="matrix(1,0,0,1,302,6)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M74,4 C74,1.7924000024795532 72.20760345458984,0 70,0 C70,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 70,20 70,20 C72.20760345458984,20 74,18.207599639892578 74,16 C74,16 74,4 74,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2223)"
                  transform="matrix(1,0,0,1,386,6)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M106,4 C106,1.7924000024795532 104.20760345458984,0 102,0 C102,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 102,20 102,20 C104.20760345458984,20 106,18.207599639892578 106,16 C106,16 106,4 106,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2228)"
                  transform="matrix(1,0,0,1,150,74)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M120,4 C120,1.7924000024795532 118.20760345458984,0 116,0 C116,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 116,20 116,20 C118.20760345458984,20 120,18.207599639892578 120,16 C120,16 120,4 120,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2233)"
                  transform="matrix(1,0,0,1,40,74)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M100,4 C100,1.7924000024795532 98.20760345458984,0 96,0 C96,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 96,20 96,20 C98.20760345458984,20 100,18.207599639892578 100,16 C100,16 100,4 100,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2238)"
                  transform="matrix(1,0,0,1,150,108)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M176,4 C176,1.7924000024795532 174.2075958251953,0 172,0 C172,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 172,20 172,20 C174.2075958251953,20 176,18.207599639892578 176,16 C176,16 176,4 176,4z"
                    />
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,0,46)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <path
                    fill="url(#__lottie_element_2245)"
                    fillOpacity={1}
                    d=" M524,0 C524,0 0,0 0,0 C0,0 0,72 0,72 C0,72 524,72 524,72 C524,72 524,0 524,0z"
                  />
                </g>
                <g
                  clipPath="url(#__lottie_element_2248)"
                  transform="matrix(1,0,0,1,40,40)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M60,4 C60,1.7924000024795532 58.20759963989258,0 56,0 C56,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 56,20 56,20 C58.20759963989258,20 60,18.207599639892578 60,16 C60,16 60,4 60,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2253)"
                  transform="matrix(1,0,0,1,110,40)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M164,4 C164,1.7924000024795532 162.2075958251953,0 160,0 C160,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 160,20 160,20 C162.2075958251953,20 164,18.207599639892578 164,16 C164,16 164,4 164,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2258)"
                  transform="matrix(1,0,0,1,284,40)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M96,4 C96,1.7924000024795532 94.20760345458984,0 92,0 C92,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 92,20 92,20 C94.20760345458984,20 96,18.207599639892578 96,16 C96,16 96,4 96,4z"
                    />
                  </g>
                </g>
                <g
                  clipPath="url(#__lottie_element_2263)"
                  transform="matrix(1,0,0,1,390,40)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,0,0)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(30,41,58)"
                      fillOpacity={1}
                      d=" M64,4 C64,1.7924000024795532 62.20759963989258,0 60,0 C60,0 4,0 4,0 C1.7924000024795532,0 0,1.7924000024795532 0,4 C0,4 0,16 0,16 C0,18.207599639892578 1.7924000024795532,20 4,20 C4,20 60,20 60,20 C62.20759963989258,20 64,18.207599639892578 64,16 C64,16 64,4 64,4z"
                    />
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2139)"
                transform="matrix(1,0,0,1,-41,277)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2307)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,41,41)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                    />
                  </g>
                  <g
                    mask="url(#__lottie_element_2317_1)"
                    style={{ display: 'block' }}
                  >
                    <g transform="matrix(1,0,0,1,41,41)" opacity={1}>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(23,26,43)"
                          strokeOpacity={1}
                          strokeWidth={8}
                          d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M608,-4 C608,-4 -4,-4 -4,-4 C-4,-4 -4,88 -4,88 C-4,88 608,88 608,88 C608,88 608,-4 608,-4z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2322)"
                    filter="url(#__lottie_element_2324)"
                    transform="matrix(1,0,0,1,155,25)"
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
                        d=" M115,0 C115,0 0,0 0,0 C0,0 0,111 0,111 C0,111 115,111 115,111 C115,111 115,0 115,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2334)"
                      transform="matrix(1,0,0,1,40,40)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_2339)"
                        transform="matrix(1,0,0,1,1,5)"
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
                                stroke="rgb(147,163,183)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M25.989999771118164,11.510000228881836 C26,11.390000343322754 26,11.260000228881836 26,11.130000114440918 C26,6.159999847412109 21.969999313354492,2.130000114440918 17,2.130000114440918 C13.0600004196167,2.130000114440918 9.710000038146973,4.659999847412109 8.489999771118164,8.1899995803833 C4.619999885559082,8.6899995803833 1.6299999952316284,11.989999771118164 1.6299999952316284,16 C1.6299999952316284,20.350000381469727 5.150000095367432,23.8799991607666 9.5,23.8799991607666 C9.5,23.8799991607666 26.190000534057617,23.8799991607666 26.190000534057617,23.8799991607666 C29.610000610351562,23.8799991607666 32.380001068115234,21.110000610351562 32.380001068115234,17.690000534057617 C32.380001068115234,14.270000457763672 29.610000610351562,11.5 26.190000534057617,11.5 C26.1200008392334,11.5 26.049999237060547,11.5 25.989999771118164,11.510000228881836 C25.989999771118164,11.510000228881836 25.989999771118164,11.510000228881836 25.989999771118164,11.510000228881836z"
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
                            d=" M34,0 C34,0 0,0 0,0 C0,0 0,26 0,26 C0,26 34,26 34,26 C34,26 34,0 34,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2327)"
                    filter="url(#__lottie_element_2329)"
                    transform="matrix(1,0,0,1,215,30)"
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
                        d=" M316,0 C316,0 0,0 0,0 C0,0 0,106 0,106 C0,106 316,106 316,106 C316,106 316,0 316,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2352)"
                      transform="matrix(1,0,0,1,40,40)"
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
                                fill="rgb(147,163,183)"
                                fillOpacity={1}
                                d=" M168.16000366210938,11.329999923706055 C168.16000366210938,13.180000305175781 169,14.960000038146973 170.91000366210938,14.960000038146973 C172.86000061035156,14.960000038146973 173.67999267578125,13.220000267028809 173.67999267578125,11.329999923706055 C173.67999267578125,9.460000038146973 172.83999633789062,7.710000038146973 170.91000366210938,7.710000038146973 C169,7.710000038146973 168.16000366210938,9.479999542236328 168.16000366210938,11.329999923706055 C168.16000366210938,11.329999923706055 168.16000366210938,11.329999923706055 168.16000366210938,11.329999923706055z M166.27000427246094,19.43000030517578 C166.27000427246094,19.43000030517578 166.27000427246094,6.159999847412109 166.27000427246094,6.159999847412109 C166.27000427246094,6.159999847412109 168.1999969482422,6.159999847412109 168.1999969482422,6.159999847412109 C168.1999969482422,6.159999847412109 168.25,7.710000038146973 168.25,7.710000038146973 C168.82000732421875,6.559999942779541 169.91000366210938,5.929999828338623 171.38999938964844,5.929999828338623 C174.41000366210938,5.929999828338623 175.83999633789062,8.420000076293945 175.83999633789062,11.329999923706055 C175.83999633789062,14.239999771118164 174.41000366210938,16.729999542236328 171.38999938964844,16.729999542236328 C169.97999572753906,16.729999542236328 168.9199981689453,16.149999618530273 168.3300018310547,15.0600004196167 C168.3300018310547,15.0600004196167 168.3300018310547,19.43000030517578 168.3300018310547,19.43000030517578 C168.3300018310547,19.43000030517578 166.27000427246094,19.43000030517578 166.27000427246094,19.43000030517578z M155.9600067138672,11.329999923706055 C155.9600067138672,13.180000305175781 156.8000030517578,14.960000038146973 158.7100067138672,14.960000038146973 C160.66000366210938,14.960000038146973 161.47999572753906,13.220000267028809 161.47999572753906,11.329999923706055 C161.47999572753906,9.460000038146973 160.63999938964844,7.710000038146973 158.7100067138672,7.710000038146973 C156.8000030517578,7.710000038146973 155.9600067138672,9.479999542236328 155.9600067138672,11.329999923706055 C155.9600067138672,11.329999923706055 155.9600067138672,11.329999923706055 155.9600067138672,11.329999923706055z M154.07000732421875,19.43000030517578 C154.07000732421875,19.43000030517578 154.07000732421875,6.159999847412109 154.07000732421875,6.159999847412109 C154.07000732421875,6.159999847412109 156,6.159999847412109 156,6.159999847412109 C156,6.159999847412109 156.0500030517578,7.710000038146973 156.0500030517578,7.710000038146973 C156.6199951171875,6.559999942779541 157.72000122070312,5.929999828338623 159.1999969482422,5.929999828338623 C162.22000122070312,5.929999828338623 163.63999938964844,8.420000076293945 163.63999938964844,11.329999923706055 C163.63999938964844,14.239999771118164 162.22000122070312,16.729999542236328 159.1999969482422,16.729999542236328 C157.8000030517578,16.729999542236328 156.72000122070312,16.149999618530273 156.1300048828125,15.0600004196167 C156.1300048828125,15.0600004196167 156.1300048828125,19.43000030517578 156.1300048828125,19.43000030517578 C156.1300048828125,19.43000030517578 154.07000732421875,19.43000030517578 154.07000732421875,19.43000030517578z M143.49000549316406,10.979999542236328 C143.49000549316406,10.979999542236328 147.82000732421875,10.979999542236328 147.82000732421875,10.979999542236328 C147.82000732421875,10.979999542236328 145.64999389648438,4.659999847412109 145.64999389648438,4.659999847412109 C145.64999389648438,4.659999847412109 143.49000549316406,10.979999542236328 143.49000549316406,10.979999542236328z M139.30999755859375,16.5 C139.30999755859375,16.5 144.3000030517578,2.6600000858306885 144.3000030517578,2.6600000858306885 C144.3000030517578,2.6600000858306885 147,2.6600000858306885 147,2.6600000858306885 C147,2.6600000858306885 151.99000549316406,16.5 151.99000549316406,16.5 C151.99000549316406,16.5 149.72999572753906,16.5 149.72999572753906,16.5 C149.72999572753906,16.5 148.47999572753906,12.890000343322754 148.47999572753906,12.890000343322754 C148.47999572753906,12.890000343322754 142.82000732421875,12.890000343322754 142.82000732421875,12.890000343322754 C142.82000732421875,12.890000343322754 141.5500030517578,16.5 141.5500030517578,16.5 C141.5500030517578,16.5 139.30999755859375,16.5 139.30999755859375,16.5z M124.45999908447266,11.329999923706055 C124.45999908447266,13.550000190734863 125.55000305175781,14.960000038146973 127.20999908447266,14.960000038146973 C128.91000366210938,14.960000038146973 129.97999572753906,13.550000190734863 129.97999572753906,11.329999923706055 C129.97999572753906,9.069999694824219 128.91000366210938,7.650000095367432 127.20999908447266,7.650000095367432 C125.52999877929688,7.650000095367432 124.45999908447266,9.069999694824219 124.45999908447266,11.329999923706055 C124.45999908447266,11.329999923706055 124.45999908447266,11.329999923706055 124.45999908447266,11.329999923706055z M131.88999938964844,2.6600000858306885 C131.88999938964844,2.6600000858306885 131.88999938964844,16.5 131.88999938964844,16.5 C131.88999938964844,16.5 129.9600067138672,16.5 129.9600067138672,16.5 C129.9600067138672,16.5 129.91000366210938,15.020000457763672 129.91000366210938,15.020000457763672 C129.32000732421875,16.06999969482422 128.11000061035156,16.729999542236328 126.69000244140625,16.729999542236328 C124,16.729999542236328 122.31999969482422,14.649999618530273 122.31999969482422,11.329999923706055 C122.31999969482422,8.010000228881836 124,5.929999828338623 126.69000244140625,5.929999828338623 C128.0399932861328,5.929999828338623 129.24000549316406,6.550000190734863 129.8300018310547,7.550000190734863 C129.8300018310547,7.550000190734863 129.8300018310547,2.6600000858306885 129.8300018310547,2.6600000858306885 C129.8300018310547,2.6600000858306885 131.88999938964844,2.6600000858306885 131.88999938964844,2.6600000858306885z M119.86000061035156,16.5 C119.86000061035156,16.5 117.93000030517578,16.5 117.93000030517578,16.5 C117.93000030517578,16.5 117.91000366210938,14.800000190734863 117.91000366210938,14.800000190734863 C117.3499984741211,16.15999984741211 116.16999816894531,16.729999542236328 114.83000183105469,16.729999542236328 C112.55000305175781,16.729999542236328 111.36000061035156,15.079999923706055 111.36000061035156,12.819999694824219 C111.36000061035156,12.819999694824219 111.36000061035156,6.159999847412109 111.36000061035156,6.159999847412109 C111.36000061035156,6.159999847412109 113.41999816894531,6.159999847412109 113.41999816894531,6.159999847412109 C113.41999816894531,6.159999847412109 113.41999816894531,12.170000076293945 113.41999816894531,12.170000076293945 C113.41999816894531,14 113.97000122070312,15 115.37000274658203,15 C116.8499984741211,15 117.79000091552734,14 117.79000091552734,12.170000076293945 C117.79000091552734,12.170000076293945 117.79000091552734,6.159999847412109 117.79000091552734,6.159999847412109 C117.79000091552734,6.159999847412109 119.86000061035156,6.159999847412109 119.86000061035156,6.159999847412109 C119.86000061035156,6.159999847412109 119.86000061035156,16.5 119.86000061035156,16.5z M101.16000366210938,11.329999923706055 C101.16000366210938,13.59000015258789 102.19999694824219,14.9399995803833 103.94999694824219,14.9399995803833 C105.69999694824219,14.9399995803833 106.70999908447266,13.59000015258789 106.70999908447266,11.329999923706055 C106.70999908447266,9.069999694824219 105.69999694824219,7.730000019073486 103.94999694824219,7.730000019073486 C102.19999694824219,7.730000019073486 101.16000366210938,9.069999694824219 101.16000366210938,11.329999923706055 C101.16000366210938,11.329999923706055 101.16000366210938,11.329999923706055 101.16000366210938,11.329999923706055z M103.94999694824219,16.729999542236328 C100.97000122070312,16.729999542236328 99.01000213623047,14.630000114440918 99.01000213623047,11.329999923706055 C99.01000213623047,8.029999732971191 100.97000122070312,5.929999828338623 103.94999694824219,5.929999828338623 C106.91000366210938,5.929999828338623 108.86000061035156,8.029999732971191 108.86000061035156,11.329999923706055 C108.86000061035156,14.630000114440918 106.91000366210938,16.729999542236328 103.94999694824219,16.729999542236328 C103.94999694824219,16.729999542236328 103.94999694824219,16.729999542236328 103.94999694824219,16.729999542236328z M93.58999633789062,2.6600000858306885 C93.58999633789062,2.6600000858306885 95.66000366210938,2.6600000858306885 95.66000366210938,2.6600000858306885 C95.66000366210938,2.6600000858306885 95.66000366210938,14.100000381469727 95.66000366210938,14.100000381469727 C95.66000366210938,14.569999694824219 95.91000366210938,14.800000190734863 96.36000061035156,14.800000190734863 C96.36000061035156,14.800000190734863 97.19999694824219,14.800000190734863 97.19999694824219,14.800000190734863 C97.19999694824219,14.800000190734863 97.19999694824219,16.5 97.19999694824219,16.5 C97.19999694824219,16.5 95.91000366210938,16.5 95.91000366210938,16.5 C94.52999877929688,16.5 93.58999633789062,15.600000381469727 93.58999633789062,14.199999809265137 C93.58999633789062,14.199999809265137 93.58999633789062,2.6600000858306885 93.58999633789062,2.6600000858306885z M90.94000244140625,11.800000190734863 C90.41000366210938,14.84000015258789 88.41999816894531,16.809999465942383 85.19000244140625,16.809999465942383 C81.16999816894531,16.809999465942383 78.79000091552734,13.649999618530273 78.79000091552734,9.600000381469727 C78.79000091552734,5.539999961853027 81.16999816894531,2.3399999141693115 85.19000244140625,2.3399999141693115 C88.20999908447266,2.3399999141693115 90.2300033569336,4.190000057220459 90.83999633789062,7.079999923706055 C90.83999633789062,7.079999923706055 88.62000274658203,7.199999809265137 88.62000274658203,7.199999809265137 C88.20999908447266,5.329999923706055 86.95999908447266,4.269999980926514 85.16999816894531,4.269999980926514 C82.26000213623047,4.269999980926514 80.97000122070312,6.690000057220459 80.97000122070312,9.600000381469727 C80.97000122070312,12.489999771118164 82.27999877929688,14.880000114440918 85.16999816894531,14.880000114440918 C87.05999755859375,14.880000114440918 88.33000183105469,13.729999542236328 88.69999694824219,11.680000305175781 C88.69999694824219,11.680000305175781 90.94000244140625,11.800000190734863 90.94000244140625,11.800000190734863z M62.310001373291016,6.159999847412109 C62.310001373291016,6.159999847412109 64.19999694824219,6.159999847412109 64.19999694824219,6.159999847412109 C64.19999694824219,6.159999847412109 64.26000213623047,7.900000095367432 64.26000213623047,7.900000095367432 C64.79000091552734,6.510000228881836 65.98999786376953,5.929999828338623 67.4000015258789,5.929999828338623 C69.72000122070312,5.929999828338623 70.91000366210938,7.590000152587891 70.91000366210938,9.850000381469727 C70.91000366210938,9.850000381469727 70.91000366210938,16.5 70.91000366210938,16.5 C70.91000366210938,16.5 68.83999633789062,16.5 68.83999633789062,16.5 C68.83999633789062,16.5 68.83999633789062,10.489999771118164 68.83999633789062,10.489999771118164 C68.83999633789062,8.65999984741211 68.29000091552734,7.670000076293945 66.83999633789062,7.670000076293945 C65.33999633789062,7.670000076293945 64.37999725341797,8.65999984741211 64.37999725341797,10.489999771118164 C64.37999725341797,10.489999771118164 64.37999725341797,16.5 64.37999725341797,16.5 C64.37999725341797,16.5 62.310001373291016,16.5 62.310001373291016,16.5 C62.310001373291016,16.5 62.310001373291016,6.159999847412109 62.310001373291016,6.159999847412109z M54.689998626708984,6.159999847412109 C54.689998626708984,6.159999847412109 56.58000183105469,6.159999847412109 56.58000183105469,6.159999847412109 C56.58000183105469,6.159999847412109 56.63999938964844,8.109999656677246 56.63999938964844,8.109999656677246 C57.0099983215332,6.789999961853027 57.779998779296875,6.159999847412109 59.11000061035156,6.159999847412109 C59.11000061035156,6.159999847412109 60.11000061035156,6.159999847412109 60.11000061035156,6.159999847412109 C60.11000061035156,6.159999847412109 60.11000061035156,7.860000133514404 60.11000061035156,7.860000133514404 C60.11000061035156,7.860000133514404 59.09000015258789,7.860000133514404 59.09000015258789,7.860000133514404 C57.470001220703125,7.860000133514404 56.75,8.760000228881836 56.75,10.470000267028809 C56.75,10.470000267028809 56.75,16.5 56.75,16.5 C56.75,16.5 54.689998626708984,16.5 54.689998626708984,16.5 C54.689998626708984,16.5 54.689998626708984,6.159999847412109 54.689998626708984,6.159999847412109z M44.70000076293945,10.380000114440918 C44.70000076293945,10.380000114440918 49.90999984741211,10.380000114440918 49.90999984741211,10.380000114440918 C49.68000030517578,8.40999984741211 48.58000183105469,7.690000057220459 47.40999984741211,7.690000057220459 C45.90999984741211,7.690000057220459 44.93000030517578,8.680000305175781 44.70000076293945,10.380000114440918 C44.70000076293945,10.380000114440918 44.70000076293945,10.380000114440918 44.70000076293945,10.380000114440918z M42.47999954223633,11.329999923706055 C42.47999954223633,8.050000190734863 44.40999984741211,5.929999828338623 47.40999984741211,5.929999828338623 C49.88999938964844,5.929999828338623 51.970001220703125,7.590000152587891 52.06999969482422,11.25 C52.06999969482422,11.25 52.09000015258789,11.920000076293945 52.09000015258789,11.920000076293945 C52.09000015258789,11.920000076293945 44.65999984741211,11.920000076293945 44.65999984741211,11.920000076293945 C44.79999923706055,13.850000381469727 45.790000915527344,14.979999542236328 47.40999984741211,14.979999542236328 C48.41999816894531,14.979999542236328 49.36000061035156,14.380000114440918 49.77000045776367,13.380000114440918 C49.77000045776367,13.380000114440918 51.93000030517578,13.539999961853027 51.93000030517578,13.539999961853027 C51.31999969482422,15.510000228881836 49.52000045776367,16.729999542236328 47.40999984741211,16.729999542236328 C44.40999984741211,16.729999542236328 42.47999954223633,14.609999656677246 42.47999954223633,11.329999923706055 C42.47999954223633,11.329999923706055 42.47999954223633,11.329999923706055 42.47999954223633,11.329999923706055z M32.349998474121094,11.329999923706055 C32.349998474121094,13.550000190734863 33.439998626708984,14.960000038146973 35.099998474121094,14.960000038146973 C36.79999923706055,14.960000038146973 37.869998931884766,13.550000190734863 37.869998931884766,11.329999923706055 C37.869998931884766,9.069999694824219 36.79999923706055,7.650000095367432 35.099998474121094,7.650000095367432 C33.41999816894531,7.650000095367432 32.349998474121094,9.069999694824219 32.349998474121094,11.329999923706055 C32.349998474121094,11.329999923706055 32.349998474121094,11.329999923706055 32.349998474121094,11.329999923706055z M39.779998779296875,2.6600000858306885 C39.779998779296875,2.6600000858306885 39.779998779296875,16.5 39.779998779296875,16.5 C39.779998779296875,16.5 37.849998474121094,16.5 37.849998474121094,16.5 C37.849998474121094,16.5 37.790000915527344,15.020000457763672 37.790000915527344,15.020000457763672 C37.20000076293945,16.06999969482422 36,16.729999542236328 34.56999969482422,16.729999542236328 C31.8799991607666,16.729999542236328 30.200000762939453,14.649999618530273 30.200000762939453,11.329999923706055 C30.200000762939453,8.010000228881836 31.8799991607666,5.929999828338623 34.56999969482422,5.929999828338623 C35.91999816894531,5.929999828338623 37.119998931884766,6.550000190734863 37.709999084472656,7.550000190734863 C37.709999084472656,7.550000190734863 37.709999084472656,2.6600000858306885 37.709999084472656,2.6600000858306885 C37.709999084472656,2.6600000858306885 39.779998779296875,2.6600000858306885 39.779998779296875,2.6600000858306885z M20.3799991607666,11.329999923706055 C20.3799991607666,13.59000015258789 21.420000076293945,14.9399995803833 23.170000076293945,14.9399995803833 C24.920000076293945,14.9399995803833 25.940000534057617,13.59000015258789 25.940000534057617,11.329999923706055 C25.940000534057617,9.069999694824219 24.920000076293945,7.730000019073486 23.170000076293945,7.730000019073486 C21.420000076293945,7.730000019073486 20.3799991607666,9.069999694824219 20.3799991607666,11.329999923706055 C20.3799991607666,11.329999923706055 20.3799991607666,11.329999923706055 20.3799991607666,11.329999923706055z M23.170000076293945,16.729999542236328 C20.190000534057617,16.729999542236328 18.229999542236328,14.630000114440918 18.229999542236328,11.329999923706055 C18.229999542236328,8.029999732971191 20.190000534057617,5.929999828338623 23.170000076293945,5.929999828338623 C26.1299991607666,5.929999828338623 28.079999923706055,8.029999732971191 28.079999923706055,11.329999923706055 C28.079999923706055,14.630000114440918 26.1299991607666,16.729999542236328 23.170000076293945,16.729999542236328 C23.170000076293945,16.729999542236328 23.170000076293945,16.729999542236328 23.170000076293945,16.729999542236328z M1.6799999475479126,2.6600000858306885 C1.6799999475479126,2.6600000858306885 4.559999942779541,2.6600000858306885 4.559999942779541,2.6600000858306885 C4.559999942779541,2.6600000858306885 8.680000305175781,14.020000457763672 8.680000305175781,14.020000457763672 C8.680000305175781,14.020000457763672 12.789999961853027,2.6600000858306885 12.789999961853027,2.6600000858306885 C12.789999961853027,2.6600000858306885 15.680000305175781,2.6600000858306885 15.680000305175781,2.6600000858306885 C15.680000305175781,2.6600000858306885 15.680000305175781,16.5 15.680000305175781,16.5 C15.680000305175781,16.5 13.550000190734863,16.5 13.550000190734863,16.5 C13.550000190734863,16.5 13.550000190734863,6.5 13.550000190734863,6.5 C13.550000190734863,6.5 9.850000381469727,16.479999542236328 9.850000381469727,16.479999542236328 C9.850000381469727,16.479999542236328 7.510000228881836,16.479999542236328 7.510000228881836,16.479999542236328 C7.510000228881836,16.479999542236328 3.7799999713897705,6.5 3.7799999713897705,6.5 C3.7799999713897705,6.5 3.7799999713897705,16.5 3.7799999713897705,16.5 C3.7799999713897705,16.5 1.6799999475479126,16.5 1.6799999475479126,16.5 C1.6799999475479126,16.5 1.6799999475479126,2.6600000858306885 1.6799999475479126,2.6600000858306885z"
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
                          d=" M236,0 C236,0 0,0 0,0 C0,0 0,26 0,26 C0,26 236,26 236,26 C236,26 236,0 236,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2144)"
                transform="matrix(1,0,0,1,-41,277)"
                opacity={0}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2363)"
                  transform="matrix(1,0,0,1,0,0)"
                  opacity={1}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,41,41)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                    />
                  </g>
                  <g
                    mask="url(#__lottie_element_2373_1)"
                    style={{ display: 'block' }}
                  >
                    <g transform="matrix(1,0,0,1,41,41)" opacity={1}>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(23,26,43)"
                          strokeOpacity={1}
                          strokeWidth={8}
                          d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M608,-4 C608,-4 -4,-4 -4,-4 C-4,-4 -4,88 -4,88 C-4,88 608,88 608,88 C608,88 608,-4 608,-4z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2378)"
                    filter="url(#__lottie_element_2380)"
                    transform="matrix(1,0,0,1,163.5,25)"
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
                        d=" M114,0 C114,0 0,0 0,0 C0,0 0,111 0,111 C0,111 114,111 114,111 C114,111 114,0 114,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2390)"
                      transform="matrix(1,0,0,1,40,40)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_2395)"
                        transform="matrix(1,0,0,1,2,5)"
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                fillOpacity={0}
                                stroke="rgb(147,163,183)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M29.8799991607666,13 C29.8799991607666,13 29.8799991607666,20.8799991607666 29.8799991607666,20.8799991607666 C29.8799991607666,22.540000915527344 28.540000915527344,23.8799991607666 26.8799991607666,23.8799991607666 C26.8799991607666,23.8799991607666 5.130000114440918,23.8799991607666 5.130000114440918,23.8799991607666 C3.4700000286102295,23.8799991607666 2.130000114440918,22.540000915527344 2.130000114440918,20.8799991607666 C2.130000114440918,20.8799991607666 2.130000114440918,13 2.130000114440918,13 M29.8799991607666,13 C29.8799991607666,13 2.130000114440918,13 2.130000114440918,13 M29.8799991607666,13 C29.8799991607666,13 29.8799991607666,5.130000114440918 29.8799991607666,5.130000114440918 C29.8799991607666,3.4700000286102295 28.540000915527344,2.130000114440918 26.8799991607666,2.130000114440918 C26.8799991607666,2.130000114440918 5.130000114440918,2.130000114440918 5.130000114440918,2.130000114440918 C3.4700000286102295,2.130000114440918 2.130000114440918,3.4700000286102295 2.130000114440918,5.130000114440918 C2.130000114440918,5.130000114440918 2.130000114440918,13 2.130000114440918,13"
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
                            d=" M32,0 C32,0 0,0 0,0 C0,0 0,26 0,26 C0,26 32,26 32,26 C32,26 32,0 32,0z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.33329999446868896,0,0,0.33329999446868896,8,10)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <image
                          width="12px"
                          height="48px"
                          preserveAspectRatio="xMidYMid slice"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAwCAYAAAAlzZsxAAAAAXNSR0IArs4c6QAAAS5JREFUSEvtVVsRwjAQ3HOACATgAPgrIuIABgmABkBBRdA/KgEpCGAmcJlcuDwYCAx/zV/b2917NUuoPFQZjwxwbLvxDRivTdOVyAJg355mBNoAmEmghd09nvuVWfTyzgH27Wnrg4sZWti5gBzg0Hb2GUkXwF61EqssTTPnGErYWTqkpOWWpnHkFLOnGTm1Cb+VtBhwVqwXAC4gPUHBd4dBcjitEVzHA/tuZRZbl5IvWqtk7NzeCFCagVaUDgUF+chArodAU88aBhYNrmaffl++d2qDwrsOZZMeAC86MOzS/1dD30/68tLK4g+ZmUhQCiz4Q15JZCixP7jrnRF8g2uv+NRQ6v0hqEgt9ZZVNhQaiZl4u6o2lNh2meWFV/epT2Q/EANT988m/cnSfe1Ad0yWnTFoZpNNAAAAAElFTkSuQmCC"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2383)"
                    filter="url(#__lottie_element_2385)"
                    transform="matrix(1,0,0,1,223.5,30)"
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
                        d=" M300,0 C300,0 0,0 0,0 C0,0 0,107 0,107 C0,107 300,107 300,107 C300,107 300,0 300,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2412)"
                      transform="matrix(1,0,0,1,40,40)"
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
                              d=" M156.2899932861328,10.380000114440918 C156.2899932861328,10.380000114440918 161.5,10.380000114440918 161.5,10.380000114440918 C161.27000427246094,8.40999984741211 160.1699981689453,7.690000057220459 159,7.690000057220459 C157.5,7.690000057220459 156.52000427246094,8.680000305175781 156.2899932861328,10.380000114440918 C156.2899932861328,10.380000114440918 156.2899932861328,10.380000114440918 156.2899932861328,10.380000114440918z M154.07000732421875,11.329999923706055 C154.07000732421875,8.050000190734863 156,5.929999828338623 159,5.929999828338623 C161.47999572753906,5.929999828338623 163.55999755859375,7.590000152587891 163.66000366210938,11.25 C163.66000366210938,11.25 163.67999267578125,11.920000076293945 163.67999267578125,11.920000076293945 C163.67999267578125,11.920000076293945 156.25,11.920000076293945 156.25,11.920000076293945 C156.38999938964844,13.850000381469727 157.3800048828125,14.979999542236328 159,14.979999542236328 C160.02000427246094,14.979999542236328 160.9499969482422,14.380000114440918 161.36000061035156,13.380000114440918 C161.36000061035156,13.380000114440918 163.52000427246094,13.539999961853027 163.52000427246094,13.539999961853027 C162.91000366210938,15.510000228881836 161.11000061035156,16.729999542236328 159,16.729999542236328 C156,16.729999542236328 154.07000732421875,14.609999656677246 154.07000732421875,11.329999923706055 C154.07000732421875,11.329999923706055 154.07000732421875,11.329999923706055 154.07000732421875,11.329999923706055z M149.67999267578125,9.420000076293945 C149.47000122070312,8.3100004196167 148.42999267578125,7.650000095367432 147.36000061035156,7.650000095367432 C146.30999755859375,7.650000095367432 145.4499969482422,8.1899995803833 145.4499969482422,9.109999656677246 C145.47000122070312,10.050000190734863 146.66000366210938,10.420000076293945 147.75,10.630000114440918 C150.32000732421875,11.100000381469727 151.9600067138672,11.779999732971191 151.9600067138672,13.8100004196167 C151.9600067138672,15.84000015258789 149.92999267578125,16.729999542236328 147.72999572753906,16.729999542236328 C145.10000610351562,16.729999542236328 143.2100067138672,15.399999618530273 143.0500030517578,13.239999771118164 C143.0500030517578,13.239999771118164 145.17999267578125,13.109999656677246 145.17999267578125,13.109999656677246 C145.38999938964844,14.279999732971191 146.2899932861328,15.020000457763672 147.7100067138672,15.020000457763672 C148.64999389648438,15.020000457763672 149.82000732421875,14.6899995803833 149.82000732421875,13.710000038146973 C149.8000030517578,12.600000381469727 148.49000549316406,12.460000038146973 147.3800048828125,12.210000038146973 C145.17999267578125,11.739999771118164 143.3000030517578,11.140000343322754 143.3000030517578,9.170000076293945 C143.3000030517578,7.159999847412109 144.9499969482422,5.929999828338623 147.52000427246094,5.929999828338623 C149.75999450683594,5.929999828338623 151.47000122070312,7.230000019073486 151.8000030517578,9.300000190734863 C151.8000030517578,9.300000190734863 149.67999267578125,9.420000076293945 149.67999267578125,9.420000076293945z M133.47999572753906,13.75 C133.47999572753906,14.510000228881836 134.1300048828125,15.140000343322754 135.5,15.140000343322754 C137.0399932861328,15.119999885559082 138.25,14.020000457763672 138.25,11.800000190734863 C138.25,11.800000190734863 138.25,11.65999984741211 138.25,11.65999984741211 C138.25,11.65999984741211 136.0500030517578,12.050000190734863 136.0500030517578,12.050000190734863 C134.6199951171875,12.300000190734863 133.47999572753906,12.449999809265137 133.47999572753906,13.75 C133.47999572753906,13.75 133.47999572753906,13.75 133.47999572753906,13.75z M131.5,9.270000457763672 C131.91000366210938,7.179999828338623 133.5500030517578,5.929999828338623 135.92999267578125,5.929999828338623 C138.74000549316406,5.929999828338623 140.27999877929688,7.489999771118164 140.27999877929688,10.319999694824219 C140.27999877929688,10.319999694824219 140.27999877929688,14.15999984741211 140.27999877929688,14.15999984741211 C140.27999877929688,14.6899995803833 140.52000427246094,14.880000114440918 140.92999267578125,14.880000114440918 C140.92999267578125,14.880000114440918 141.3300018310547,14.880000114440918 141.3300018310547,14.880000114440918 C141.3300018310547,14.880000114440918 141.3300018310547,16.5 141.3300018310547,16.5 C141.3300018310547,16.5 140.69000244140625,16.5 140.69000244140625,16.5 C139.75,16.520000457763672 138.49000549316406,16.360000610351562 138.38999938964844,14.899999618530273 C137.9199981689453,15.890000343322754 136.75999450683594,16.729999542236328 135.0500030517578,16.729999542236328 C132.9600067138672,16.729999542236328 131.3300018310547,15.619999885559082 131.3300018310547,13.789999961853027 C131.3300018310547,11.720000267028809 132.8699951171875,11.119999885559082 135.25,10.670000076293945 C135.25,10.670000076293945 138.2100067138672,10.09000015258789 138.2100067138672,10.09000015258789 C138.19000244140625,8.430000305175781 137.42999267578125,7.610000133514404 135.92999267578125,7.610000133514404 C134.72000122070312,7.610000133514404 133.9199981689453,8.229999542236328 133.64999389648438,9.399999618530273 C133.64999389648438,9.399999618530273 131.5,9.270000457763672 131.5,9.270000457763672z M121.41999816894531,11.329999923706055 C121.41999816894531,13.550000190734863 122.48999786376953,14.960000038146973 124.19000244140625,14.960000038146973 C125.8499984741211,14.960000038146973 126.94000244140625,13.550000190734863 126.94000244140625,11.329999923706055 C126.94000244140625,9.069999694824219 125.87000274658203,7.650000095367432 124.19000244140625,7.650000095367432 C122.48999786376953,7.650000095367432 121.41999816894531,9.069999694824219 121.41999816894531,11.329999923706055 C121.41999816894531,11.329999923706055 121.41999816894531,11.329999923706055 121.41999816894531,11.329999923706055z M119.51000213623047,2.6600000858306885 C119.51000213623047,2.6600000858306885 121.58000183105469,2.6600000858306885 121.58000183105469,2.6600000858306885 C121.58000183105469,2.6600000858306885 121.58000183105469,7.550000190734863 121.58000183105469,7.550000190734863 C122.16000366210938,6.550000190734863 123.37000274658203,5.929999828338623 124.70999908447266,5.929999828338623 C127.4000015258789,5.929999828338623 129.08999633789062,8.010000228881836 129.08999633789062,11.329999923706055 C129.08999633789062,14.649999618530273 127.4000015258789,16.729999542236328 124.70999908447266,16.729999542236328 C123.29000091552734,16.729999542236328 122.08000183105469,16.06999969482422 121.5,15.020000457763672 C121.5,15.020000457763672 121.44000244140625,16.5 121.44000244140625,16.5 C121.44000244140625,16.5 119.51000213623047,16.5 119.51000213623047,16.5 C119.51000213623047,16.5 119.51000213623047,2.6600000858306885 119.51000213623047,2.6600000858306885z M109.16000366210938,13.75 C109.16000366210938,14.510000228881836 109.81999969482422,15.140000343322754 111.19000244140625,15.140000343322754 C112.7300033569336,15.119999885559082 113.93000030517578,14.020000457763672 113.93000030517578,11.800000190734863 C113.93000030517578,11.800000190734863 113.93000030517578,11.65999984741211 113.93000030517578,11.65999984741211 C113.93000030517578,11.65999984741211 111.7300033569336,12.050000190734863 111.7300033569336,12.050000190734863 C110.30999755859375,12.300000190734863 109.16000366210938,12.449999809265137 109.16000366210938,13.75 C109.16000366210938,13.75 109.16000366210938,13.75 109.16000366210938,13.75z M107.19000244140625,9.270000457763672 C107.5999984741211,7.179999828338623 109.2300033569336,5.929999828338623 111.61000061035156,5.929999828338623 C114.41999816894531,5.929999828338623 115.95999908447266,7.489999771118164 115.95999908447266,10.319999694824219 C115.95999908447266,10.319999694824219 115.95999908447266,14.15999984741211 115.95999908447266,14.15999984741211 C115.95999908447266,14.6899995803833 116.19999694824219,14.880000114440918 116.61000061035156,14.880000114440918 C116.61000061035156,14.880000114440918 117.0199966430664,14.880000114440918 117.0199966430664,14.880000114440918 C117.0199966430664,14.880000114440918 117.0199966430664,16.5 117.0199966430664,16.5 C117.0199966430664,16.5 116.37000274658203,16.5 116.37000274658203,16.5 C115.44000244140625,16.520000457763672 114.16999816894531,16.360000610351562 114.06999969482422,14.899999618530273 C113.61000061035156,15.890000343322754 112.44999694824219,16.729999542236328 110.73999786376953,16.729999542236328 C108.6500015258789,16.729999542236328 107.01000213623047,15.619999885559082 107.01000213623047,13.789999961853027 C107.01000213623047,11.720000267028809 108.55000305175781,11.119999885559082 110.93000030517578,10.670000076293945 C110.93000030517578,10.670000076293945 113.9000015258789,10.09000015258789 113.9000015258789,10.09000015258789 C113.87999725341797,8.430000305175781 113.11000061035156,7.610000133514404 111.61000061035156,7.610000133514404 C110.4000015258789,7.610000133514404 109.5999984741211,8.229999542236328 109.33000183105469,9.399999618530273 C109.33000183105469,9.399999618530273 107.19000244140625,9.270000457763672 107.19000244140625,9.270000457763672z M100.29000091552734,3.819999933242798 C100.29000091552734,3.819999933242798 102.3499984741211,3.819999933242798 102.3499984741211,3.819999933242798 C102.3499984741211,3.819999933242798 102.3499984741211,6.159999847412109 102.3499984741211,6.159999847412109 C102.3499984741211,6.159999847412109 105.08000183105469,6.159999847412109 105.08000183105469,6.159999847412109 C105.08000183105469,6.159999847412109 105.08000183105469,7.840000152587891 105.08000183105469,7.840000152587891 C105.08000183105469,7.840000152587891 102.3499984741211,7.840000152587891 102.3499984741211,7.840000152587891 C102.3499984741211,7.840000152587891 102.3499984741211,13.539999961853027 102.3499984741211,13.539999961853027 C102.3499984741211,14.380000114440918 102.76000213623047,14.800000190734863 103.55999755859375,14.800000190734863 C103.55999755859375,14.800000190734863 105.05999755859375,14.800000190734863 105.05999755859375,14.800000190734863 C105.05999755859375,14.800000190734863 105.05999755859375,16.5 105.05999755859375,16.5 C105.05999755859375,16.5 103.33999633789062,16.5 103.33999633789062,16.5 C101.3499984741211,16.5 100.29000091552734,15.470000267028809 100.29000091552734,13.539999961853027 C100.29000091552734,13.539999961853027 100.29000091552734,7.840000152587891 100.29000091552734,7.840000152587891 C100.29000091552734,7.840000152587891 98.69999694824219,7.840000152587891 98.69999694824219,7.840000152587891 C98.69999694824219,7.840000152587891 98.69999694824219,6.159999847412109 98.69999694824219,6.159999847412109 C98.69999694824219,6.159999847412109 100.29000091552734,6.159999847412109 100.29000091552734,6.159999847412109 C100.29000091552734,6.159999847412109 100.29000091552734,3.819999933242798 100.29000091552734,3.819999933242798z M89.75,13.75 C89.75,14.510000228881836 90.41999816894531,15.140000343322754 91.77999877929688,15.140000343322754 C93.31999969482422,15.119999885559082 94.52999877929688,14.020000457763672 94.52999877929688,11.800000190734863 C94.52999877929688,11.800000190734863 94.52999877929688,11.65999984741211 94.52999877929688,11.65999984741211 C94.52999877929688,11.65999984741211 92.33000183105469,12.050000190734863 92.33000183105469,12.050000190734863 C90.91000366210938,12.300000190734863 89.75,12.449999809265137 89.75,13.75 C89.75,13.75 89.75,13.75 89.75,13.75z M87.79000091552734,9.270000457763672 C88.19999694824219,7.179999828338623 89.83000183105469,5.929999828338623 92.20999908447266,5.929999828338623 C95.0199966430664,5.929999828338623 96.55999755859375,7.489999771118164 96.55999755859375,10.319999694824219 C96.55999755859375,10.319999694824219 96.55999755859375,14.15999984741211 96.55999755859375,14.15999984741211 C96.55999755859375,14.6899995803833 96.79000091552734,14.880000114440918 97.19999694824219,14.880000114440918 C97.19999694824219,14.880000114440918 97.61000061035156,14.880000114440918 97.61000061035156,14.880000114440918 C97.61000061035156,14.880000114440918 97.61000061035156,16.5 97.61000061035156,16.5 C97.61000061035156,16.5 96.97000122070312,16.5 96.97000122070312,16.5 C96.02999877929688,16.520000457763672 94.7699966430664,16.360000610351562 94.66999816894531,14.899999618530273 C94.19999694824219,15.890000343322754 93.05000305175781,16.729999542236328 91.33000183105469,16.729999542236328 C89.23999786376953,16.729999542236328 87.61000061035156,15.619999885559082 87.61000061035156,13.789999961853027 C87.61000061035156,11.720000267028809 89.1500015258789,11.119999885559082 91.52999877929688,10.670000076293945 C91.52999877929688,10.670000076293945 94.48999786376953,10.09000015258789 94.48999786376953,10.09000015258789 C94.47000122070312,8.430000305175781 93.70999908447266,7.610000133514404 92.20999908447266,7.610000133514404 C91,7.610000133514404 90.19999694824219,8.229999542236328 89.93000030517578,9.399999618530273 C89.93000030517578,9.399999618530273 87.79000091552734,9.270000457763672 87.79000091552734,9.270000457763672z M77.45999908447266,11.329999923706055 C77.45999908447266,13.550000190734863 78.55000305175781,14.960000038146973 80.20999908447266,14.960000038146973 C81.91000366210938,14.960000038146973 82.9800033569336,13.550000190734863 82.9800033569336,11.329999923706055 C82.9800033569336,9.069999694824219 81.91000366210938,7.650000095367432 80.20999908447266,7.650000095367432 C78.52999877929688,7.650000095367432 77.45999908447266,9.069999694824219 77.45999908447266,11.329999923706055 C77.45999908447266,11.329999923706055 77.45999908447266,11.329999923706055 77.45999908447266,11.329999923706055z M84.88999938964844,2.6600000858306885 C84.88999938964844,2.6600000858306885 84.88999938964844,16.5 84.88999938964844,16.5 C84.88999938964844,16.5 82.95999908447266,16.5 82.95999908447266,16.5 C82.95999908447266,16.5 82.9000015258789,15.020000457763672 82.9000015258789,15.020000457763672 C82.30999755859375,16.06999969482422 81.11000061035156,16.729999542236328 79.68000030517578,16.729999542236328 C76.98999786376953,16.729999542236328 75.31999969482422,14.649999618530273 75.31999969482422,11.329999923706055 C75.31999969482422,8.010000228881836 76.98999786376953,5.929999828338623 79.68000030517578,5.929999828338623 C81.02999877929688,5.929999828338623 82.2300033569336,6.550000190734863 82.81999969482422,7.550000190734863 C82.81999969482422,7.550000190734863 82.81999969482422,2.6600000858306885 82.81999969482422,2.6600000858306885 C82.81999969482422,2.6600000858306885 84.88999938964844,2.6600000858306885 84.88999938964844,2.6600000858306885z M58.56999969482422,6.159999847412109 C58.56999969482422,6.159999847412109 60.65999984741211,6.159999847412109 60.65999984741211,6.159999847412109 C60.65999984741211,6.159999847412109 63.58000183105469,14.319999694824219 63.58000183105469,14.319999694824219 C63.58000183105469,14.319999694824219 66.43000030517578,6.159999847412109 66.43000030517578,6.159999847412109 C66.43000030517578,6.159999847412109 68.5199966430664,6.159999847412109 68.5199966430664,6.159999847412109 C68.5199966430664,6.159999847412109 64.36000061035156,17.709999084472656 64.36000061035156,17.709999084472656 C63.95000076293945,18.8799991607666 63.150001525878906,19.43000030517578 61.86000061035156,19.43000030517578 C61.86000061035156,19.43000030517578 60.36000061035156,19.43000030517578 60.36000061035156,19.43000030517578 C60.36000061035156,19.43000030517578 60.36000061035156,17.75 60.36000061035156,17.75 C60.36000061035156,17.75 61.59000015258789,17.75 61.59000015258789,17.75 C62.13999938964844,17.75 62.43000030517578,17.559999465942383 62.630001068115234,17.049999237060547 C62.630001068115234,17.049999237060547 62.959999084472656,16.190000534057617 62.959999084472656,16.190000534057617 C62.959999084472656,16.190000534057617 62.33000183105469,16.190000534057617 62.33000183105469,16.190000534057617 C62.33000183105469,16.190000534057617 58.56999969482422,6.159999847412109 58.56999969482422,6.159999847412109z M55.349998474121094,9.789999961853027 C55.13999938964844,8.479999542236328 54.119998931884766,7.730000019073486 52.95000076293945,7.730000019073486 C51.20000076293945,7.730000019073486 50.15999984741211,9.069999694824219 50.15999984741211,11.329999923706055 C50.15999984741211,13.59000015258789 51.20000076293945,14.9399995803833 52.95000076293945,14.9399995803833 C54.18000030517578,14.9399995803833 55.20000076293945,14.140000343322754 55.40999984741211,12.699999809265137 C55.40999984741211,12.699999809265137 57.56999969482422,12.819999694824219 57.56999969482422,12.819999694824219 C57.2599983215332,15.239999771118164 55.33000183105469,16.729999542236328 52.95000076293945,16.729999542236328 C49.95000076293945,16.729999542236328 48.02000045776367,14.609999656677246 48.02000045776367,11.329999923706055 C48.02000045776367,8.050000190734863 49.95000076293945,5.929999828338623 52.95000076293945,5.929999828338623 C55.25,5.929999828338623 57.22999954223633,7.360000133514404 57.5,9.680000305175781 C57.5,9.680000305175781 55.349998474121094,9.789999961853027 55.349998474121094,9.789999961853027z M38.45000076293945,13.75 C38.45000076293945,14.510000228881836 39.11000061035156,15.140000343322754 40.470001220703125,15.140000343322754 C42.0099983215332,15.119999885559082 43.220001220703125,14.020000457763672 43.220001220703125,11.800000190734863 C43.220001220703125,11.800000190734863 43.220001220703125,11.65999984741211 43.220001220703125,11.65999984741211 C43.220001220703125,11.65999984741211 41.02000045776367,12.050000190734863 41.02000045776367,12.050000190734863 C39.59000015258789,12.300000190734863 38.45000076293945,12.449999809265137 38.45000076293945,13.75 C38.45000076293945,13.75 38.45000076293945,13.75 38.45000076293945,13.75z M36.47999954223633,9.270000457763672 C36.88999938964844,7.179999828338623 38.52000045776367,5.929999828338623 40.900001525878906,5.929999828338623 C43.709999084472656,5.929999828338623 45.25,7.489999771118164 45.25,10.319999694824219 C45.25,10.319999694824219 45.25,14.15999984741211 45.25,14.15999984741211 C45.25,14.6899995803833 45.47999954223633,14.880000114440918 45.88999938964844,14.880000114440918 C45.88999938964844,14.880000114440918 46.29999923706055,14.880000114440918 46.29999923706055,14.880000114440918 C46.29999923706055,14.880000114440918 46.29999923706055,16.5 46.29999923706055,16.5 C46.29999923706055,16.5 45.65999984741211,16.5 45.65999984741211,16.5 C44.720001220703125,16.520000457763672 43.459999084472656,16.360000610351562 43.36000061035156,14.899999618530273 C42.88999938964844,15.890000343322754 41.72999954223633,16.729999542236328 40.02000045776367,16.729999542236328 C37.93000030517578,16.729999542236328 36.29999923706055,15.619999885559082 36.29999923706055,13.789999961853027 C36.29999923706055,11.720000267028809 37.84000015258789,11.119999885559082 40.220001220703125,10.670000076293945 C40.220001220703125,10.670000076293945 43.18000030517578,10.09000015258789 43.18000030517578,10.09000015258789 C43.15999984741211,8.430000305175781 42.400001525878906,7.610000133514404 40.900001525878906,7.610000133514404 C39.689998626708984,7.610000133514404 38.88999938964844,8.229999542236328 38.619998931884766,9.399999618530273 C38.619998931884766,9.399999618530273 36.47999954223633,9.270000457763672 36.47999954223633,9.270000457763672z M26.149999618530273,10.979999542236328 C26.149999618530273,13.010000228881836 27.219999313354492,14.279999732971191 28.8799991607666,14.279999732971191 C30.479999542236328,14.279999732971191 31.530000686645508,13.010000228881836 31.549999237060547,10.979999542236328 C31.59000015258789,8.970000267028809 30.540000915527344,7.710000038146973 28.8799991607666,7.710000038146973 C27.200000762939453,7.710000038146973 26.149999618530273,8.970000267028809 26.149999618530273,10.979999542236328 C26.149999618530273,10.979999542236328 26.149999618530273,10.979999542236328 26.149999618530273,10.979999542236328z M28.549999237060547,15.970000267028809 C25.8799991607666,15.970000267028809 24.010000228881836,13.949999809265137 24.010000228881836,11 C24.010000228881836,8 25.860000610351562,5.929999828338623 28.530000686645508,5.929999828338623 C29.920000076293945,5.929999828338623 31.079999923706055,6.639999866485596 31.56999969482422,7.789999961853027 C31.56999969482422,7.789999961853027 31.56999969482422,6.159999847412109 31.56999969482422,6.159999847412109 C31.56999969482422,6.159999847412109 33.58000183105469,6.159999847412109 33.58000183105469,6.159999847412109 C33.58000183105469,6.159999847412109 33.58000183105469,15.40999984741211 33.58000183105469,15.40999984741211 C33.58000183105469,18.139999389648438 31.610000610351562,19.65999984741211 28.799999237060547,19.65999984741211 C26.540000915527344,19.65999984741211 24.829999923706055,18.489999771118164 24.31999969482422,16.68000030517578 C24.31999969482422,16.68000030517578 26.450000762939453,16.540000915527344 26.450000762939453,16.540000915527344 C26.81999969482422,17.420000076293945 27.649999618530273,17.940000534057617 28.81999969482422,17.940000534057617 C30.5,17.940000534057617 31.5,17.209999084472656 31.5,15.760000228881836 C31.5,15.760000228881836 31.5,14.260000228881836 31.5,14.260000228881836 C30.989999771118164,15.289999961853027 29.84000015258789,15.970000267028809 28.549999237060547,15.970000267028809 C28.549999237060547,15.970000267028809 28.549999237060547,15.970000267028809 28.549999237060547,15.970000267028809z M14.510000228881836,10.380000114440918 C14.510000228881836,10.380000114440918 19.709999084472656,10.380000114440918 19.709999084472656,10.380000114440918 C19.479999542236328,8.40999984741211 18.389999389648438,7.690000057220459 17.219999313354492,7.690000057220459 C15.720000267028809,7.690000057220459 14.739999771118164,8.680000305175781 14.510000228881836,10.380000114440918 C14.510000228881836,10.380000114440918 14.510000228881836,10.380000114440918 14.510000228881836,10.380000114440918z M12.289999961853027,11.329999923706055 C12.289999961853027,8.050000190734863 14.220000267028809,5.929999828338623 17.219999313354492,5.929999828338623 C19.700000762939453,5.929999828338623 21.780000686645508,7.590000152587891 21.8799991607666,11.25 C21.8799991607666,11.25 21.899999618530273,11.920000076293945 21.899999618530273,11.920000076293945 C21.899999618530273,11.920000076293945 14.470000267028809,11.920000076293945 14.470000267028809,11.920000076293945 C14.609999656677246,13.850000381469727 15.600000381469727,14.979999542236328 17.219999313354492,14.979999542236328 C18.239999771118164,14.979999542236328 19.170000076293945,14.380000114440918 19.579999923706055,13.380000114440918 C19.579999923706055,13.380000114440918 21.75,13.539999961853027 21.75,13.539999961853027 C21.139999389648438,15.510000228881836 19.329999923706055,16.729999542236328 17.219999313354492,16.729999542236328 C14.220000267028809,16.729999542236328 12.289999961853027,14.609999656677246 12.289999961853027,11.329999923706055 C12.289999961853027,11.329999923706055 12.289999961853027,11.329999923706055 12.289999961853027,11.329999923706055z M2.049999952316284,16.5 C2.049999952316284,16.5 2.049999952316284,2.6600000858306885 2.049999952316284,2.6600000858306885 C2.049999952316284,2.6600000858306885 4.159999847412109,2.6600000858306885 4.159999847412109,2.6600000858306885 C4.159999847412109,2.6600000858306885 4.159999847412109,14.569999694824219 4.159999847412109,14.569999694824219 C4.159999847412109,14.569999694824219 10.90999984741211,14.569999694824219 10.90999984741211,14.569999694824219 C10.90999984741211,14.569999694824219 10.90999984741211,16.5 10.90999984741211,16.5 C10.90999984741211,16.5 2.049999952316284,16.5 2.049999952316284,16.5z"
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
                          d=" M220,0 C220,0 0,0 0,0 C0,0 0,27 0,27 C0,27 220,27 220,27 C220,27 220,0 220,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2149)"
                transform="matrix(1,0,0,1,-41,297)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2423)"
                  transform="matrix(1,0,0,1,0,0.000873565673828125)"
                  opacity="0.9891304347679474"
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,41,41)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                    />
                  </g>
                  <g
                    mask="url(#__lottie_element_2433_1)"
                    style={{ display: 'block' }}
                  >
                    <g transform="matrix(1,0,0,1,41,41)" opacity={1}>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(23,26,43)"
                          strokeOpacity={1}
                          strokeWidth={8}
                          d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M608,-4 C608,-4 -4,-4 -4,-4 C-4,-4 -4,88 -4,88 C-4,88 608,88 608,88 C608,88 608,-4 608,-4z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2438)"
                    filter="url(#__lottie_element_2440)"
                    transform="matrix(1,0,0,1,145.5,25)"
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
                        d=" M114,0 C114,0 0,0 0,0 C0,0 0,111 0,111 C0,111 114,111 114,111 C114,111 114,0 114,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2450)"
                      transform="matrix(1,0,0,1,40,40)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_2455)"
                        transform="matrix(1,0,0,1,2,5)"
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
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                fillOpacity={0}
                                stroke="rgb(147,163,183)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M5.130000114440918,23.8799991607666 C5.130000114440918,23.8799991607666 26.8799991607666,23.8799991607666 26.8799991607666,23.8799991607666 C28.540000915527344,23.8799991607666 29.8799991607666,22.540000915527344 29.8799991607666,20.8799991607666 C29.8799991607666,20.8799991607666 29.8799991607666,5.130000114440918 29.8799991607666,5.130000114440918 C29.8799991607666,3.4700000286102295 28.540000915527344,2.130000114440918 26.8799991607666,2.130000114440918 C26.8799991607666,2.130000114440918 5.130000114440918,2.130000114440918 5.130000114440918,2.130000114440918 C3.4700000286102295,2.130000114440918 2.130000114440918,3.4700000286102295 2.130000114440918,5.130000114440918 C2.130000114440918,5.130000114440918 2.130000114440918,20.8799991607666 2.130000114440918,20.8799991607666 C2.130000114440918,22.540000915527344 3.4700000286102295,23.8799991607666 5.130000114440918,23.8799991607666 C5.130000114440918,23.8799991607666 5.130000114440918,23.8799991607666 5.130000114440918,23.8799991607666z M2.5,11.130000114440918 C2.5,11.130000114440918 29.5,11.130000114440918 29.5,11.130000114440918"
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
                            d=" M32,0 C32,0 0,0 0,0 C0,0 0,26 0,26 C0,26 32,26 32,26 C32,26 32,0 32,0z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.33329999446868896,0,0,0.33329999446868896,7,10)"
                        opacity={1}
                        style={{ display: 'block' }}
                      >
                        <image
                          width="33px"
                          height="9px"
                          preserveAspectRatio="xMidYMid slice"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAJCAYAAAC8G0U0AAAAAXNSR0IArs4c6QAAARJJREFUOE/NVMsRgjAQ3YwNWIodgCf15tkZOoAaxBqwg/Qg3MQOOFIGHUReZOMmEh1u5gSzj5f32UHRHxwlNVS6ThWpsyHzIKK2yA5tTGOApSI7lN+wIx+4E3CHWCfiqps7gESqIzIbEBoylznyStclxL6wFgl8m2f7bSjkjcXE496ySStCAOE8nYjsc57tvbQwu+rG4NIQO7p0xCxmModX5uWREy1FJDNApOER+86kb+tykGlEzLlE2KAV8VKr1lyDpA4rmXYB1aEKWxufBVgvZU4CSwNijrgjwshs4nW8++Xv4nVYg8OUtBUvBbu+52L+vZjxFHgikpOheUv8sXSVvh1pteqL067/9QtZjAXhDPcTr8irCg+SXpkAAAAASUVORK5CYII="
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2443)"
                    filter="url(#__lottie_element_2445)"
                    transform="matrix(1,0,0,1,205.5,30)"
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
                        d=" M336,0 C336,0 0,0 0,0 C0,0 0,106 0,106 C0,106 336,106 336,106 C336,106 336,0 336,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2472)"
                      transform="matrix(1,0,0,1,40,40)"
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
                                fill="rgb(147,163,183)"
                                fillOpacity={1}
                                d=" M183.1199951171875,10.380000114440918 C183.1199951171875,10.380000114440918 188.32000732421875,10.380000114440918 188.32000732421875,10.380000114440918 C188.08999633789062,8.40999984741211 187,7.690000057220459 185.8300018310547,7.690000057220459 C184.3300018310547,7.690000057220459 183.35000610351562,8.680000305175781 183.1199951171875,10.380000114440918 C183.1199951171875,10.380000114440918 183.1199951171875,10.380000114440918 183.1199951171875,10.380000114440918z M180.88999938964844,11.329999923706055 C180.88999938964844,8.050000190734863 182.8300018310547,5.929999828338623 185.8300018310547,5.929999828338623 C188.30999755859375,5.929999828338623 190.38999938964844,7.590000152587891 190.49000549316406,11.25 C190.49000549316406,11.25 190.50999450683594,11.920000076293945 190.50999450683594,11.920000076293945 C190.50999450683594,11.920000076293945 183.0800018310547,11.920000076293945 183.0800018310547,11.920000076293945 C183.2100067138672,13.850000381469727 184.2100067138672,14.979999542236328 185.8300018310547,14.979999542236328 C186.85000610351562,14.979999542236328 187.77999877929688,14.380000114440918 188.19000244140625,13.380000114440918 C188.19000244140625,13.380000114440918 190.36000061035156,13.539999961853027 190.36000061035156,13.539999961853027 C189.75,15.510000228881836 187.94000244140625,16.729999542236328 185.8300018310547,16.729999542236328 C182.8300018310547,16.729999542236328 180.88999938964844,14.609999656677246 180.88999938964844,11.329999923706055 C180.88999938964844,11.329999923706055 180.88999938964844,11.329999923706055 180.88999938964844,11.329999923706055z M173.99000549316406,6.159999847412109 C173.99000549316406,6.159999847412109 175.8800048828125,6.159999847412109 175.8800048828125,6.159999847412109 C175.8800048828125,6.159999847412109 175.94000244140625,8.109999656677246 175.94000244140625,8.109999656677246 C176.30999755859375,6.789999961853027 177.08999633789062,6.159999847412109 178.41000366210938,6.159999847412109 C178.41000366210938,6.159999847412109 179.41000366210938,6.159999847412109 179.41000366210938,6.159999847412109 C179.41000366210938,6.159999847412109 179.41000366210938,7.860000133514404 179.41000366210938,7.860000133514404 C179.41000366210938,7.860000133514404 178.38999938964844,7.860000133514404 178.38999938964844,7.860000133514404 C176.77000427246094,7.860000133514404 176.0500030517578,8.760000228881836 176.0500030517578,10.470000267028809 C176.0500030517578,10.470000267028809 176.0500030517578,16.5 176.0500030517578,16.5 C176.0500030517578,16.5 173.99000549316406,16.5 173.99000549316406,16.5 C173.99000549316406,16.5 173.99000549316406,6.159999847412109 173.99000549316406,6.159999847412109z M163.77000427246094,13.75 C163.77000427246094,14.510000228881836 164.44000244140625,15.140000343322754 165.8000030517578,15.140000343322754 C167.33999633789062,15.119999885559082 168.5500030517578,14.020000457763672 168.5500030517578,11.800000190734863 C168.5500030517578,11.800000190734863 168.5500030517578,11.65999984741211 168.5500030517578,11.65999984741211 C168.5500030517578,11.65999984741211 166.33999633789062,12.050000190734863 166.33999633789062,12.050000190734863 C164.9199981689453,12.300000190734863 163.77000427246094,12.449999809265137 163.77000427246094,13.75 C163.77000427246094,13.75 163.77000427246094,13.75 163.77000427246094,13.75z M161.8000030517578,9.270000457763672 C162.2100067138672,7.179999828338623 163.85000610351562,5.929999828338623 166.22999572753906,5.929999828338623 C169.0399932861328,5.929999828338623 170.5800018310547,7.489999771118164 170.5800018310547,10.319999694824219 C170.5800018310547,10.319999694824219 170.5800018310547,14.15999984741211 170.5800018310547,14.15999984741211 C170.5800018310547,14.6899995803833 170.80999755859375,14.880000114440918 171.22000122070312,14.880000114440918 C171.22000122070312,14.880000114440918 171.6300048828125,14.880000114440918 171.6300048828125,14.880000114440918 C171.6300048828125,14.880000114440918 171.6300048828125,16.5 171.6300048828125,16.5 C171.6300048828125,16.5 170.97999572753906,16.5 170.97999572753906,16.5 C170.0500030517578,16.520000457763672 168.77999877929688,16.360000610351562 168.67999267578125,14.899999618530273 C168.2100067138672,15.890000343322754 167.05999755859375,16.729999542236328 165.35000610351562,16.729999542236328 C163.25999450683594,16.729999542236328 161.6300048828125,15.619999885559082 161.6300048828125,13.789999961853027 C161.6300048828125,11.720000267028809 163.1699981689453,11.119999885559082 165.5500030517578,10.670000076293945 C165.5500030517578,10.670000076293945 168.50999450683594,10.09000015258789 168.50999450683594,10.09000015258789 C168.49000549316406,8.430000305175781 167.72999572753906,7.610000133514404 166.22999572753906,7.610000133514404 C165.02000427246094,7.610000133514404 164.22000122070312,8.229999542236328 163.9499969482422,9.399999618530273 C163.9499969482422,9.399999618530273 161.8000030517578,9.270000457763672 161.8000030517578,9.270000457763672z M153.63999938964844,6.159999847412109 C153.63999938964844,6.159999847412109 155.94000244140625,14.15999984741211 155.94000244140625,14.15999984741211 C155.94000244140625,14.15999984741211 158.24000549316406,6.159999847412109 158.24000549316406,6.159999847412109 C158.24000549316406,6.159999847412109 160.35000610351562,6.159999847412109 160.35000610351562,6.159999847412109 C160.35000610351562,6.159999847412109 157.14999389648438,16.5 157.14999389648438,16.5 C157.14999389648438,16.5 154.85000610351562,16.5 154.85000610351562,16.5 C154.85000610351562,16.5 152.66000366210938,9.09000015258789 152.66000366210938,9.09000015258789 C152.66000366210938,9.09000015258789 150.5,16.5 150.5,16.5 C150.5,16.5 148.1999969482422,16.5 148.1999969482422,16.5 C148.1999969482422,16.5 145.02000427246094,6.159999847412109 145.02000427246094,6.159999847412109 C145.02000427246094,6.159999847412109 147.11000061035156,6.159999847412109 147.11000061035156,6.159999847412109 C147.11000061035156,6.159999847412109 149.38999938964844,14.15999984741211 149.38999938964844,14.15999984741211 C149.38999938964844,14.15999984741211 151.69000244140625,6.159999847412109 151.69000244140625,6.159999847412109 C151.69000244140625,6.159999847412109 153.63999938964844,6.159999847412109 153.63999938964844,6.159999847412109z M138.72000122070312,3.819999933242798 C138.72000122070312,3.819999933242798 140.7899932861328,3.819999933242798 140.7899932861328,3.819999933242798 C140.7899932861328,3.819999933242798 140.7899932861328,6.159999847412109 140.7899932861328,6.159999847412109 C140.7899932861328,6.159999847412109 143.52000427246094,6.159999847412109 143.52000427246094,6.159999847412109 C143.52000427246094,6.159999847412109 143.52000427246094,7.840000152587891 143.52000427246094,7.840000152587891 C143.52000427246094,7.840000152587891 140.7899932861328,7.840000152587891 140.7899932861328,7.840000152587891 C140.7899932861328,7.840000152587891 140.7899932861328,13.539999961853027 140.7899932861328,13.539999961853027 C140.7899932861328,14.380000114440918 141.1999969482422,14.800000190734863 142,14.800000190734863 C142,14.800000190734863 143.5,14.800000190734863 143.5,14.800000190734863 C143.5,14.800000190734863 143.5,16.5 143.5,16.5 C143.5,16.5 141.77999877929688,16.5 141.77999877929688,16.5 C139.7899932861328,16.5 138.72000122070312,15.470000267028809 138.72000122070312,13.539999961853027 C138.72000122070312,13.539999961853027 138.72000122070312,7.840000152587891 138.72000122070312,7.840000152587891 C138.72000122070312,7.840000152587891 137.13999938964844,7.840000152587891 137.13999938964844,7.840000152587891 C137.13999938964844,7.840000152587891 137.13999938964844,6.159999847412109 137.13999938964844,6.159999847412109 C137.13999938964844,6.159999847412109 138.72000122070312,6.159999847412109 138.72000122070312,6.159999847412109 C138.72000122070312,6.159999847412109 138.72000122070312,3.819999933242798 138.72000122070312,3.819999933242798z M130.1999969482422,5.699999809265137 C130.1999969482422,3.7899999618530273 131.1300048828125,2.6600000858306885 133.24000549316406,2.6600000858306885 C133.24000549316406,2.6600000858306885 135.00999450683594,2.6600000858306885 135.00999450683594,2.6600000858306885 C135.00999450683594,2.6600000858306885 135.00999450683594,4.349999904632568 135.00999450683594,4.349999904632568 C135.00999450683594,4.349999904632568 133.38999938964844,4.349999904632568 133.38999938964844,4.349999904632568 C132.72999572753906,4.349999904632568 132.27000427246094,4.860000133514404 132.27000427246094,5.699999809265137 C132.27000427246094,5.699999809265137 132.27000427246094,6.300000190734863 132.27000427246094,6.300000190734863 C132.27000427246094,6.300000190734863 134.86000061035156,6.300000190734863 134.86000061035156,6.300000190734863 C134.86000061035156,6.300000190734863 134.86000061035156,8 134.86000061035156,8 C134.86000061035156,8 132.27000427246094,8 132.27000427246094,8 C132.27000427246094,8 132.27000427246094,16.5 132.27000427246094,16.5 C132.27000427246094,16.5 130.1999969482422,16.5 130.1999969482422,16.5 C130.1999969482422,16.5 130.1999969482422,8 130.1999969482422,8 C130.1999969482422,8 128.75,8 128.75,8 C128.75,8 128.75,6.300000190734863 128.75,6.300000190734863 C128.75,6.300000190734863 130.1999969482422,6.300000190734863 130.1999969482422,6.300000190734863 C130.1999969482422,6.300000190734863 130.1999969482422,5.699999809265137 130.1999969482422,5.699999809265137z M119.12000274658203,11.329999923706055 C119.12000274658203,13.59000015258789 120.1500015258789,14.9399995803833 121.91000366210938,14.9399995803833 C123.66000366210938,14.9399995803833 124.68000030517578,13.59000015258789 124.68000030517578,11.329999923706055 C124.68000030517578,9.069999694824219 123.66000366210938,7.730000019073486 121.91000366210938,7.730000019073486 C120.1500015258789,7.730000019073486 119.12000274658203,9.069999694824219 119.12000274658203,11.329999923706055 C119.12000274658203,11.329999923706055 119.12000274658203,11.329999923706055 119.12000274658203,11.329999923706055z M121.91000366210938,16.729999542236328 C118.93000030517578,16.729999542236328 116.97000122070312,14.630000114440918 116.97000122070312,11.329999923706055 C116.97000122070312,8.029999732971191 118.93000030517578,5.929999828338623 121.91000366210938,5.929999828338623 C124.87000274658203,5.929999828338623 126.81999969482422,8.029999732971191 126.81999969482422,11.329999923706055 C126.81999969482422,14.630000114440918 124.87000274658203,16.729999542236328 121.91000366210938,16.729999542236328 C121.91000366210938,16.729999542236328 121.91000366210938,16.729999542236328 121.91000366210938,16.729999542236328z M112.58999633789062,9.420000076293945 C112.37999725341797,8.3100004196167 111.33999633789062,7.650000095367432 110.2699966430664,7.650000095367432 C109.22000122070312,7.650000095367432 108.36000061035156,8.1899995803833 108.36000061035156,9.109999656677246 C108.37999725341797,10.050000190734863 109.56999969482422,10.420000076293945 110.66000366210938,10.630000114440918 C113.2300033569336,11.100000381469727 114.87000274658203,11.779999732971191 114.87000274658203,13.8100004196167 C114.87000274658203,15.84000015258789 112.83999633789062,16.729999542236328 110.63999938964844,16.729999542236328 C108.01000213623047,16.729999542236328 106.12000274658203,15.399999618530273 105.95999908447266,13.239999771118164 C105.95999908447266,13.239999771118164 108.08000183105469,13.109999656677246 108.08000183105469,13.109999656677246 C108.29000091552734,14.279999732971191 109.19000244140625,15.020000457763672 110.62000274658203,15.020000457763672 C111.55000305175781,15.020000457763672 112.72000122070312,14.6899995803833 112.72000122070312,13.710000038146973 C112.69999694824219,12.600000381469727 111.4000015258789,12.460000038146973 110.29000091552734,12.210000038146973 C108.08999633789062,11.739999771118164 106.20999908447266,11.140000343322754 106.20999908447266,9.170000076293945 C106.20999908447266,7.159999847412109 107.8499984741211,5.929999828338623 110.41999816894531,5.929999828338623 C112.66000366210938,5.929999828338623 114.37999725341797,7.230000019073486 114.70999908447266,9.300000190734863 C114.70999908447266,9.300000190734863 112.58999633789062,9.420000076293945 112.58999633789062,9.420000076293945z M91.31999969482422,10.380000114440918 C91.31999969482422,10.380000114440918 96.52999877929688,10.380000114440918 96.52999877929688,10.380000114440918 C96.30000305175781,8.40999984741211 95.20999908447266,7.690000057220459 94.04000091552734,7.690000057220459 C92.54000091552734,7.690000057220459 91.55000305175781,8.680000305175781 91.31999969482422,10.380000114440918 C91.31999969482422,10.380000114440918 91.31999969482422,10.380000114440918 91.31999969482422,10.380000114440918z M89.0999984741211,11.329999923706055 C89.0999984741211,8.050000190734863 91.04000091552734,5.929999828338623 94.04000091552734,5.929999828338623 C96.5199966430664,5.929999828338623 98.5999984741211,7.590000152587891 98.69999694824219,11.25 C98.69999694824219,11.25 98.70999908447266,11.920000076293945 98.70999908447266,11.920000076293945 C98.70999908447266,11.920000076293945 91.29000091552734,11.920000076293945 91.29000091552734,11.920000076293945 C91.43000030517578,13.850000381469727 92.41999816894531,14.979999542236328 94.04000091552734,14.979999542236328 C95.05999755859375,14.979999542236328 95.9800033569336,14.380000114440918 96.38999938964844,13.380000114440918 C96.38999938964844,13.380000114440918 98.55999755859375,13.539999961853027 98.55999755859375,13.539999961853027 C97.95999908447266,15.510000228881836 96.1500015258789,16.729999542236328 94.04000091552734,16.729999542236328 C91.04000091552734,16.729999542236328 89.0999984741211,14.609999656677246 89.0999984741211,11.329999923706055 C89.0999984741211,11.329999923706055 89.0999984741211,11.329999923706055 89.0999984741211,11.329999923706055z M84.72000122070312,9.420000076293945 C84.51000213623047,8.3100004196167 83.47000122070312,7.650000095367432 82.4000015258789,7.650000095367432 C81.3499984741211,7.650000095367432 80.4800033569336,8.1899995803833 80.4800033569336,9.109999656677246 C80.5,10.050000190734863 81.69999694824219,10.420000076293945 82.79000091552734,10.630000114440918 C85.36000061035156,11.100000381469727 87,11.779999732971191 87,13.8100004196167 C87,15.84000015258789 84.97000122070312,16.729999542236328 82.7699966430664,16.729999542236328 C80.13999938964844,16.729999542236328 78.25,15.399999618530273 78.08999633789062,13.239999771118164 C78.08999633789062,13.239999771118164 80.20999908447266,13.109999656677246 80.20999908447266,13.109999656677246 C80.41999816894531,14.279999732971191 81.31999969482422,15.020000457763672 82.75,15.020000457763672 C83.68000030517578,15.020000457763672 84.86000061035156,14.6899995803833 84.86000061035156,13.710000038146973 C84.83999633789062,12.600000381469727 83.52999877929688,12.460000038146973 82.41999816894531,12.210000038146973 C80.22000122070312,11.739999771118164 78.33999633789062,11.140000343322754 78.33999633789062,9.170000076293945 C78.33999633789062,7.159999847412109 79.9800033569336,5.929999828338623 82.55000305175781,5.929999828338623 C84.79000091552734,5.929999828338623 86.51000213623047,7.230000019073486 86.83999633789062,9.300000190734863 C86.83999633789062,9.300000190734863 84.72000122070312,9.420000076293945 84.72000122070312,9.420000076293945z M73.2699966430664,4.639999866485596 C73.2699966430664,4.639999866485596 73.2699966430664,2.680000066757202 73.2699966430664,2.680000066757202 C73.2699966430664,2.680000066757202 75.44000244140625,2.680000066757202 75.44000244140625,2.680000066757202 C75.44000244140625,2.680000066757202 75.44000244140625,4.639999866485596 75.44000244140625,4.639999866485596 C75.44000244140625,4.639999866485596 73.2699966430664,4.639999866485596 73.2699966430664,4.639999866485596z M73.30999755859375,6.159999847412109 C73.30999755859375,6.159999847412109 75.37999725341797,6.159999847412109 75.37999725341797,6.159999847412109 C75.37999725341797,6.159999847412109 75.37999725341797,16.5 75.37999725341797,16.5 C75.37999725341797,16.5 73.30999755859375,16.5 73.30999755859375,16.5 C73.30999755859375,16.5 73.30999755859375,6.159999847412109 73.30999755859375,6.159999847412109z M65.16999816894531,6.159999847412109 C65.16999816894531,6.159999847412109 67.05999755859375,6.159999847412109 67.05999755859375,6.159999847412109 C67.05999755859375,6.159999847412109 67.12000274658203,8.109999656677246 67.12000274658203,8.109999656677246 C67.48999786376953,6.789999961853027 68.27999877929688,6.159999847412109 69.5999984741211,6.159999847412109 C69.5999984741211,6.159999847412109 70.58999633789062,6.159999847412109 70.58999633789062,6.159999847412109 C70.58999633789062,6.159999847412109 70.58999633789062,7.860000133514404 70.58999633789062,7.860000133514404 C70.58999633789062,7.860000133514404 69.58000183105469,7.860000133514404 69.58000183105469,7.860000133514404 C67.95999908447266,7.860000133514404 67.23999786376953,8.760000228881836 67.23999786376953,10.470000267028809 C67.23999786376953,10.470000267028809 67.23999786376953,16.5 67.23999786376953,16.5 C67.23999786376953,16.5 65.16999816894531,16.5 65.16999816894531,16.5 C65.16999816894531,16.5 65.16999816894531,6.159999847412109 65.16999816894531,6.159999847412109z M54.869998931884766,11.329999923706055 C54.869998931884766,13.180000305175781 55.709999084472656,14.960000038146973 57.619998931884766,14.960000038146973 C59.56999969482422,14.960000038146973 60.38999938964844,13.220000267028809 60.38999938964844,11.329999923706055 C60.38999938964844,9.460000038146973 59.54999923706055,7.710000038146973 57.619998931884766,7.710000038146973 C55.709999084472656,7.710000038146973 54.869998931884766,9.479999542236328 54.869998931884766,11.329999923706055 C54.869998931884766,11.329999923706055 54.869998931884766,11.329999923706055 54.869998931884766,11.329999923706055z M52.97999954223633,19.43000030517578 C52.97999954223633,19.43000030517578 52.97999954223633,6.159999847412109 52.97999954223633,6.159999847412109 C52.97999954223633,6.159999847412109 54.90999984741211,6.159999847412109 54.90999984741211,6.159999847412109 C54.90999984741211,6.159999847412109 54.959999084472656,7.710000038146973 54.959999084472656,7.710000038146973 C55.529998779296875,6.559999942779541 56.630001068115234,5.929999828338623 58.11000061035156,5.929999828338623 C61.130001068115234,5.929999828338623 62.54999923706055,8.420000076293945 62.54999923706055,11.329999923706055 C62.54999923706055,14.239999771118164 61.130001068115234,16.729999542236328 58.11000061035156,16.729999542236328 C56.70000076293945,16.729999542236328 55.630001068115234,16.149999618530273 55.040000915527344,15.0600004196167 C55.040000915527344,15.0600004196167 55.040000915527344,19.43000030517578 55.040000915527344,19.43000030517578 C55.040000915527344,19.43000030517578 52.97999954223633,19.43000030517578 52.97999954223633,19.43000030517578z M45.349998474121094,6.159999847412109 C45.349998474121094,6.159999847412109 47.2400016784668,6.159999847412109 47.2400016784668,6.159999847412109 C47.2400016784668,6.159999847412109 47.29999923706055,8.109999656677246 47.29999923706055,8.109999656677246 C47.66999816894531,6.789999961853027 48.45000076293945,6.159999847412109 49.779998779296875,6.159999847412109 C49.779998779296875,6.159999847412109 50.77000045776367,6.159999847412109 50.77000045776367,6.159999847412109 C50.77000045776367,6.159999847412109 50.77000045776367,7.860000133514404 50.77000045776367,7.860000133514404 C50.77000045776367,7.860000133514404 49.7599983215332,7.860000133514404 49.7599983215332,7.860000133514404 C48.13999938964844,7.860000133514404 47.41999816894531,8.760000228881836 47.41999816894531,10.470000267028809 C47.41999816894531,10.470000267028809 47.41999816894531,16.5 47.41999816894531,16.5 C47.41999816894531,16.5 45.349998474121094,16.5 45.349998474121094,16.5 C45.349998474121094,16.5 45.349998474121094,6.159999847412109 45.349998474121094,6.159999847412109z M35.36000061035156,10.380000114440918 C35.36000061035156,10.380000114440918 40.56999969482422,10.380000114440918 40.56999969482422,10.380000114440918 C40.34000015258789,8.40999984741211 39.2400016784668,7.690000057220459 38.06999969482422,7.690000057220459 C36.56999969482422,7.690000057220459 35.59000015258789,8.680000305175781 35.36000061035156,10.380000114440918 C35.36000061035156,10.380000114440918 35.36000061035156,10.380000114440918 35.36000061035156,10.380000114440918z M33.13999938964844,11.329999923706055 C33.13999938964844,8.050000190734863 35.06999969482422,5.929999828338623 38.06999969482422,5.929999828338623 C40.54999923706055,5.929999828338623 42.63999938964844,7.590000152587891 42.72999954223633,11.25 C42.72999954223633,11.25 42.75,11.920000076293945 42.75,11.920000076293945 C42.75,11.920000076293945 35.31999969482422,11.920000076293945 35.31999969482422,11.920000076293945 C35.45000076293945,13.850000381469727 36.45000076293945,14.979999542236328 38.06999969482422,14.979999542236328 C39.09000015258789,14.979999542236328 40.02000045776367,14.380000114440918 40.43000030517578,13.380000114440918 C40.43000030517578,13.380000114440918 42.599998474121094,13.539999961853027 42.599998474121094,13.539999961853027 C41.9900016784668,15.510000228881836 40.18000030517578,16.729999542236328 38.06999969482422,16.729999542236328 C35.06999969482422,16.729999542236328 33.13999938964844,14.609999656677246 33.13999938964844,11.329999923706055 C33.13999938964844,11.329999923706055 33.13999938964844,11.329999923706055 33.13999938964844,11.329999923706055z M26.68000030517578,3.819999933242798 C26.68000030517578,3.819999933242798 28.739999771118164,3.819999933242798 28.739999771118164,3.819999933242798 C28.739999771118164,3.819999933242798 28.739999771118164,6.159999847412109 28.739999771118164,6.159999847412109 C28.739999771118164,6.159999847412109 31.469999313354492,6.159999847412109 31.469999313354492,6.159999847412109 C31.469999313354492,6.159999847412109 31.469999313354492,7.840000152587891 31.469999313354492,7.840000152587891 C31.469999313354492,7.840000152587891 28.739999771118164,7.840000152587891 28.739999771118164,7.840000152587891 C28.739999771118164,7.840000152587891 28.739999771118164,13.539999961853027 28.739999771118164,13.539999961853027 C28.739999771118164,14.380000114440918 29.149999618530273,14.800000190734863 29.950000762939453,14.800000190734863 C29.950000762939453,14.800000190734863 31.450000762939453,14.800000190734863 31.450000762939453,14.800000190734863 C31.450000762939453,14.800000190734863 31.450000762939453,16.5 31.450000762939453,16.5 C31.450000762939453,16.5 29.739999771118164,16.5 29.739999771118164,16.5 C27.75,16.5 26.68000030517578,15.470000267028809 26.68000030517578,13.539999961853027 C26.68000030517578,13.539999961853027 26.68000030517578,7.840000152587891 26.68000030517578,7.840000152587891 C26.68000030517578,7.840000152587891 25.100000381469727,7.840000152587891 25.100000381469727,7.840000152587891 C25.100000381469727,7.840000152587891 25.100000381469727,6.159999847412109 25.100000381469727,6.159999847412109 C25.100000381469727,6.159999847412109 26.68000030517578,6.159999847412109 26.68000030517578,6.159999847412109 C26.68000030517578,6.159999847412109 26.68000030517578,3.819999933242798 26.68000030517578,3.819999933242798z M14.109999656677246,6.159999847412109 C14.109999656677246,6.159999847412109 16,6.159999847412109 16,6.159999847412109 C16,6.159999847412109 16.059999465942383,7.900000095367432 16.059999465942383,7.900000095367432 C16.59000015258789,6.510000228881836 17.799999237060547,5.929999828338623 19.200000762939453,5.929999828338623 C21.520000457763672,5.929999828338623 22.709999084472656,7.590000152587891 22.709999084472656,9.850000381469727 C22.709999084472656,9.850000381469727 22.709999084472656,16.5 22.709999084472656,16.5 C22.709999084472656,16.5 20.639999389648438,16.5 20.639999389648438,16.5 C20.639999389648438,16.5 20.639999389648438,10.489999771118164 20.639999389648438,10.489999771118164 C20.639999389648438,8.65999984741211 20.079999923706055,7.670000076293945 18.6299991607666,7.670000076293945 C17.1299991607666,7.670000076293945 16.18000030517578,8.65999984741211 16.18000030517578,10.489999771118164 C16.18000030517578,10.489999771118164 16.18000030517578,16.5 16.18000030517578,16.5 C16.18000030517578,16.5 14.109999656677246,16.5 14.109999656677246,16.5 C14.109999656677246,16.5 14.109999656677246,6.159999847412109 14.109999656677246,6.159999847412109z M2.049999952316284,2.6600000858306885 C2.049999952316284,2.6600000858306885 11.0600004196167,2.6600000858306885 11.0600004196167,2.6600000858306885 C11.0600004196167,2.6600000858306885 11.0600004196167,4.590000152587891 11.0600004196167,4.590000152587891 C11.0600004196167,4.590000152587891 4.159999847412109,4.590000152587891 4.159999847412109,4.590000152587891 C4.159999847412109,4.590000152587891 4.159999847412109,8.619999885559082 4.159999847412109,8.619999885559082 C4.159999847412109,8.619999885559082 10.829999923706055,8.619999885559082 10.829999923706055,8.619999885559082 C10.829999923706055,8.619999885559082 10.829999923706055,10.489999771118164 10.829999923706055,10.489999771118164 C10.829999923706055,10.489999771118164 4.159999847412109,10.489999771118164 4.159999847412109,10.489999771118164 C4.159999847412109,10.489999771118164 4.159999847412109,14.569999694824219 4.159999847412109,14.569999694824219 C4.159999847412109,14.569999694824219 11.220000267028809,14.569999694824219 11.220000267028809,14.569999694824219 C11.220000267028809,14.569999694824219 11.220000267028809,16.5 11.220000267028809,16.5 C11.220000267028809,16.5 2.049999952316284,16.5 2.049999952316284,16.5 C2.049999952316284,16.5 2.049999952316284,2.6600000858306885 2.049999952316284,2.6600000858306885z"
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
                          d=" M256,0 C256,0 0,0 0,0 C0,0 0,26 0,26 C0,26 256,26 256,26 C256,26 256,0 256,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_2154)"
                transform="matrix(1,0,0,1,-41,297)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g
                  clipPath="url(#__lottie_element_2483)"
                  transform="matrix(1,0,0,1,0,22)"
                  opacity={0}
                  style={{ display: 'block' }}
                >
                  <g
                    transform="matrix(1,0,0,1,41,41)"
                    opacity={1}
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="rgb(4,6,24)"
                      fillOpacity={1}
                      d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                    />
                  </g>
                  <g
                    mask="url(#__lottie_element_2493_1)"
                    style={{ display: 'block' }}
                  >
                    <g transform="matrix(1,0,0,1,41,41)" opacity={1}>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(23,26,43)"
                          strokeOpacity={1}
                          strokeWidth={8}
                          d=" M604,24 C604,10.754400253295898 593.24560546875,0 580,0 C580,0 24,0 24,0 C10.754400253295898,0 0,10.754400253295898 0,24 C0,24 0,60 0,60 C0,73.24559783935547 10.754400253295898,84 24,84 C24,84 580,84 580,84 C593.24560546875,84 604,73.24559783935547 604,60 C604,60 604,24 604,24z"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,0,0)"
                          fillOpacity={0}
                          d=" M608,-4 C608,-4 -4,-4 -4,-4 C-4,-4 -4,88 -4,88 C-4,88 608,88 608,88 C608,88 608,-4 608,-4z"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2498)"
                    filter="url(#__lottie_element_2500)"
                    transform="matrix(1,0,0,1,187.5,25)"
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
                        d=" M116,0 C116,0 0,0 0,0 C0,0 0,112 0,112 C0,112 116,112 116,112 C116,112 116,0 116,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2510)"
                      transform="matrix(1,0,0,1,40,40)"
                      opacity={1}
                      style={{ display: 'block' }}
                    >
                      <g
                        clipPath="url(#__lottie_element_2515)"
                        transform="matrix(1,0,0,1,0,4)"
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
                                stroke="rgb(147,163,183)"
                                strokeOpacity={1}
                                strokeWidth={3}
                                d=" M17.56999969482422,26.3799991607666 C17.56999969482422,26.3799991607666 4.71999979019165,26.3799991607666 4.71999979019165,26.3799991607666 C2.9800000190734863,26.3799991607666 1.5700000524520874,24.8700008392334 2.009999990463257,23.190000534057617 C4.840000152587891,12.430000305175781 17.450000762939453,12.430000305175781 20.280000686645508,23.190000534057617 C20.719999313354492,24.8700008392334 19.309999465942383,26.3799991607666 17.56999969482422,26.3799991607666 C17.56999969482422,26.3799991607666 17.56999969482422,26.3799991607666 17.56999969482422,26.3799991607666z M29.6299991607666,6.5 C29.6299991607666,9.1899995803833 27.440000534057617,11.380000114440918 24.75,11.380000114440918 C22.059999465942383,11.380000114440918 19.8799991607666,9.1899995803833 19.8799991607666,6.5 C19.8799991607666,3.809999942779541 22.059999465942383,1.6299999952316284 24.75,1.6299999952316284 C27.440000534057617,1.6299999952316284 29.6299991607666,3.809999942779541 29.6299991607666,6.5 C29.6299991607666,6.5 29.6299991607666,6.5 29.6299991607666,6.5z M16.1299991607666,6.5 C16.1299991607666,9.1899995803833 13.9399995803833,11.380000114440918 11.25,11.380000114440918 C8.5600004196167,11.380000114440918 6.380000114440918,9.1899995803833 6.380000114440918,6.5 C6.380000114440918,3.809999942779541 8.5600004196167,1.6299999952316284 11.25,1.6299999952316284 C13.9399995803833,1.6299999952316284 16.1299991607666,3.809999942779541 16.1299991607666,6.5 C16.1299991607666,6.5 16.1299991607666,6.5 16.1299991607666,6.5z M21.639999389648438,15.770000457763672 C26.34000015258789,13.819999694824219 32.18000030517578,16.299999237060547 33.9900016784668,23.200000762939453 C34.43000030517578,24.889999389648438 33.02000045776367,26.3799991607666 31.280000686645508,26.3799991607666 C31.280000686645508,26.3799991607666 24.3799991607666,26.3799991607666 24.3799991607666,26.3799991607666"
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
                            d=" M36,0 C36,0 0,0 0,0 C0,0 0,28 0,28 C0,28 36,28 36,28 C36,28 36,0 36,0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(#__lottie_element_2503)"
                    filter="url(#__lottie_element_2505)"
                    transform="matrix(1,0,0,1,247.5,30)"
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
                        d=" M252,0 C252,0 0,0 0,0 C0,0 0,106 0,106 C0,106 252,106 252,106 C252,106 252,0 252,0z"
                      />
                    </g>
                    <g
                      clipPath="url(#__lottie_element_2528)"
                      transform="matrix(1,0,0,1,40,40)"
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
                              d=" M125.31999969482422,9.420000076293945 C125.11000061035156,8.3100004196167 124.06999969482422,7.650000095367432 123,7.650000095367432 C121.94999694824219,7.650000095367432 121.08999633789062,8.1899995803833 121.08999633789062,9.109999656677246 C121.11000061035156,10.050000190734863 122.30000305175781,10.420000076293945 123.38999938964844,10.630000114440918 C125.95999908447266,11.100000381469727 127.61000061035156,11.779999732971191 127.61000061035156,13.8100004196167 C127.61000061035156,15.84000015258789 125.58000183105469,16.729999542236328 123.37999725341797,16.729999542236328 C120.75,16.729999542236328 118.86000061035156,15.399999618530273 118.69999694824219,13.239999771118164 C118.69999694824219,13.239999771118164 120.81999969482422,13.109999656677246 120.81999969482422,13.109999656677246 C121.02999877929688,14.279999732971191 121.93000030517578,15.020000457763672 123.36000061035156,15.020000457763672 C124.29000091552734,15.020000457763672 125.45999908447266,14.6899995803833 125.45999908447266,13.710000038146973 C125.44000244140625,12.600000381469727 124.12999725341797,12.460000038146973 123.0199966430664,12.210000038146973 C120.81999969482422,11.739999771118164 118.94999694824219,11.140000343322754 118.94999694824219,9.170000076293945 C118.94999694824219,7.159999847412109 120.58999633789062,5.929999828338623 123.16000366210938,5.929999828338623 C125.4000015258789,5.929999828338623 127.12000274658203,7.230000019073486 127.44999694824219,9.300000190734863 C127.44999694824219,9.300000190734863 125.31999969482422,9.420000076293945 125.31999969482422,9.420000076293945z M113.2699966430664,2.6600000858306885 C113.2699966430664,2.6600000858306885 115.33999633789062,2.6600000858306885 115.33999633789062,2.6600000858306885 C115.33999633789062,2.6600000858306885 115.33999633789062,14.100000381469727 115.33999633789062,14.100000381469727 C115.33999633789062,14.569999694824219 115.58999633789062,14.800000190734863 116.04000091552734,14.800000190734863 C116.04000091552734,14.800000190734863 116.87999725341797,14.800000190734863 116.87999725341797,14.800000190734863 C116.87999725341797,14.800000190734863 116.87999725341797,16.5 116.87999725341797,16.5 C116.87999725341797,16.5 115.58999633789062,16.5 115.58999633789062,16.5 C114.19999694824219,16.5 113.2699966430664,15.600000381469727 113.2699966430664,14.199999809265137 C113.2699966430664,14.199999809265137 113.2699966430664,2.6600000858306885 113.2699966430664,2.6600000858306885z M102.86000061035156,11.329999923706055 C102.86000061035156,13.59000015258789 103.9000015258789,14.9399995803833 105.6500015258789,14.9399995803833 C107.4000015258789,14.9399995803833 108.41999816894531,13.59000015258789 108.41999816894531,11.329999923706055 C108.41999816894531,9.069999694824219 107.4000015258789,7.730000019073486 105.6500015258789,7.730000019073486 C103.9000015258789,7.730000019073486 102.86000061035156,9.069999694824219 102.86000061035156,11.329999923706055 C102.86000061035156,11.329999923706055 102.86000061035156,11.329999923706055 102.86000061035156,11.329999923706055z M105.6500015258789,16.729999542236328 C102.66999816894531,16.729999542236328 100.72000122070312,14.630000114440918 100.72000122070312,11.329999923706055 C100.72000122070312,8.029999732971191 102.66999816894531,5.929999828338623 105.6500015258789,5.929999828338623 C108.61000061035156,5.929999828338623 110.56999969482422,8.029999732971191 110.56999969482422,11.329999923706055 C110.56999969482422,14.630000114440918 108.61000061035156,16.729999542236328 105.6500015258789,16.729999542236328 C105.6500015258789,16.729999542236328 105.6500015258789,16.729999542236328 105.6500015258789,16.729999542236328z M90.91000366210938,11.329999923706055 C90.91000366210938,13.59000015258789 91.94999694824219,14.9399995803833 93.69999694824219,14.9399995803833 C95.44999694824219,14.9399995803833 96.47000122070312,13.59000015258789 96.47000122070312,11.329999923706055 C96.47000122070312,9.069999694824219 95.44999694824219,7.730000019073486 93.69999694824219,7.730000019073486 C91.94999694824219,7.730000019073486 90.91000366210938,9.069999694824219 90.91000366210938,11.329999923706055 C90.91000366210938,11.329999923706055 90.91000366210938,11.329999923706055 90.91000366210938,11.329999923706055z M93.69999694824219,16.729999542236328 C90.72000122070312,16.729999542236328 88.7699966430664,14.630000114440918 88.7699966430664,11.329999923706055 C88.7699966430664,8.029999732971191 90.72000122070312,5.929999828338623 93.69999694824219,5.929999828338623 C96.66000366210938,5.929999828338623 98.62000274658203,8.029999732971191 98.62000274658203,11.329999923706055 C98.62000274658203,14.630000114440918 96.66000366210938,16.729999542236328 93.69999694824219,16.729999542236328 C93.69999694824219,16.729999542236328 93.69999694824219,16.729999542236328 93.69999694824219,16.729999542236328z M82.30000305175781,3.819999933242798 C82.30000305175781,3.819999933242798 84.37999725341797,3.819999933242798 84.37999725341797,3.819999933242798 C84.37999725341797,3.819999933242798 84.37999725341797,6.159999847412109 84.37999725341797,6.159999847412109 C84.37999725341797,6.159999847412109 87.0999984741211,6.159999847412109 87.0999984741211,6.159999847412109 C87.0999984741211,6.159999847412109 87.0999984741211,7.840000152587891 87.0999984741211,7.840000152587891 C87.0999984741211,7.840000152587891 84.37999725341797,7.840000152587891 84.37999725341797,7.840000152587891 C84.37999725341797,7.840000152587891 84.37999725341797,13.539999961853027 84.37999725341797,13.539999961853027 C84.37999725341797,14.380000114440918 84.77999877929688,14.800000190734863 85.58000183105469,14.800000190734863 C85.58000183105469,14.800000190734863 87.08999633789062,14.800000190734863 87.08999633789062,14.800000190734863 C87.08999633789062,14.800000190734863 87.08999633789062,16.5 87.08999633789062,16.5 C87.08999633789062,16.5 85.37000274658203,16.5 85.37000274658203,16.5 C83.37999725341797,16.5 82.30000305175781,15.470000267028809 82.30000305175781,13.539999961853027 C82.30000305175781,13.539999961853027 82.30000305175781,7.840000152587891 82.30000305175781,7.840000152587891 C82.30000305175781,7.840000152587891 80.7300033569336,7.840000152587891 80.7300033569336,7.840000152587891 C80.7300033569336,7.840000152587891 80.7300033569336,6.159999847412109 80.7300033569336,6.159999847412109 C80.7300033569336,6.159999847412109 82.30000305175781,6.159999847412109 82.30000305175781,6.159999847412109 C82.30000305175781,6.159999847412109 82.30000305175781,3.819999933242798 82.30000305175781,3.819999933242798z M69.88999938964844,2.6600000858306885 C69.88999938964844,2.6600000858306885 71.94999694824219,2.6600000858306885 71.94999694824219,2.6600000858306885 C71.94999694824219,2.6600000858306885 71.94999694824219,14.100000381469727 71.94999694824219,14.100000381469727 C71.94999694824219,14.569999694824219 72.19999694824219,14.800000190734863 72.6500015258789,14.800000190734863 C72.6500015258789,14.800000190734863 73.48999786376953,14.800000190734863 73.48999786376953,14.800000190734863 C73.48999786376953,14.800000190734863 73.48999786376953,16.5 73.48999786376953,16.5 C73.48999786376953,16.5 72.20999908447266,16.5 72.20999908447266,16.5 C70.81999969482422,16.5 69.88999938964844,15.600000381469727 69.88999938964844,14.199999809265137 C69.88999938964844,14.199999809265137 69.88999938964844,2.6600000858306885 69.88999938964844,2.6600000858306885z M59.540000915527344,13.75 C59.540000915527344,14.510000228881836 60.189998626708984,15.140000343322754 61.560001373291016,15.140000343322754 C63.099998474121094,15.119999885559082 64.30999755859375,14.020000457763672 64.30999755859375,11.800000190734863 C64.30999755859375,11.800000190734863 64.30999755859375,11.65999984741211 64.30999755859375,11.65999984741211 C64.30999755859375,11.65999984741211 62.11000061035156,12.050000190734863 62.11000061035156,12.050000190734863 C60.68000030517578,12.300000190734863 59.540000915527344,12.449999809265137 59.540000915527344,13.75 C59.540000915527344,13.75 59.540000915527344,13.75 59.540000915527344,13.75z M57.560001373291016,9.270000457763672 C57.970001220703125,7.179999828338623 59.61000061035156,5.929999828338623 61.9900016784668,5.929999828338623 C64.79000091552734,5.929999828338623 66.33999633789062,7.489999771118164 66.33999633789062,10.319999694824219 C66.33999633789062,10.319999694824219 66.33999633789062,14.15999984741211 66.33999633789062,14.15999984741211 C66.33999633789062,14.6899995803833 66.56999969482422,14.880000114440918 66.9800033569336,14.880000114440918 C66.9800033569336,14.880000114440918 67.38999938964844,14.880000114440918 67.38999938964844,14.880000114440918 C67.38999938964844,14.880000114440918 67.38999938964844,16.5 67.38999938964844,16.5 C67.38999938964844,16.5 66.75,16.5 66.75,16.5 C65.80999755859375,16.520000457763672 64.55000305175781,16.360000610351562 64.44999694824219,14.899999618530273 C63.97999954223633,15.890000343322754 62.81999969482422,16.729999542236328 61.11000061035156,16.729999542236328 C59.02000045776367,16.729999542236328 57.38999938964844,15.619999885559082 57.38999938964844,13.789999961853027 C57.38999938964844,11.720000267028809 58.93000030517578,11.119999885559082 61.310001373291016,10.670000076293945 C61.310001373291016,10.670000076293945 64.2699966430664,10.09000015258789 64.2699966430664,10.09000015258789 C64.25,8.430000305175781 63.4900016784668,7.610000133514404 61.9900016784668,7.610000133514404 C60.779998779296875,7.610000133514404 59.97999954223633,8.229999542236328 59.709999084472656,9.399999618530273 C59.709999084472656,9.399999618530273 57.560001373291016,9.270000457763672 57.560001373291016,9.270000457763672z M46.290000915527344,6.159999847412109 C46.290000915527344,6.159999847412109 48.18000030517578,6.159999847412109 48.18000030517578,6.159999847412109 C48.18000030517578,6.159999847412109 48.2400016784668,7.900000095367432 48.2400016784668,7.900000095367432 C48.77000045776367,6.510000228881836 49.970001220703125,5.929999828338623 51.380001068115234,5.929999828338623 C53.70000076293945,5.929999828338623 54.88999938964844,7.590000152587891 54.88999938964844,9.850000381469727 C54.88999938964844,9.850000381469727 54.88999938964844,16.5 54.88999938964844,16.5 C54.88999938964844,16.5 52.81999969482422,16.5 52.81999969482422,16.5 C52.81999969482422,16.5 52.81999969482422,10.489999771118164 52.81999969482422,10.489999771118164 C52.81999969482422,8.65999984741211 52.2599983215332,7.670000076293945 50.81999969482422,7.670000076293945 C49.31999969482422,7.670000076293945 48.36000061035156,8.65999984741211 48.36000061035156,10.489999771118164 C48.36000061035156,10.489999771118164 48.36000061035156,16.5 48.36000061035156,16.5 C48.36000061035156,16.5 46.290000915527344,16.5 46.290000915527344,16.5 C46.290000915527344,16.5 46.290000915527344,6.159999847412109 46.290000915527344,6.159999847412109z M38.65999984741211,6.159999847412109 C38.65999984741211,6.159999847412109 40.54999923706055,6.159999847412109 40.54999923706055,6.159999847412109 C40.54999923706055,6.159999847412109 40.61000061035156,8.109999656677246 40.61000061035156,8.109999656677246 C40.97999954223633,6.789999961853027 41.77000045776367,6.159999847412109 43.09000015258789,6.159999847412109 C43.09000015258789,6.159999847412109 44.09000015258789,6.159999847412109 44.09000015258789,6.159999847412109 C44.09000015258789,6.159999847412109 44.09000015258789,7.860000133514404 44.09000015258789,7.860000133514404 C44.09000015258789,7.860000133514404 43.06999969482422,7.860000133514404 43.06999969482422,7.860000133514404 C41.45000076293945,7.860000133514404 40.72999954223633,8.760000228881836 40.72999954223633,10.470000267028809 C40.72999954223633,10.470000267028809 40.72999954223633,16.5 40.72999954223633,16.5 C40.72999954223633,16.5 38.65999984741211,16.5 38.65999984741211,16.5 C38.65999984741211,16.5 38.65999984741211,6.159999847412109 38.65999984741211,6.159999847412109z M28.68000030517578,10.380000114440918 C28.68000030517578,10.380000114440918 33.880001068115234,10.380000114440918 33.880001068115234,10.380000114440918 C33.650001525878906,8.40999984741211 32.560001373291016,7.690000057220459 31.389999389648438,7.690000057220459 C29.889999389648438,7.690000057220459 28.90999984741211,8.680000305175781 28.68000030517578,10.380000114440918 C28.68000030517578,10.380000114440918 28.68000030517578,10.380000114440918 28.68000030517578,10.380000114440918z M26.450000762939453,11.329999923706055 C26.450000762939453,8.050000190734863 28.389999389648438,5.929999828338623 31.389999389648438,5.929999828338623 C33.869998931884766,5.929999828338623 35.95000076293945,7.590000152587891 36.04999923706055,11.25 C36.04999923706055,11.25 36.06999969482422,11.920000076293945 36.06999969482422,11.920000076293945 C36.06999969482422,11.920000076293945 28.639999389648438,11.920000076293945 28.639999389648438,11.920000076293945 C28.780000686645508,13.850000381469727 29.770000457763672,14.979999542236328 31.389999389648438,14.979999542236328 C32.40999984741211,14.979999542236328 33.34000015258789,14.380000114440918 33.75,13.380000114440918 C33.75,13.380000114440918 35.90999984741211,13.539999961853027 35.90999984741211,13.539999961853027 C35.310001373291016,15.510000228881836 33.5,16.729999542236328 31.389999389648438,16.729999542236328 C28.389999389648438,16.729999542236328 26.450000762939453,14.609999656677246 26.450000762939453,11.329999923706055 C26.450000762939453,11.329999923706055 26.450000762939453,11.329999923706055 26.450000762939453,11.329999923706055z M19.989999771118164,3.819999933242798 C19.989999771118164,3.819999933242798 22.059999465942383,3.819999933242798 22.059999465942383,3.819999933242798 C22.059999465942383,3.819999933242798 22.059999465942383,6.159999847412109 22.059999465942383,6.159999847412109 C22.059999465942383,6.159999847412109 24.790000915527344,6.159999847412109 24.790000915527344,6.159999847412109 C24.790000915527344,6.159999847412109 24.790000915527344,7.840000152587891 24.790000915527344,7.840000152587891 C24.790000915527344,7.840000152587891 22.059999465942383,7.840000152587891 22.059999465942383,7.840000152587891 C22.059999465942383,7.840000152587891 22.059999465942383,13.539999961853027 22.059999465942383,13.539999961853027 C22.059999465942383,14.380000114440918 22.469999313354492,14.800000190734863 23.270000457763672,14.800000190734863 C23.270000457763672,14.800000190734863 24.770000457763672,14.800000190734863 24.770000457763672,14.800000190734863 C24.770000457763672,14.800000190734863 24.770000457763672,16.5 24.770000457763672,16.5 C24.770000457763672,16.5 23.049999237060547,16.5 23.049999237060547,16.5 C21.059999465942383,16.5 19.989999771118164,15.470000267028809 19.989999771118164,13.539999961853027 C19.989999771118164,13.539999961853027 19.989999771118164,7.840000152587891 19.989999771118164,7.840000152587891 C19.989999771118164,7.840000152587891 18.40999984741211,7.840000152587891 18.40999984741211,7.840000152587891 C18.40999984741211,7.840000152587891 18.40999984741211,6.159999847412109 18.40999984741211,6.159999847412109 C18.40999984741211,6.159999847412109 19.989999771118164,6.159999847412109 19.989999771118164,6.159999847412109 C19.989999771118164,6.159999847412109 19.989999771118164,3.819999933242798 19.989999771118164,3.819999933242798z M7.429999828338623,6.159999847412109 C7.429999828338623,6.159999847412109 9.319999694824219,6.159999847412109 9.319999694824219,6.159999847412109 C9.319999694824219,6.159999847412109 9.380000114440918,7.900000095367432 9.380000114440918,7.900000095367432 C9.90999984741211,6.510000228881836 11.119999885559082,5.929999828338623 12.520000457763672,5.929999828338623 C14.84000015258789,5.929999828338623 16.030000686645508,7.590000152587891 16.030000686645508,9.850000381469727 C16.030000686645508,9.850000381469727 16.030000686645508,16.5 16.030000686645508,16.5 C16.030000686645508,16.5 13.960000038146973,16.5 13.960000038146973,16.5 C13.960000038146973,16.5 13.960000038146973,10.489999771118164 13.960000038146973,10.489999771118164 C13.960000038146973,8.65999984741211 13.399999618530273,7.670000076293945 11.949999809265137,7.670000076293945 C10.449999809265137,7.670000076293945 9.489999771118164,8.65999984741211 9.489999771118164,10.489999771118164 C9.489999771118164,10.489999771118164 9.489999771118164,16.5 9.489999771118164,16.5 C9.489999771118164,16.5 7.429999828338623,16.5 7.429999828338623,16.5 C7.429999828338623,16.5 7.429999828338623,6.159999847412109 7.429999828338623,6.159999847412109z M2.049999952316284,2.6600000858306885 C2.049999952316284,2.6600000858306885 4.159999847412109,2.6600000858306885 4.159999847412109,2.6600000858306885 C4.159999847412109,2.6600000858306885 4.159999847412109,16.5 4.159999847412109,16.5 C4.159999847412109,16.5 2.049999952316284,16.5 2.049999952316284,16.5 C2.049999952316284,16.5 2.049999952316284,2.6600000858306885 2.049999952316284,2.6600000858306885z"
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
                          d=" M172,0 C172,0 0,0 0,0 C0,0 0,26 0,26 C0,26 172,26 172,26 C172,26 172,0 172,0z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,298,228)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity={0}
                    strokeMiterlimit={10}
                    stroke="rgb(4,6,24)"
                    strokeOpacity={1}
                    strokeWidth={16}
                    d=" M5,0 C7.759500026702881,0 10,2.240499973297119 10,5 C10,7.759500026702881 7.759500026702881,10 5,10 C2.240499973297119,10 0,7.759500026702881 0,5 C0,2.240499973297119 2.240499973297119,0 5,0z"
                  />
                  <path
                    fill="rgb(236,20,94)"
                    fillOpacity={1}
                    d=" M5,0 C7.759500026702881,0 10,2.240499973297119 10,5 C10,7.759500026702881 7.759500026702881,10 5,10 C2.240499973297119,10 0,7.759500026702881 0,5 C0,2.240499973297119 2.240499973297119,0 5,0z"
                  />
                </g>
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={0}
                    d=" M18,-8 C18,-8 -8,-8 -8,-8 C-8,-8 -8,18 -8,18 C-8,18 18,18 18,18 C18,18 18,-8 18,-8z"
                  />
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,298,334)"
                opacity={1}
                style={{ display: 'block' }}
              >
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fillOpacity={0}
                    strokeMiterlimit={10}
                    stroke="rgb(4,6,24)"
                    strokeOpacity={1}
                    strokeWidth={16}
                    d=" M5,0 C7.759500026702881,0 10,2.240499973297119 10,5 C10,7.759500026702881 7.759500026702881,10 5,10 C2.240499973297119,10 0,7.759500026702881 0,5 C0,2.240499973297119 2.240499973297119,0 5,0z"
                  />
                  <path
                    fill="rgb(236,20,94)"
                    fillOpacity={1}
                    d=" M5,0 C7.759500026702881,0 10,2.240499973297119 10,5 C10,7.759500026702881 7.759500026702881,10 5,10 C2.240499973297119,10 0,7.759500026702881 0,5 C0,2.240499973297119 2.240499973297119,0 5,0z"
                  />
                </g>
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(0,0,0)"
                    fillOpacity={0}
                    d=" M18,-8 C18,-8 -8,-8 -8,-8 C-8,-8 -8,18 -8,18 C-8,18 18,18 18,18 C18,18 18,-8 18,-8z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="home_funcionalities-block_child-content_wrapper">
          <div className="home_funcionalities-block_child-content">
            <div className="heading-style-h5">Custom Tool SDK</div>
            <p className="funcionalities-block_text">
              Easily create tailored integrations to <br />
              extend Arcade’s functionality.
            </p>
          </div>
          <a
            href="https://docs.arcade.dev/home/custom-tools"
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

export default Desccard3;
