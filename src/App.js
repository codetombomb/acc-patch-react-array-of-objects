import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ItemCardSection from "./Components/ItemCardSection/ItemCardSection";
import ItemForm from "./Components/EditItemSection/ItemForm/ItemForm";
import EditItemForm from "./Components/EditItemSection/EditItemForm/EditItemForm";

function App() {
  const [desserts, setDesserts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Edit Items");
  const [dessertId, setDessertId] = useState(null);

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

  const onDeleteDessertClick = (deletedDessert) => {
    const filteredDesserts = desserts.filter(
      (dessert) => dessert !== deletedDessert
    );
    setDesserts(filteredDesserts);
    setDessertId(null);
  };

  const onCreateDessert = (dessert) => {
    setDesserts([...desserts, dessert]);
    setDessertId(null);
  };

  const onDessertUpdate = (updatedDessert) => {
    const updatedDesserts = desserts.map((dessert) =>
      dessert.id === updatedDessert.id ? updatedDessert : { ...dessert }
    );
    setDesserts(updatedDesserts);
    setDessertId(null);
  };

  const renderForm = () => {
    // What information does the EditItemForm need to know about?
    if (dessertId) {
      return <EditItemForm />; // Add props here
    } else {
      return <ItemForm handleCreateDessert={onCreateDessert} />;
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
        handleDeleteDessertClick={onDeleteDessertClick}
      />
      {renderForm()}
    </div>
  );
}

export default App;
