import "./card.css"
import { drinks } from "../data/data";
import Aside from "./Aside";

function ItemCard() {

    const drink = drinks;

    return ( 
        <section>
            <Aside />
            <div class="p-4 sm:ml-20">
                <div class="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        drink.map((item) => {
                            return(
                                <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="card-image">
                                        <img src={item.image} alt={item.name} className="w-full" />
                                    </div>
                                    <div className="px-6 py-4">
                                        <p>{item.name}</p>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>          
     );
}

export default ItemCard;