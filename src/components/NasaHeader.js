import React from "react";

const NasaHeader = () => {
  return (
    <div className="nasaHeader">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
      <a href="#home"><li>Home</li></a>
      <a href="#about"><li>About</li></a>
      <a href="#Info"><li>Info</li></a>
      <a href="#Contact"><li>Contact</li></a>
    </ul>
  </div>
</nav>
    </div>
  );
};
export default NasaHeader;
