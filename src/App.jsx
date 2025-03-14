import "./App.css";
import DessertList from "./components/DessertList";
import OrderConfirmed from "./components/OrderConfirmed";
import YourCard from "./components/YourCard";
import { useSelector } from "react-redux";

function App() {
  const { orderList } = useSelector((store) => store.cart);
  return (
    <div className="main-container">
      <div className="app-wrapper">
        <h1 className="page_title">Desserts</h1>
        <DessertList />
      </div>
      <div>
        <YourCard />
      </div>
    </div>
  );
}

export default App;
