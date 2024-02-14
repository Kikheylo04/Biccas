import React from "react";

export const PlanProCommon = () => {
  return (
    <div className="planProCommon">
      <div className="planProCommon_circle"></div>
      <div className="planProCommon_price">
        <h2>Pro</h2>
        <p>Experiment the power of infinite possibilities</p>
        <p>$</p>
        <p>8</p>
        <button>Save $50 a year</button>
      </div>
      <div className="planProCommon_list">
        <ul>
          <li>4 Users</li>
          <li>All apps</li>
          <li>Unlimited editable exports</li>
          <li>Folders and collaboration</li>
          <li>All incoming apps</li>
        </ul>
        <button>Go to pro</button>
      </div>
    </div>
  );
};
