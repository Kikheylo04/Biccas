import Image from "next/image";
import React from "react";
import FiveStars from "@/../public/assets/images/fiveStars.svg";
import FourStars from "@/../public/assets/images/fourStars.svg";

export const SupportInformationHome = () => {
  return (
    <div className="supportInformationHome">
      <div className="supportInformationHome_text">
        <h2>How we support our pratner all over the world</h2>
        <p>
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>
      </div>
      <div className="supportInformationHome_quality">
        <ul>
          <li>
            <Image src={FiveStars} alt="" />
            <p>
              4.9<span> / 5 rating</span>
            </p>
            <p>databricks</p>
          </li>
          <li>
            <Image src={FourStars} alt="" />
            <p>
              4.8 <span>/ 5 rating</span>
            </p>
            <p>Chainalysis</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
