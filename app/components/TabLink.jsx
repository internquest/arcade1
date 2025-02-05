import React from 'react';

const TabLink = ({ tab, setTab, index, tabData }) => {
  const handleclick = (e) => {
    e.preventDefault();
    setTab(index + 1);
  };
  //   console.log(tabData);

  return (
    <a
      data-w-tab={tabData.label}
      onClick={handleclick}
      className={`code_tab-link w-inline-block w-tab-link ${
        index + 1 === tab ? 'w--current' : ''
      }`}
      href={tabData.href}
      role="tab"
      aria-controls={tabData.ariaControls}
      aria-selected={tabData.isActive}
    >
      <img
        loading="lazy"
        src={tabData.imageSrc}
        alt={`${tabData.label} language icon`}
        className="code_technology-icon"
      />
      <div
        className="code_technology-label"
        dangerouslySetInnerHTML={{ __html: tabData.label }}
      ></div>
    </a>
  );
};

export default TabLink;
