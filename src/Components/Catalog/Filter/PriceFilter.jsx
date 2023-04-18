import React, { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
// import { hiddenFields } from '../../utils/toggleClass';
import { useDispatch, useSelector } from 'react-redux';
// import { changeFilterPriceCreator } from '../../store/sortFilterReducer';

const hiddenFields = (e, visibleBlockRef) => {
    e.target.classList.toggle("up");
    e.target.classList.toggle("down");
    visibleBlockRef.current.classList.toggle("hidden");
}

const defaultState = {
    priceBorder: {
        minPrice: 0,
        maxPrice: 9999999,
    },
    filterPrice: {
        minValue: 0,
        maxValue: 999
    },
    filterManufacturer: [],
    sort: 'popular',
}

export const SET_PRICE_BORDER = 'SET_PRICE_BORDER';
export const CHANGE_FILTER_PRICE = 'CHANGE_FILTER_PRICE';
export const RESET_PRICE_BORDER = 'RESET_PRICE_BORDER';
export const CHANGE_MANUFACTURER_FILTER = 'CHANGE_MANUFACTURER_FILTER';
export const CHANGE_SORT = 'CHANGE_SORT';
export const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS';

function sortFilterReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRICE_BORDER:
            return {
                ...state,
                priceBorder: {
                    minPrice: action.payload.minPrice,
                    maxPrice: action.payload.maxPrice
                },
                filterPrice: {
                    minValue: action.payload.minPrice,
                    maxValue: action.payload.maxPrice
                }
            }
        case CHANGE_FILTER_PRICE:
            return {
                ...state,
                filterPrice: {
                    minValue: action.payload.minValue,
                    maxValue: action.payload.maxValue,
                }
            }
        case RESET_PRICE_BORDER:
            return {
                ...state,
                filterPrice: {
                    minValue: state.priceBorder.minPrice,
                    maxValue: state.priceBorder.maxPrice
                }
            }
        case CHANGE_MANUFACTURER_FILTER:
            return {
                ...state,
                filterManufacturer: action.payload
            }
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case RESET_ALL_FILTERS:
            return {
                ...state,
                filterPrice: {
                    minValue: state.priceBorder.minPrice,
                    maxValue: state.priceBorder.maxPrice
                },
                filterManufacturer: []
            }
        default:
            return state
    }
}

export const setPriceBorderCreator = (payload) => ({ type: SET_PRICE_BORDER, payload });
export const changeFilterPriceCreator = (payload) => ({ type: CHANGE_FILTER_PRICE, payload });
export const resetPriceBorderCreator = (payload) => ({ type: RESET_PRICE_BORDER, payload });
export const changeManufacturerFilterCreator = (payload) => ({ type: CHANGE_MANUFACTURER_FILTER, payload });
export const changeSortCreator = (payload) => ({ type: CHANGE_SORT, payload });
export const resetAllFitersCreator = (payload) => ({ type: RESET_ALL_FILTERS, payload });

const PriceFilter = () => {
    const filterPrice = useSelector(state => state.filterPrice);
    const priceBorder = useSelector(state => state.priceBorder);
    const dispatch = useDispatch();
    const visibleBlockRef = useRef();
    const [minValue, setMinValue] = useState(priceBorder.minPrice);
    const [maxValue, setMaxValue] = useState(priceBorder.maxPrice);

    useEffect(() => {
        setMinValue(filterPrice.minValue);
        setMaxValue(filterPrice.maxValue);
    }, [filterPrice]);

    useEffect(() => {
        const height = visibleBlockRef.current.getBoundingClientRect().height;
        visibleBlockRef.current.style.height = height + 'px'
    }, [visibleBlockRef]);

    const changeMinValue = (e) => {
        if (e.target.value >= maxValue) {
            setMinValue(maxValue - 5)
        } else setMinValue(e.target.value)
    }

    const changeMaxValue = (e) => {
        if (e.target.value <= minValue) {
            setMaxValue(minValue + 5)
        } else setMaxValue(e.target.value)
    }

    return (
        <div className="filter-section">
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='filter-title up'
            >
                Цена
                <span className='arrow'></span>
            </h4>
            <div className="filter-modification-fields" ref={visibleBlockRef}>
                <input
                    onChange={e => changeMinValue(e)}
                    type="number"
                    className='entry-field'
                    value={minValue}
                />
                <span>-</span>
                <input
                    onChange={e => changeMaxValue(e)}
                    type="number"
                    className='entry-field'
                    value={maxValue}
                />
                <input
                    onClick={() => dispatch(changeFilterPriceCreator({ minValue, maxValue }))}
                    type="submit"
                    className='submit'
                    value="OK"
                />
                <MultiRangeSlider
                    min={priceBorder.minPrice}
                    max={priceBorder.maxPrice}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                    }}
                    label={false}
                    ruler={false}
                    style={{ border: "none", boxShadow: "none", padding: "20px 12px 15px" }}
                    barLeftColor="#ebebeb"
                    barInnerColor="#333"
                    barRightColor="#ebebeb"
                    thumbLeftColor="#ccc"
                    thumbRightColor="#ccc"
                />
            </div>
        </div>
    )
}

export default PriceFilter;