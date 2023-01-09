import React from "react";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <div>
      ProductDetail
      <p>{params.productId}</p>
    </div>
  );
};

export const productDetailPath = "/product-detail";
export default ProductDetail;
