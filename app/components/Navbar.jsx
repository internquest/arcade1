import React from 'react';

const Navbar = () => {
  return (
    <div
      data-animation="default"
      className="navbar1_component w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="65962f8f-cc4d-e629-5f0b-6cc444749075"
      role="banner"
      data-duration={400}
      data-doc-height={1}
      style={{
        paddingRight: '5%',
        paddingLeft: '5%',
        backgroundColor: 'rgba(18, 23, 50, 0)',
        margin: '0px auto',
        width: '100%',
      }}
    >
      <div
        data-w-id="d776bafb-619f-2b91-e51c-7aeb00e76a69"
        className="navbar_mobile-bg"
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
          <div className="menu-icon1">
            <div className="menu-icon1_line-top" />
            <div className="menu-icon1_line-middle">
              <div className="menu-icon1_line-middle-inner" />
            </div>
            <div className="menu-icon1_line-bottom" />
          </div>
        </div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
    </div>
  );
};

export default Navbar;
