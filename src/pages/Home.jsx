import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";

function Home() {
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const { data, isPending, error } = useFetch(url);

  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold my-10 mx-auto">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 text-left my-10">
        {data &&
          data.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
      {isPending && (
        <span className="loading loading-spinner loading-xl fixed top-[50%] left-[50%]"></span>
      )}
    </section>
  );
}

export default Home;
