import ItemCard from "./ItemCard/ItemCard";
import "./ItemCardSection.css";
import AddNewIcon from "../../Icons/add_new.svg"

function ItemCardSection({ desserts, handleEditDessertClick }) {
  return (
    <section className="item-card-section">
      <div className="add-item-button-container">
        <img src={AddNewIcon} onClick={() => handleEditDessertClick(null)}></img>
      </div>
      {desserts.map((dessert) => (
        <ItemCard
          key={dessert.id}
          dessert={dessert}
          handleEditDessertClick={handleEditDessertClick}
        />
      ))}
    </section>
  );
}
export default ItemCardSection;
