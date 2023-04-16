import "./product.css";
import React, {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import SimilarProductCard from "../ProductCard/SimilarProductCard";
const Similar = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/ORomanchuk/json-server/posts')
            .then(response => setProducts(response.data));
    }, [])

    function setSimilarProducts(product) {
        if (product.id <= 1003) {
            return product
        }
    }

    let similarProd = products.filter(setSimilarProducts)

    return (
        <div className="Similar">
            <h2>Similar Items</h2>
                <div className="similarProducts flexible">
                    {
                        similarProd.map(product => <SimilarProductCard product={product} key={product.id} />)
                    }
                </div>
        </div>
    )
}

export default Similar;