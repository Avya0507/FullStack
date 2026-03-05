import { useState } from "react";
import ProductApp from "./ProductApp";
import LibraryApp from "./LibraryApp";
import PersonApp from "./PersonApp";

function App() {
  const [experiment, setExperiment] = useState<"product" | "library" | "person">("product");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#121826",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#8fa2ff",
        }}
      >
        React Experiments Dashboard
      </h1>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <button
          onClick={() => setExperiment("product")}
          style={buttonStyle}
        >
          Product
        </button>

        <button
          onClick={() => setExperiment("library")}
          style={buttonStyle}
        >
          Library
        </button>

        <button
          onClick={() => setExperiment("person")}
          style={buttonStyle}
        >
          Person
        </button>
      </div>

      {experiment === "product" && <ProductApp />}
      {experiment === "library" && <LibraryApp />}
      {experiment === "person" && <PersonApp />}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#1f2a40",
  color: "#c7d2fe",
  padding: "10px 20px",
  margin: "0 10px",
  border: "1px solid #2e3b55",
  cursor: "pointer",
};

export default App;
