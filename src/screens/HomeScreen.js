import React from "react";
import { Link } from "react-router-dom";
import data from "../Data";

function HomeScreen() {
  return (
    <div>
      <h1>인기 제품</h1>

      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </Link>
              <button>장바구니 추가</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
