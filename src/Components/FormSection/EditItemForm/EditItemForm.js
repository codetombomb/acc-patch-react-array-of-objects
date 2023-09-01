import { useEffect, useState } from "react";
import "../forms.css";

function EditItemForm({ dessertId, handleDessertUpdate }) {
  // Receive and destructure props
  // create dessert state for controlled form
  const [dessert, setDessert] = useState({
    name: "",
    image: "",
    description: "",
    cakeType: "",
  });

  // fetch dessertID on mount
  useEffect(() => {
    fetch(`http://localhost:3000/desserts/${dessertId}`)
      .then((resp) => resp.json())
      .then((data) => setDessert(data));
  }, [dessertId]);

  const onInputChange = (e) => {
    const dessertCopy = { ...dessert };
    dessertCopy[e.target.name] = e.target.value;
    console.log("updating state", dessertCopy);
    setDessert(dessertCopy);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
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
    <div className="form-wrapper">
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
