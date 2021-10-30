import { useState } from 'react'
import {RangeNum} from '../interfaces/products'
import { initialState } from '../initialState';

export const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const searchWord = (_payload: {name:string, value: string}) => {
        setState({
            ...state,
            [`${_payload.name}`]: _payload.value
        })
    }
    
    const searchPriceRange = (_payload: RangeNum) => {
        setState({
            ...state,
           priceRangeFrom: _payload.from,
           priceRangeTo: _payload.to 
        })
    }
    
    const searchRateRange = (_payload: RangeNum) => {
        setState({
            ...state,
            ratingRangeFrom: _payload.from,
            ratingRangeTo: _payload.to
        })
    }
    
    return {
        state,
        searchWord,
        searchPriceRange,
        searchRateRange,
    }
}