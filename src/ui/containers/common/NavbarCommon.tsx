import React from "react";

export const NavbarCommon = () => {
  return (
    <div className="navbarCommon">
      <div className="navbarCommon_left">
        <h2>Bicass</h2>
      </div>
      <div className="navbarCommon_center">
        <ul style={{ listStyleType: "none" }}>
          <li>Home</li>
          <li>Product</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbarCommon_right">
        <button className="navbarCommon_right_button1">Login</button>
        <button className="navbarCommon_right_button2">Sign Up</button>
      </div>
    </div>
  );
};
