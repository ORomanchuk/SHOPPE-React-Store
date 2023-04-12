import "./newproducts.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "../ProductCard/ProductCard";

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
                <a href="#">View All</a>
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