import React from "react";
import { CharacteristicDataHome } from "../../components/home/CharacteristicDataHome";
import { CharacteristicInformationHome } from "../../components/home/CharacteristicInformationHome";

export const CharacteristicHome = () => {
  return (
    <div className="characteristicHome">
      <CharacteristicInformationHome />
      <CharacteristicDataHome />
    </div>
  );
};
