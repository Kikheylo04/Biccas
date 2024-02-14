import Image from "next/image";
import RightArrow from "@/../public/assets/icons/rightArrow.svg";

export const FooterProveCommon = () => {
  return (
    <div className="footerProveCommon">
      <h2>Biccas</h2>
      <p>Get started noew try our product</p>
      <input type="email" placeholder="Enter your email here" />
      <button>
        <Image src={RightArrow} alt="" />
      </button>
    </div>
  );
};
