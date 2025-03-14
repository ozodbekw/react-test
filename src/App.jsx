import "./App.css";
import DessertList from "./components/DessertList";
import YourCard from "./components/YourCard";

function App() {
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
