import React from "react";
import { SupportInformationHome } from "../../components/home/SupportInformationHome";
import { SupportCharacteristicHome } from "../../components/home/SupportCharacteristicHome";

export const SupportHome = () => {
  return (
    <div className="supportHome">
      <SupportInformationHome />
      <SupportCharacteristicHome />
    </div>
  );
};
