import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ItemCardSection from "./Components/ItemCardSection/ItemCardSection";
import EditItemSection from "./Components/EditItemSection/EditItemSection";
import ItemForm from "./Components/EditItemSection/ItemForm/ItemForm";
import EditItemForm from "./Components/EditItemSection/EditItemForm/EditItemForm";

function App() {
  const [desserts, setDesserts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Edit Items");
  const [dessertId, setDessertId] = useState(null);
  const [dessertTypes, setDessertTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((resp) => resp.json())
      .then((desserts) => setDesserts(desserts));
  }, []);

  const onSelectOption = (option) => {
    setSelectedOption(option);
  };

  const onFormSelection = (dessertId) => {
    setDessertId(dessertId);
  };

  const onCreateDessert = (dessert) => {
    setDesserts([...desserts, dessert]);
  };

  const renderForm = () => {
    if (dessertId) {
      return <EditItemForm dessertId={dessertId} dessertTypes={dessertTypes} />;
    } else {
      return <ItemForm />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        selectedOption={selectedOption}
        handleSelectedOption={onSelectOption}
      />
      <ItemCardSection
        desserts={desserts}
        handleEditDessertClick={onFormSelection}
        handleAddNewDessertClick={onFormSelection}
      />
      {renderForm()}
    </div>
  );
}

export default App;
