import React from "react";
import { FooterProveCommon } from "../../components/common/FooterProveCommon";
import { FooterFunctionCommon } from "../../components/common/FooterFunctionCommon";
import { FooterSecurityCommon } from "../../components/common/FooterSecurityCommon";

export const FooterCommon = () => {
  return (
    <div className="footerCommon">
      <div className="footerCommon_information">
        <FooterProveCommon />
        <FooterFunctionCommon />
      </div>
      <div className="footerCommon_security">
        <FooterSecurityCommon />
      </div>
    </div>
  );
};
