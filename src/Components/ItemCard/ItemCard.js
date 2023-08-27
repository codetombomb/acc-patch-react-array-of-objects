import "./ItemCard.css";
import { v4 as uuidv4 } from "uuid";
import editIcon from '../../edit.svg'
import deleteIcon from '../../delete.svg'

const ItemCard = ({ dessert }) => {
  const { name, image, description, cakeType, flavorVariations, likes } =
    dessert;
  return (
    <div className="item-card">
      <h1>{name}</h1>
      <img className="item-card-image" src={image} alt="name"></img>
      <p>{description}</p>
      <h4>Available Flavors</h4>
      <ul>
        {flavorVariations.map((flavor) => (
          <li key={uuidv4()}>{flavor}</li>
        ))}
      </ul>
      <div className="card-buttons">
        <span className="card-btn"><img src={editIcon} alt="edit icon" /></span>
        <span className="card-btn"><img src={deleteIcon} alt="delete" /></span>
      </div>
    </div>
  );
};
export default ItemCard;
