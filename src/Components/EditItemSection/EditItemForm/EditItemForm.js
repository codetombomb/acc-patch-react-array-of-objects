import { useEffect, useState } from "react";
import "./EditItemForm.css";

function EditItemForm({ dessertId }) {
  const [dessert, setDessert] = useState({
    name: "",
    image: "",
    description: "",
    cakeType: "",
    flavorVariations: []
  });

  useEffect(() => {
    console.log(dessertId)
      fetch(`http://localhost:3000/desserts/${dessertId}`)
      .then((resp) => resp.json())
      .then((dessertData) => setDessert(dessertData));
  }, [dessertId]);

  const onInputChange = (e) => {
    const updateDessert = { ...dessert };
    updateDessert[e.target.name] = e.target.value;
    setDessert(updateDessert);
  };

  return (
    <div className="edit-item-form">
      <form>
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
