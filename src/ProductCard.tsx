type ProductProps = {
  name: string;
  price: number;
  image: string;
  inStock: boolean;
};

function ProductCard({ name, price, image, inStock }: ProductProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        width: "220px",
        border: "1px solid #2e3b55",
      }}
    >
      <img src={image} alt={name} width="100%" />

      <h3 style={{ color: "#a5b4fc", marginTop: "10px" }}>{name}</h3>

      <p style={{ color: "#94a3b8" }}>Price: ₹{price}</p>

      <p style={{ color: inStock ? "#4ade80" : "#f87171" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
