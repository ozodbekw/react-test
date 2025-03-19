import "./App.css";
import { DessertList, YourCard } from "./components";
import { useSelector } from "react-redux";

function App() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );

  return (
    <div className="main-container">
      <div className="app-wrapper">
        <h1 className="page_title">Desserts</h1>
        <DessertList data={desserts} />
      </div>
      <YourCard />
    </div>
  );
}

export default App;
