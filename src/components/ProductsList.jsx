import { useContext } from "react"
import { Context } from "../App"
import ProductListItem from "./ProductListItem"

function ProductsList() {
    const { products } = useContext(Context)
    
    return (
        <div className="products-ul-container">
            <ul className="products-ul">
                {
                    products.map((product, index) => (
                        <ProductListItem key={index} product={product}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductsList