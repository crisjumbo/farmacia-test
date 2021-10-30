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
            rateRangeFrom: _payload.from,
            rateRangeTo: _payload.to
        })
    }
    
    const switcher = () => {
        const varArr = ['name', 'brand', 'product_type', 'price_greater_than', 'price_less_than', 'rating_greater_than', 'rating_less_than'];
        const valArr = [state.name, state.brand, state.productType, state.priceRangeFrom, state.priceRangeTo, state.rateRangeFrom, state.rateRangeTo]
        const urlFetch = process.env.NEXT_PUBLIC_ENDPOINT || '';
        let i = 0;
        let flag = 1;
        while (i < valArr.length) {
            if (valArr[i] && flag)
                urlFetch.concat(`?${varArr[i]}=${valArr[i]}`);
            else if (valArr[i] && !flag)
                urlFetch.concat(`&${varArr[i]}=${valArr[i]}`);
            i++;
        }
        setState({
            ...state,
            urlFetch,
        })
    }
    
    return {
        state,
        searchWord,
        searchPriceRange,
        searchRateRange,
        switcher,
    }
}