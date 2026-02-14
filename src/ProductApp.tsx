import ProductCard from "./ProductCard";

function ProductApp() {
  return (
    <div style={{ backgroundColor: "#172033", padding: "30px", minHeight: "70vh" }}>
      <h2 style={{ color: "#7aa2ff" }}>Product Listing</h2>

      <div style={{ display: "flex", gap: "25px", marginTop: "20px" }}>
        <ProductCard
          name="Wireless Mouse"
          price={499}
          image="https://via.placeholder.com/200"
          inStock={true}
        />
        <ProductCard
          name="Mechanical Keyboard"
          price={1999}
          image="https://via.placeholder.com/200"
          inStock={true}
        />
        <ProductCard
          name="Headphones"
          price={999}
          image="https://via.placeholder.com/200"
          inStock={false}
        />
      </div>
    </div>
  );
}

export default ProductApp;
