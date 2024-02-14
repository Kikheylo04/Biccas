import Image from "next/image";
import Laptop from "@/../public/assets/images/laptop.svg";
import Amanda from "@/../public/assets/images/amanda.svg";
import Chat from "@/../public/assets/icons/chat.svg";
import Gallery from "@/../public/assets/icons/gallery.svg";
import Successful from "@/../public/assets/icons/successful.svg";
import Statistics from "@/../public/assets/icons/statistics.svg";

export const BenefitDataHome = () => {
  return (
    <div className="benefitDataHome">
      <div className="benefitDataHome_laptop">
        <Image src={Laptop} alt="" />
      </div>
      <div className="benefitDataHome_recommendation">
        <div className="benefitDataHome_recommendation_imageAmanda">
          <Image src={Amanda} alt="" />
        </div>
        <div className="benefitDataHome_recommendation_text">
          <p>Amanda young</p>
          <p>Expert Saving</p>
        </div>
        <div className="benefitDataHome_recommendation_chat">
          <Image src={Chat} alt="" />
        </div>
      </div>
      <div className="benefitDataHome_gallery">
        <Image src={Gallery} alt="" />
      </div>
      <div className="benefitDataHome_transferSuccessfull">
        <Image src={Successful} alt="" />
        <p>Money Transfer Succesfull</p>
      </div>
      <div className="benefitDataHome_income">
        <div className="benefitDataHome_income_text">
          <p>Total Income</p>
          <p>$245.00</p>
        </div>
        <div className="benefitDataHome_income_statistc">
          <Image src={Statistics} alt="" />
        </div>
      </div>
    </div>
  );
};
