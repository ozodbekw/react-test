import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  // Hohlaganingiz!
  const [url, setUrl] = useState(
    "https://json-api.uz/api/project/test-loyiha/products"
  );
  // const [url, setUrl] = useState(
  //   "https://json-api.uz/api/project/test-loyiha/products"
  // );
  const [method, setMethod] = useState("GET");
  const [productDes, setProductDes] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [newProduct, setNewProduct] = useState(null);

  const { data, isPending, error } = useFetch(url, method, newProduct);

  useEffect(() => {
    console.log("Current method:", method);
  }, [method]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct({
      title: productName,
      description: productDes,
      price: productPrice,
      brand: productBrand,
    });
    setMethod("POST");
  };

  return (
    <>
      <div>
        <form className="form-input">
          <label>
            Name
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </label>
          <label>
            Describtion
            <input
              value={productDes}
              onChange={(e) => setProductDes(e.target.value)}
              type="text"
              placeholder="Text"
            />
          </label>
          <label>
            Price
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="Price"
            />
          </label>
          <label>
            Brand
            <input
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              type="text"
              placeholder="Brand"
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMethod((prev) => (prev === "GET" ? "POST" : "GET"));
            }}
          >
            Click to Toggle Method
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
