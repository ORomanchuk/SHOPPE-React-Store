import "./goods.css";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../ProductCard/ProductCard";
const Goods = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/ORomanchuk/json-server/posts')
            .then(response => setProducts(response.data));
    }, [])



    return (
        <div className="goods flexible">
                {
                    products.map(product => <ProductCard product={product} key={product.id} />)
                }
        </div>
    )
}

export default Goods;