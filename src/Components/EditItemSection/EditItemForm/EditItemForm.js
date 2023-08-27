import { useEffect, useState } from "react";
import "./EditItemForm.css";

function EditItemForm({ dessertId, handleDessertUpdate }) {
  const [dessert, setDessert] = useState({
    name: "",
    image: "",
    description: "",
    cakeType: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/desserts/${dessertId}`)
      .then((resp) => resp.json())
      .then((dessertData) => setDessert(dessertData));
  }, [dessertId]);

  const onInputChange = (e) => {
    const updateDessert = { ...dessert };
    updateDessert[e.target.name] = e.target.value;
    setDessert(updateDessert);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dessert),
    };
    fetch(`http://localhost:3000/desserts/${dessertId}`, config)
      .then((resp) => resp.json())
      .then((data) => handleDessertUpdate(data));

    setDessert({
      name: "",
      image: "",
      description: "",
      cakeType: "",
    });
  };

  return (
    <div className="edit-item-form">
      <form onSubmit={onFormSubmit}>
        <h2>Edit Dessert</h2>
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
}
export default EditItemForm;
