import "./card.css"
import { drinks } from "../data/data";

function ItemCard() {
    const drink = drinks;

    return ( 
        <section className="card">
            <h1>food</h1>
            {
                drink.map((item) => {
                    return(
                        <div key={item.id} className="card">
                            <div className="card-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="card-text">
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>          
     );
}

export default ItemCard;