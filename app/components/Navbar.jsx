'use client';
import { useWindowSize } from '@uidotdev/usehooks';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
// import { windowsize } from '../utility/windowsize';

const Navbar = () => {
  const firstrender = useRef(null);
  const [scroval, setScroval] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // console.log(latest);
    setScroval(latest);
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function animateTransform(element, startValue, endValue, duration) {
    const startTime = performance.now();

    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1

      const currentValue = startValue + (endValue - startValue) * progress;

      element.style.transform = `translateY(${currentValue}px)`; // Example: translateX

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
  const handlenavpar = async () => {
    const navbar = document.getElementById('nav');
    const navpar = navbar.parentElement;
    if (showOverlay) {
      navpar.style.display = 'block';
      // await sleep(100);
      navpar.style.height = '5565px';
      animateTransform(navbar, -570, 0, 400);
    } else {
      animateTransform(navbar, 0, -570, 400);
      await sleep(400);
      navpar.style.display = 'none';
      navpar.style.height = '';
    }
  };
  useEffect(() => {
    if (firstrender.current) {
      handlenavpar();
    }
    firstrender.current = true;
  }, [showOverlay]);

  return (
    <motion.div
      data-animation="default"
      className={`navbar1_component w-nav transition-all ${
        showOverlay ? 'duration-200' : 'delay-300 duration-300'
      } `}
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="65962f8f-cc4d-e629-5f0b-6cc444749075"
      role="banner"
      data-duration={400}
      data-doc-height={1}
      style={
        useWindowSize().width > 991
          ? scroval > 200
            ? {
                paddingRight: '1rem',
                paddingLeft: '1.5rem',
                backgroundColor: 'rgba(18, 23, 50)',
                margin: '0px auto',
                width: '50rem',
              }
            : {
                paddingRight: '5%',
                paddingLeft: '5%',
                backgroundColor: 'rgba(18, 23, 50, 0)',
                margin: '0px auto',
                width: '100%',
              }
          : showOverlay
          ? {
              backgroundColor: 'rgba(4,7,25)',
            }
          : {
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }
      }
    >
      <div
        data-w-id="d776bafb-619f-2b91-e51c-7aeb00e76a69"
        className="navbar_mobile-bg duration-300"
        style={scroval > 200 ? { opacity: 1 } : { opacity: 0 }}
      />
      <div className="navbar1_container">
        <a
          href="/"
          aria-current="page"
          className="navbar_logo-link w-nav-brand w--current"
          aria-label="home"
        >
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/67892146149a621e9cf98129_ARCADE.svg"
            alt=""
            className="navbar_logo"
          />
        </a>
        <nav
          role="navigation"
          className="navbar_menu is-page-height-tablet w-nav-menu"
        >
          <div className="navbar_menu-links">
            <a href="/#whatisarcade" className="navbar_link w-nav-link">
              Product
            </a>
            <a href="/#team" className="navbar_link w-nav-link">
              Team
            </a>
            <a href="/pricing" className="navbar_link w-nav-link">
              Pricing
            </a>
            <a
              href="https://blog.arcade-ai.com/"
              target="_blank"
              className="navbar_link w-nav-link"
            >
              Blog
            </a>
            <a
              href="https://docs.arcade.dev/home"
              target="_blank"
              className="navbar_link w-nav-link"
            >
              Docs
            </a>
            <a
              href="https://docs.arcade.dev/toolkits"
              target="_blank"
              className="navbar_link w-nav-link"
            >
              Integrations
            </a>
          </div>
          <div className="navbar_menu-buttons">
            <a
              href="https://account.arcade.dev/registerOrRedirect?return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard&new_user_return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard%2Fwelcome"
              className="button is-small is-navbar w-button"
            >
              Sign up
            </a>
          </div>
        </nav>
        <div
          className="navbar1_menu-button w-nav-button"
          style={{ WebkitUserSelect: 'text' }}
          aria-label="menu"
          role="button"
          tabIndex={0}
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div
            className="menu-icon1"
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <div
              className={`menu-icon1_line-top ${
                showOverlay && 'delay-200'
              }  duration-300`}
              style={
                showOverlay
                  ? {
                      transform:
                        'translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }
                  : {}
              }
            />
            <div
              className={`menu-icon1_line-middle transition-all ${
                !showOverlay && 'delay-200'
              }`}
              style={showOverlay ? { width: '0px', height: '2px' } : {}}
            >
              <div className="menu-icon1_line-middle-inner" />
            </div>
            <div
              className={`menu-icon1_line-bottom ${
                showOverlay && 'delay-200'
              } duration-300`}
              style={
                showOverlay
                  ? {
                      transform:
                        'translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }
                  : {}
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`w-nav-overlay    `}
        data-wf-ignore=""
        id="w-nav-overlay-0"
      >
        {/* {showOverlay && ( */}
        <nav
          id="nav"
          role="navigation"
          className="navbar_menu is-page-height-tablet w-nav-menu"
          data-nav-menu-open=""
        >
          <div className="navbar_menu-links">
            <a
              href="/#whatisarcade"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Product
            </a>
            <a
              href="/#team"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Team
            </a>
            <a
              href="/pricing"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Pricing
            </a>
            <a
              href="https://blog.arcade-ai.com/"
              target="_blank"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Blog
            </a>
            <a
              href="https://docs.arcade.dev/home"
              target="_blank"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Docs
            </a>
            <a
              href="https://docs.arcade.dev/toolkits"
              target="_blank"
              className="navbar_link w-nav-link w--nav-link-open"
            >
              Integrations
            </a>
          </div>
          <div className="navbar_menu-buttons">
            <a
              href="https://account.arcade.dev/registerOrRedirect?return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard&new_user_return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard%2Fwelcome"
              className="button is-small is-navbar w-button"
            >
              Sign up
            </a>
          </div>
        </nav>
        {/* )} */}
      </div>
    </motion.div>
  );
};

export default Navbar;
