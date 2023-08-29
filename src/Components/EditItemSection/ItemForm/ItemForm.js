import "./ItemForm.css";
import { useState } from "react";

const ItemForm = ({ handleCreateDessert }) => {
  const [dessert, setDessert] = useState({
    name: "",
    image: "",
    description: "",
    cakeType: "",
  });

  const onInputChange = (e) => {
    const updateDessert = { ...dessert };
    updateDessert[e.target.name] = e.target.value;
    setDessert(updateDessert);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dessert),
    };
    fetch("http://localhost:3000/desserts", config)
      .then((resp) => resp.json())
      .then((data) => handleCreateDessert(data));

    setDessert({
      name: "",
      image: "",
      description: "",
      cakeType: ""
    });
  };

  return (
    <div className="item-form-wrapper">
      <form className="item-form" onSubmit={onFormSubmit}>
        <h2>New Dessert</h2>
        <label htmlFor="name">Name</label>
        <input
          className="edit-input"
          name="name"
          id="name"
          type="text"
          onChange={onInputChange}
          value={dessert.name}
        />
        <label htmlFor="image">Image</label>
        <input
          className="edit-input"
          name="image"
          id="image"
          type="text"
          onChange={onInputChange}
          value={dessert.image}
        />
        <label htmlFor="description">Description</label>
        <input
          className="edit-input"
          name="description"
          id="description"
          type="text"
          onChange={onInputChange}
          value={dessert.description}
        />
        <label htmlFor="cake-type">Cake Type</label>
        <input
          className="edit-input"
          name="cakeType"
          id="cake-type"
          type="text"
          onChange={onInputChange}
          value={dessert.cakeType}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default ItemForm;
