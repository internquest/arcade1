import Image from 'next/image';
import React from 'react';

const Swipwecard = () => {
  return (
    <div className="teammember-component_wrapper">
      <div className="teammember-top_wrapper">
        <Image
          src="https://cdn.prod.website-files.com/6773fd00b9e3a74fd53afcf2/6791ebd4e84562ac0c836f0c_Alex%20Salazar%20(3).png"
          width={48}
          height={48}
          alt=""
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 25vw, (max-width: 991px) 16vw, (max-width: 1439px) 13vw, (max-width: 1919px) 9vw, 8vw"
          className="team_member-img"
        />
        <div className="teammember_content-top_wrapper">
          <div className="teammember-top_text-wrapper">
            <div>Alex Salazar</div>
            <div className="text-size-body4 text-color-white50">
              CEO + Co-founder
            </div>
          </div>
          <div className="teammembers_social-links_wrapper">
            <a
              href="https://github.com/TheMostlyGreat"
              target="_blank"
              className="teammembers_social-link w-inline-block"
            >
              <div className="icon-1x1-xsmall w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M11.0002 1.78809C16.0647 1.78809 20.1668 5.89017 20.1668 10.9548C20.1663 12.8754 19.5635 14.7475 18.4433 16.3077C17.3231 17.8678 15.7418 19.0373 13.922 19.6516C13.4637 19.7433 13.2918 19.4568 13.2918 19.2162C13.2918 18.9068 13.3033 17.9214 13.3033 16.6954C13.3033 15.836 13.0168 15.286 12.6845 14.9995C14.7241 14.7704 16.8668 13.9912 16.8668 10.4735C16.8668 9.46517 16.5116 8.65163 15.9272 8.00996C16.0189 7.78079 16.3397 6.84121 15.8356 5.58079C15.8356 5.58079 15.0679 5.32871 13.3147 6.52038C12.5814 6.31413 11.8022 6.211 11.0231 6.211C10.2439 6.211 9.46475 6.31413 8.73141 6.52038C6.97829 5.34017 6.21058 5.58079 6.21058 5.58079C5.70641 6.84121 6.02725 7.78079 6.11891 8.00996C5.53454 8.65163 5.17933 9.47663 5.17933 10.4735C5.17933 13.9798 7.31058 14.7704 9.35016 14.9995C9.08662 15.2287 8.846 15.6298 8.76579 16.2256C8.2387 16.4662 6.921 16.8558 6.096 15.4693C5.92412 15.1943 5.4085 14.5183 4.68662 14.5298C3.91891 14.5412 4.37725 14.9652 4.69808 15.137C5.08766 15.3548 5.53454 16.1683 5.63766 16.4318C5.821 16.9475 6.41683 17.9329 8.71995 17.5089C8.71995 18.2766 8.73141 18.9985 8.73141 19.2162C8.73141 19.4568 8.55954 19.7318 8.1012 19.6516C6.27548 19.0439 4.68746 17.8767 3.56243 16.3157C2.4374 14.7546 1.83249 12.879 1.8335 10.9548C1.8335 5.89017 5.93558 1.78809 11.0002 1.78809Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/alexsalazar/"
              target="_blank"
              className="teammembers_social-link w-inline-block"
            >
              <div className="icon-1x1-xsmall w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M18.0125 2.75H3.9875C3.65929 2.75 3.34453 2.88038 3.11246 3.11246C2.88038 3.34453 2.75 3.65929 2.75 3.9875V18.0125C2.75 18.3407 2.88038 18.6555 3.11246 18.8875C3.34453 19.1196 3.65929 19.25 3.9875 19.25H18.0125C18.3407 19.25 18.6555 19.1196 18.8875 18.8875C19.1196 18.6555 19.25 18.3407 19.25 18.0125V3.9875C19.25 3.65929 19.1196 3.34453 18.8875 3.11246C18.6555 2.88038 18.3407 2.75 18.0125 2.75ZM7.7 16.775H5.225V9.35H7.7V16.775ZM6.4625 7.90625C6.17885 7.89814 5.90388 7.80663 5.67194 7.64314C5.44001 7.47965 5.26139 7.25144 5.15842 6.98701C5.05544 6.72259 5.03267 6.43369 5.09295 6.1564C5.15323 5.87911 5.29388 5.62573 5.49734 5.42793C5.7008 5.23012 5.95804 5.09666 6.23692 5.04421C6.51579 4.99177 6.80394 5.02267 7.06536 5.13305C7.32677 5.24343 7.54986 5.4284 7.70676 5.66485C7.86365 5.9013 7.94738 6.17873 7.9475 6.4625C7.94098 6.85054 7.78113 7.22022 7.50287 7.49075C7.22461 7.76128 6.85057 7.91067 6.4625 7.90625ZM16.775 16.775H14.3V12.8645C14.3 11.693 13.805 11.2723 13.1615 11.2723C12.9728 11.2848 12.7885 11.3345 12.6191 11.4185C12.4497 11.5025 12.2986 11.6192 12.1744 11.7618C12.0502 11.9044 11.9554 12.0701 11.8954 12.2494C11.8355 12.4287 11.8115 12.6181 11.825 12.8067C11.8209 12.8451 11.8209 12.8839 11.825 12.9222V16.775H9.35V9.35H11.7425V10.4225C11.9838 10.0554 12.3154 9.75637 12.7054 9.55413C13.0955 9.3519 13.5309 9.2532 13.97 9.2675C15.2487 9.2675 16.742 9.977 16.742 12.287L16.775 16.775Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://x.com/TheMostlyGreat"
              target="_blank"
              className="teammembers_social-link w-inline-block"
            >
              <div className="icon-1x1-xsmall w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M15.953 3.20825H18.5948L12.8233 9.80919L19.613 18.7916H14.2967L10.1328 13.3438L5.36834 18.7916H2.72497L8.89816 11.7311L2.38477 3.20825H7.83602L11.5998 8.18773L15.953 3.20825ZM15.0258 17.2093H16.4897L7.04062 4.70745H5.46977L15.0258 17.2093Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="teammember_content-wrapper">
        <div className="teammember_label-wrapper">
          <div className="text-style-link text-color-white50">asalazar</div>
          <div className="text-style-link text-color-white50">/</div>
          <div className="text-style-link">README.md</div>
        </div>
        <div className="text-style-4lines w-richtext">
          <p>
            Alex is a seasoned Founder/CEO and auth industry veteran. As VP of
            Product Management at Okta, Alex led their developer products, which
            represented 25% of total bookings, and managed their network of over
            5,000 auth integrations. Later, as GM, he launched an auth-centric
            proxy server product that reached $9M in revenue within its first
            year.
          </p>
          <p>‍</p>
          <p>
            Previously, as co-founder and CEO of Stormpath (acquired by Okta),
            he built the first Authentication API for developers, creating a new
            product category. The platform attracted 2,000 new developer signups
            monthly with a 50% activation rate and 30% 30-day retention.
          </p>
          <p>‍</p>
          <p>
            Alex has a Georgia Tech CS degree and a Stanford MBA, with
            experience as a software engineer, enterprise sales rep, and product
            leader. He has a proven track record of turning innovative ideas
            into successful products.
          </p>
        </div>
        <a
          id="read_more-modal"
          href="#"
          className="teammember_modal-link w-inline-block"
        >
          <div className="link_more-red">Read More</div>
        </a>
      </div>
      <img
        src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6777f330420be9153d83d4bd_image%20(1).svg"
        loading="lazy"
        alt=""
        className="teammembers_bg hide"
      />
    </div>
  );
};

export default Swipwecard;
