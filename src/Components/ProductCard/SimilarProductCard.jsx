import "./productcard.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const SimilarProductCard = ({ product }) => {
    let navigate = useNavigate();

    const selectProduct = (productId) => {
        navigate(`/SHOPPE-React-Store/product/${productId}`)
    }

    return (
        <div className="productsCard">
            <div className="productImage">
                <img src={product.images[0]} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
                <button className="toBuyBtn"
                >ADD TO CART</button>
            </div>
            <h4 onClick={() => selectProduct(product.id)}>{product.title}</h4>
            <p>€ {product.price}</p>
        </div>
    )
}

export default SimilarProductCard;