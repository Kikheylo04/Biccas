import Image from "next/image";
import EuroBarrel from "@/../public/assets/images/euroBarrel.svg";

export const RequestDemoCommon = () => {
  return (
    <div className="requestDemoCommon">
      <div className="requestDemoCommon_title">
        <Image src={EuroBarrel} alt="" />
        <h2>Get Started</h2>
      </div>
      <div className="requestDemoCommon_form">
        <p>Email</p>
        <input type="email" placeholder="Enter your email" />
        <p>Message</p>
        <textarea
          name="message"
          id="message"
          placeholder="What are you say"
        ></textarea>
        <button type="submit">Request Demo</button>
        <p>
          <span>or</span> Start Free Trial
        </p>
      </div>
    </div>
  );
};
