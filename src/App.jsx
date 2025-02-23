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
  // );"name": "Redmi Note 11",

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

  const { data, isPending, error } = useFetch(url, "POST", newProduct);

  return (
    <div>
      <form className="form-input">
        <label>
          Name
          <input
            onChange={(e) => setProductName((prev) => (prev = e.target.value))}
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          Describtion
          <input
            onChange={(e) => setProductDes((prev) => (prev = e.target.value))}
            type="text"
            placeholder="Text"
          />
        </label>
        <label>
          Price
          <input
            onChange={(e) => setProductPrice((prev) => (prev = e.target.value))}
            type="number"
            placeholder="Price"
          />
        </label>
        <label>
          Brand
          <input
            onChange={(e) => setProductBrand((prev) => (prev = e.target.value))}
            type="text"
            placeholder="Brand"
          />
        </label>
        <button onClick={(e) => e.preventDefault()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
