import React from "react";
import { ProductivityOneHome } from "../../components/home/ProductivityOneHome";
import { ProductivityTwoHome } from "../../components/home/ProductivityTwoHome";

export const ProductivityHome = () => {
  return (
    <div className="productivityHome">
      <ProductivityOneHome />
      <ProductivityTwoHome />
    </div>
  );
};
