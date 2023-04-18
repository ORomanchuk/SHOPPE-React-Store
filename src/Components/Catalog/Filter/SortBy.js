import React, {Component} from "react";
import "./filter.css";
export class SortBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: [
                {
                    key: 'name',
                    name: 'Name'
                },
                {
                    key: 'price',
                    name: 'Price'
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                <select name="select" id="select" placeholder="Sort By">
                    {this.state.sort.map(el=>(
                        <option value={el.name}>{el.name}</option>
                    ))}
                    <option value="SortBy" className="mainOption" selected>Sort By</option>
                </select>
            </div>
        )

    }

}