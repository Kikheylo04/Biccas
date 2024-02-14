import React from "react";
import { PlanContactCommon } from "../../components/common/PlanContactCommon";
import { PlanFreeCommon } from "../../components/common/PlanFreeCommon";
import { PlanProCommon } from "../../components/common/PlanProCommon";
import { PlanBusinessCommon } from "../../components/common/PlanBusinessCommon";

export const PlanCommon = () => {
  return (
    <div className="planCommon">
      <PlanContactCommon />
      <div className="planCommon_plans">
        <PlanFreeCommon />
        <PlanProCommon />
        <PlanBusinessCommon />
      </div>
    </div>
  );
};
