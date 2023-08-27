import ItemCard from "./ItemCard/ItemCard";
import "./ItemCardSection.css";
import AddNewIcon from "../../Icons/add_new.svg";

function ItemCardSection({
  desserts,
  handleEditDessertClick,
  handleDeleteDessertClick,
}) {
  return (
    <section className="item-card-section">
      <div className="add-item-button-container">
        <img
          src={AddNewIcon}
          onClick={() => handleEditDessertClick(null)}
        ></img>
      </div>
      {desserts.map((dessert) => (
        <ItemCard
          key={dessert.id}
          dessert={dessert}
          handleEditDessertClick={handleEditDessertClick}
          handleDeleteDessertClick={handleDeleteDessertClick}
        />
      ))}
    </section>
  );
}
export default ItemCardSection;
