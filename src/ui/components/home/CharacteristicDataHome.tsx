import Image from "next/image";
import Collboration from "@/../public/assets/images/collboration.svg";
import CloudStorage from "@/../public/assets/images/cloudStorage.svg";
import DailyAnalytics from "@/../public/assets/images/dailyAnalytics.svg";

export const CharacteristicDataHome = () => {
  const datas = [
    {
      img: Collboration,
      title: "Collboration Teams",
      text: "Here you can handle projects together with team virtually",
    },
    {
      img: CloudStorage,
      title: "Cloud Storage",
      text: "No nedd to worry about storage because we provide storage up to 2TB",
    },
    {
      img: DailyAnalytics,
      title: "Daily Analytics",
      text: "We always provide useful informatin to make it easier for you every day",
    },
  ];

  return (
    <div className="characteristicDataHome">
      {datas.map((data, index) => {
        return (
          <ul key={index}>
            <li>
              <Image src={data.img} alt="" />
              <p>{data.title}</p>
              <p>{data.text}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
