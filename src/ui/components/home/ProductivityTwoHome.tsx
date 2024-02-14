import React from "react";
import Image from "next/image";
import Man from "@/../public/assets/images/man.svg";
import Ready from "@/../public/assets/icons/ready.svg";
import Statistics from "@/../public/assets/icons/statistics.svg";
import Database from "@/../public/assets/icons/dataBase.svg";
import Message from "@/../public/assets/icons/message.svg";

export const ProductivityTwoHome = () => {
  return (
    <div className="productivityTwoHome">
      <Image src={Man} alt="" />
      <div className="productivityTwoHome_amount">
        <div className="productivityTwoHome_amount_text">
          <p>Enter amount</p>
          <p>$450.00</p>
        </div>
        <div className="productivityTwoHome_amount_button">
          <button>Send</button>
        </div>
      </div>
      <div className="productivityTwoHome_ready">
        <Image src={Ready} alt="" />
      </div>
      <div className="productivityTwoHome_income">
        <div className="productivityTwoHome_income_text">
          <p>Total Income</p>
          <p>$245.00</p>
        </div>
        <div className="productivityTwoHome_income_statistic">
          <Image src={Statistics} alt="" />
        </div>
      </div>
      <div className="productivityTwoHome_database">
        <Image src={Database} alt="" />
      </div>
      <div className="productivityTwoHome_card">
        <div className="productivityTwoHome_card_backgroundCardCircle1"></div>
        <div className="productivityTwoHome_card_backgroundCardCircle2"></div>
        <div className="productivityTwoHome_card_circle">
          <div className="circle productivityTwoHome_card_circle_circle1"></div>
          <div className="circle productivityTwoHome_card_circle_circle2"></div>
        </div>
        <div className="productivityTwoHome_card_creaditcard">
          <p>Creadit Crad</p>
          <div className="productivityTwoHome_card_creaditcard_circle">
            <div className="productivityTwoHome_card_creaditcard_circle_circle1"></div>
            <div className="productivityTwoHome_card_creaditcard_circle_circle2"></div>
            <div className="productivityTwoHome_card_creaditcard_circle_circle3"></div>
            <div className="productivityTwoHome_card_creaditcard_circle_circle4"></div>
            <p>1234</p>
          </div>
        </div>
        <div className="productivityTwoHome_card_date">
          <div className="productivityTwoHome_card_date_rectangle"></div>
          <div className="productivityTwoHome_card_date_text">
            <p>09/25</p>
          </div>
        </div>
      </div>
      <div className="productivityTwoHome_message">
        <Image src={Message} alt="" />
      </div>
    </div>
  );
};
