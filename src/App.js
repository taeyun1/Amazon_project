import data from "./Data";

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazon</a>
      </header>

      <main>
        <h1>인기 제품</h1>

        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                </a>
                <button>장바구니 추가</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
