import "./filter.css";
import React, {useState} from "react";
import RangeSlider from "./InStock";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Filter = ({chooseCategory}) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [categories, setCategories] = useState( [
        {
            "key": "all",
            "name": "All"
        },
        {
            "key": "earrings",
            "name": "Earrings"
        },
        {
            "key": "hairPin",
            "name": "Hair Pin"
        },
        {
            "key": "necklace",
            "name": "Necklace"
        }
    ])

    const [sort, setSort] = useState( [
        {
            "key": "name",
            "name": "Name"
        },
        {
            "key": "price",
            "name": "Price"
        }
    ])
    return (
        <aside className="filter">
            <div className="catalogSearch">
                <input type="search" placeholder="Search..."/>
            </div>
            <div className="categories">
                <select name="select" id="select" placeholder="Shop By">
                    {categories.map(el=>(
                        <option key={el.key} value={el.name} onClick={() => chooseCategory(el.key)}>{el.name}</option>
                    ))}
                    <option value="ShopBy" className="mainOption" selected>Shop By</option>
                </select>
            </div>
            <div className="categories">
                <select name="select" id="select" placeholder="Sort By">
                    {sort.map(el=>(
                        <option value={el.name}>{el.name}</option>
                    ))}
                    <option value="SortBy" className="mainOption" selected>Sort By</option>
                </select>
            </div>
            <RangeSlider/>
            <div className="onSale flexible">
                <p>On sale</p>
                <Switch {...label} />
            </div>
            <div className="inStock flexible">
                <p>In stock</p>
                <Switch {...label} />
            </div>
        </aside>
    )
}

export default Filter;