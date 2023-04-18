import React, {Component} from "react";
import "./filter.css";
export class ShopBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'earrings',
                    name: 'Earrings'
                },
                {
                    key: 'hairPin',
                    name: 'Hair Pin'
                },
                {
                    key: 'necklace',
                    name: 'Necklace'
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                <select name="select" id="select" placeholder="Shop By">
                    {this.state.categories.map(el=>(
                        <option value={el.name}>{el.name}</option>
                    ))}
                    <option value="ShopBy" className="mainOption" selected>Shop By</option>
                </select>
            </div>
        )

    }

}