import "./filter.css";
// import PriceFilter from "./PriceFilter";
import {ShopBy} from "./ShopBy";
import {SortBy} from "./SortBy";
import CatalogSearch from "./CatalogSearch";
const Filter = () => {

    return (
        <aside className="filter">
            <CatalogSearch />
            <ShopBy />
            <SortBy />
            {/*<PriceFilter />*/}
            {/*<OnSale />*/}
            {/*<InStock />*/}
        </aside>
    )
}

export default Filter;