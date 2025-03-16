import Dessert from "./Dessert";

function DessertList({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No desserts available.</p>;
  }

  return (
    <div className="dessert-wrapper">
      {data.map((product) => {
        return <Dessert key={product.id} product={product} />;
      })}
    </div>
  );
}

export default DessertList;
