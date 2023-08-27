import ItemCard from "../ItemCard/ItemCard";
import "./ItemCardSection.css";

function ItemCardSection({desserts}) {
  return <section className="item-card-section">{desserts.map(dessert => <ItemCard key={dessert.id} dessert={dessert}/>)}</section>;
}
export default ItemCardSection;
