import React from "react";
import { useParams } from "react-router-dom";

// 상세페이지
function ProductScreen() {
  const parmas = useParams();
  // 클릭한 상품의 slug를 가져와 할당. http://localhost:3000/product/{slug}
  const { slug } = parmas;
  console.log(parmas);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
