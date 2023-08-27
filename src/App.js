import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ItemCardSection from "./Components/ItemCardSection/ItemCardSection";
import EditItemSection from "./Components/EditItemSection/EditItemSection";

function App() {
  const [desserts, setDesserts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Edit Items");

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((resp) => resp.json())
      .then((desserts) => setDesserts(desserts));
  }, []);

  const onSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app">
      <Sidebar
        selectedOption={selectedOption}
        handleSelectedOption={onSelectOption}
      />
      <ItemCardSection desserts={desserts} />
      <EditItemSection />
    </div>
  );
}

export default App;
