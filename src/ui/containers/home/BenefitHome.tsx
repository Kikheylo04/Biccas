import { BenefitDataHome } from "@/ui/components/home/BenefitDataHome";
import { BenefitListHome } from "@/ui/components/home/BenefitListHome";
import React from "react";

export const BenefitHome = () => {
  return (
    <div className="benefitHome">
      <BenefitListHome />
      <BenefitDataHome />
    </div>
  );
};
