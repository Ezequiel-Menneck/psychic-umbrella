import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="main">
        <img
          src="src/assets/menneck-picture.jpeg"
          alt=""
          className="menneck-picture"
        />
        <h2 className="store-name">Menneck Store</h2>
      </div>
    </header>
  );
};

export default Header;
