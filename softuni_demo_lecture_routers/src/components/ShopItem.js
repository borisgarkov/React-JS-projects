import { useParams, useNavigate } from "react-router-dom";
import { shopItems } from "../services/shopServices";

export default function ShopItem({
    location
}) {

    console.log(location);

    let params = useParams();
    let navigate = useNavigate();

    const selectedShoppingItem = shopItems.filter(x => x.shoppingItemNumber === params.itemID)[0];

    return (
        <>
            <div>
                <p>--------------------</p>
                <h4>This is shopping item with number {selectedShoppingItem.shoppingItemNumber}</h4>
                <h5>The name of the item is {selectedShoppingItem.itemName}</h5>
                <button onClick={() => navigate('/about')}>Go To About Page</button>
            </div>
            <p>--------------------</p>
        </>
    )
}