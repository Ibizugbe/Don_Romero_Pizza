import "./card.css"
import { drinks, pizza, pastres, snacks } from "../data/data";

function ItemCard() {
    const drinks = drinks;
    const pizza = pizza;
    const pastres = pastres;
    const snacks = snacks;
    return ( 
        <div className="card">
            <div className="card-image"></div>
            <div className="card-text"></div>
        </div>
     );
}

export default ItemCard;