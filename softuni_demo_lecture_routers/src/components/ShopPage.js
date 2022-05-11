import { Link } from 'react-router-dom';
import { shopItems } from '../services/shopServices';

export default function ShopPage() {

    return (
        <>
            <h2>Here is the Shopping Page</h2>
            <h3>All the items should appear here</h3>

            {shopItems.map(item => {
                return (
                    <div key={item.shoppingItemNumber}>
                        <Link to={`/shop/${item.shoppingItemNumber}`} >{item.itemName}</Link>
                        <p></p>
                    </div>
                )
            })}
        </>
    )
}