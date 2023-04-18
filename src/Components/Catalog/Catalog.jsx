import "./catalog.css";
import Goods from "./Goods/Goods";
import Filter from "./Filter/Filter";
const Catalog = () => {

    return (

        <div className="catalogPage">
            <h3>Shop The Latest</h3>
            <div className="catalog">
                <Filter />
                <Goods />
            </div>
        </div>
    )
}

export default Catalog;