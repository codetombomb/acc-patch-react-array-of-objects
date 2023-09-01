import "./ItemCard.css";

import editIcon from "../../../Icons/edit.svg";
import deleteIcon from "../../../Icons/delete.svg";

const ItemCard = ({ dessert, handleEditDessertClick, handleDeleteDessertClick }) => {
  const { id, name, image, description, cakeType } =
    dessert;
    const onDeleteDessertClick = () => {
      fetch(`http://localhost:3000/desserts/${id}`, {
        method: "DELETE"
      })
      handleDeleteDessertClick(dessert)
    }
  return (
    <div className="item-card">
      <h1>{name}</h1>
      <img className="item-card-image" src={image} alt="name"></img>
      <p>{description}</p>
      <h4>Type</h4>
      <p>{cakeType}</p>
      <div className="card-buttons">
        <span className="card-btn" >
          <img src={editIcon} alt="edit icon" onClick={() => handleEditDessertClick(id)}/>
        </span>
        <span className="card-btn">
          <img src={deleteIcon} alt="delete" onClick={onDeleteDessertClick}/>
        </span>
      </div>
    </div>
  );
};
export default ItemCard;
