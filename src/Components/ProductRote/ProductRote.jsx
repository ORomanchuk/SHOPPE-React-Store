import "./productRote.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
const ReactDOM = require('react-dom/client');

const ProductRote = () => {
    const [product, setProduct] = useState('');
    let { productId } = useParams();

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/ORomanchuk/json-server/posts/${productId}`)
            .then(response => setProduct(response.data));
    }, [productId])

    let data;

    function ShowDescription() {
        data = <>
            <div className="productDescriptionRote">
                <p>{product.description}</p>
            </div>
        </>;
        ReactDOM.createRoot(
            document.getElementById('data')
        ).render(data);
    }
    function ShowAdditional() {
        data = <>
            <ul className="productAdditionalRote">
                <li>Name: <p>{product.title}</p></li>
                <li>Type: <p>{product.type}</p></li>
                <li>Metal: <p>{product.metal}</p></li>
                <li>Color: <p>{product.color}</p></li>
                <li>Weight: <p>{product.weight}</p></li>
                <li>Sex: <p>{product.sex}</p></li>
            </ul>
        </>;
        ReactDOM.createRoot(
            document.getElementById('data')
        ).render(data);
    }
    function ShowReviews() {
        data = <>
            <div className="productReviewsRote">

            </div>
        </>;
        ReactDOM.createRoot(
            document.getElementById('data')
        ).render(data);
    }

    return (
        <div className="productRote">
            <div className="informationButtons flexible">
                <button onClick={ShowDescription}>Description</button>
                <button onClick={ShowAdditional}>Additional information</button>
                <button onClick={ShowReviews}>Reviews(5)</button>
            </div>
            <hr/>
            <div className="dataBox" id="data">
                {data}
            </div>
        </div>
    )
}
export default ProductRote;