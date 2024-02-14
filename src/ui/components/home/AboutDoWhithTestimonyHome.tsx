import React from "react";
import Image from "next/image";
import QuotationMarks from "@/../public/assets/icons/quotationMarks..svg";
import Andrea from "@/../public/assets/images/andrea.svg";
import Piacquadio from "@/../public/assets/images/piacquadio.svg";
import Italo from "@/../public/assets/images/italo.svg";
import Stefan from "@/../public/assets/images/stefan.svg";
import Start from "@/../public/assets/icons/start.svg";
export const AboutDoWhithTestimonyHome = () => {
  return (
    <div className="aboutDoWhithTestimonyHome">
      <div className="aboutDoWhithTestimonyHome_text">
        <h2>People are Saying About DoWhith</h2>
        <p>
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </p>
      </div>
      <div className="aboutDoWhithTestimonyHome_comment">
        <Image src={QuotationMarks} alt="" />
        <p>
          I am very helped by this E-wallet application , my days are very easy
          to use this application and its very helpful in my life , even I can
          pay a short time 😍
        </p>
        <p>_ Aria Zinanrio</p>
      </div>
      <div className="aboutDoWhithTestimonyHome_people">
        <Image src={Andrea} alt="" />
        <Image src={Piacquadio} alt="" />
        <Image src={Italo} alt="" />
        <Image src={Stefan} alt="" />
        <Image src={Start} alt="" />
      </div>
    </div>
  );
};
