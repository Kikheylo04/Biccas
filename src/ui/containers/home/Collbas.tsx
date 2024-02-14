import Image from "next/image";
import Unsplash from "@/../public/assets/icons/unsplash.svg";
import Notion from "@/../public/assets/icons/notion.svg";
import Intercom from "@/../public/assets/icons/intercom.svg";
import Descript from "@/../public/assets/icons/descript.svg";
import Grammarly from "@/../public/assets/icons/grammarly.svg";

export const Collab = () => {
  return (
    <div className="collab">
      <h2>More than 25,000 teams use Collabs</h2>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Image src={Unsplash} alt="" />
          <span>Unsplash</span>
        </li>
        <li>
          <Image src={Notion} alt="" />
          <span>Notion</span>
        </li>
        <li>
          <Image src={Intercom} alt="" />
          <span>INTERCOM</span>
        </li>
        <li>
          <Image src={Descript} alt="" />
          <span>descript</span>
        </li>
        <li>
          <Image src={Grammarly} alt="" />
          <span>grammarly</span>
        </li>
      </ul>
    </div>
  );
};
