import "./catalog.css";
import Goods from "./Goods/Goods";
import Filter from "./Filter/Filter";
import {useState} from "react";
const Catalog = () => {
    const [category, setCategory] = useState('');
    const chooseCategory = (key) => {
        setCategory(key)
    }

        return (
        <div className="catalogPage">
            <h3>Shop The Latest</h3>
            <div className="catalog">
                {category}
                <Filter chooseCategory={chooseCategory}/>
                <Goods />
            </div>
        </div>
    )
}

export default Catalog;