import "./newproducts.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "../ProductCard/ProductCard";
import {Link} from "react-router-dom";

const NewProducts = () => {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/ORomanchuk/json-server/posts')
            .then(response => setProducts(response.data));
    }, [])

    function setNewProducts(product) {
        if (product.new === true) {
            return product
        }
    }

    let newProd = products.filter(setNewProducts)

    return (
        <div className="newProducts">
            <div className="header flexible">
                <h2>Shop The Latest</h2>
                <Link to="/SHOPPE-React-Store/catalog">View All</Link>
            </div>
            <div className="products flexible">
                {
                    newProd.map(product => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
    )
}

export default NewProducts;