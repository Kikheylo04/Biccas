import React from "react";
import Image from "next/image";
import Line from "@/../public/assets/images/line.svg";
import Play from "@/../public/assets/icons/play.svg";

export const ProductivityOneHome = () => {
  return (
    <div className="productivityOneHome">
      <div className="productivityOneHome_information">
        <h2>
          We’re here to <br />
          Increase your <br />
          Productivity
        </h2>
        <Image src={Line} alt="" />
        <p>
          Lets make your work more organize and easily using <br /> the Taskio
          Dashboard with many of the latest <br /> featuresin managing work
          every day.
        </p>
      </div>

      <div className="productivityOneHome_button">
        <button className="productivityOneHome_button_one">
          Try free trial
        </button>
        <button className="productivityOneHome_button_two">
          <Image src={Play} alt="" />
          <p>View Demo</p>
        </button>
      </div>
    </div>
  );
};
