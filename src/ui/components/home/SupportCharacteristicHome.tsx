import Image from "next/image";
import Publishing from "@/../public/assets/icons/publishing.svg";
import Analytics from "@/../public/assets/icons/analytics.svg";
import Engagement from "@/../public/assets/icons/engagement.svg";

export const SupportCharacteristicHome = () => {
  return (
    <div className="supportCharacteristicHome">
      <ul style={{ listStyleType: "none" }}>
        <li>
          <div className="image">
            <Image src={Publishing} alt="" />
          </div>

          <div className="text">
            <p>Publishing</p>
            <p>
              Plan, collaborate, and publishing your contetn that drivees
              meaningful engagement and growth for your barnd
            </p>
          </div>
        </li>
        <li>
          <div className="image">
            <Image src={Analytics} alt="" />
          </div>
          <div className="text">
            <p>Analytics</p>
            <p>Analyze your performance and create goegeous report</p>
          </div>
        </li>
        <li>
          <div className="image">
            <Image src={Engagement} alt="" />
          </div>
          <div className="text">
            <p>Engagement</p>
            <p>Quiuckly navigate you anda engage with your adience</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
