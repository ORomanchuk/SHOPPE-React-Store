import "./productcard.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const ProductCard = ({ product }) => {
    let navigate = useNavigate();

    const selectProduct = (productId) => {
        navigate(`product/${productId}`)
    }

    if (product.discount > 0) {
        return (
            <div className="productsCard">
                <div className="productImage">
                    <div className="discount">-{product.discount}%</div>
                    <img src={product.images[0]} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
                    <button className="toBuyBtn">ADD TO CART</button>
                </div>
                <h4 onClick={() => selectProduct(product.id)}>{product.title}</h4>
                <p>€ {product.price}</p>
            </div>
        )
    } else if (product.left === 0) {
        return (
            <div className="productsCard">
                <div className="productImage">
                    <div className="outStock">Sold out</div>
                    <img src={product.images[0]} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
                    <button className="soldOutBtn">SOLD OUT</button>
                </div>
                <h4 onClick={() => selectProduct(product.id)}>{product.title}</h4>
                <p>€ {product.price}</p>
            </div>
        )
    } else {
        return (
            <div className="productsCard">
                <div className="productImage">
                    <img src={product.images[0]} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
                    <button className="toBuyBtn">ADD TO CART</button>
                </div>
                <h4 onClick={() => selectProduct(product.id)}>{product.title}</h4>
                <p>€ {product.price}</p>
            </div>
        )
    }


}

export default ProductCard;