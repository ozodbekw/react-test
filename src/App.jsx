import { useState } from "react";
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
  const [productDes, setProductDes] = useState(null);
  const [productBrand, setProductBrand] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productName, setProductName] = useState(null);

  const newProduct = {
    title: productName,
    description: productDes,
    price: productPrice,
    brand: productBrand,
  };

  const { data, isPending, error } = useFetch(url, method, newProduct);

  return (
    <>
      <div>
        <form className="form-input">
          <label>
            Name
            <input
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </label>
          <label>
            Describtion
            <input
              onChange={(e) => setProductDes(e.target.value)}
              type="text"
              placeholder="Text"
            />
          </label>
          <label>
            Price
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="Price"
            />
          </label>
          <label>
            Brand
            <input
              onChange={(e) => setProductBrand(e.target.value)}
              type="text"
              placeholder="Brand"
            />
          </label>
          <button onClick={(e) => e.preventDefault()}>Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMethod((prev) => (prev === "GET" ? "POST" : "GET"));
              console.log(method);
            }}
          >
            click To Post
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
