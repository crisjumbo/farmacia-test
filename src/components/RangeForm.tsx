import React from 'react'
import {Box} from '@chakra-ui/layout'
import { FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useAppContext } from '../hooks/useAppContext'

export const RangeForm = ({type}:{type:string}) => {
    const {state, searchPriceRange, searchRateRange }:any = useAppContext();
    const handleFunction = (_payload: {from:number, to:number}) => {
        if (type == "rate")
            return searchRateRange(_payload);
        if (type == "price")
            return searchPriceRange(_payload);
    }
    const handleFrom = () => {
        if (type === "rate")
            return state.rateRangeFrom;
        if (type === "price")
            return state.priceRangeFrom;
    }
    const handleTo = (type:string) => {
        if (type === "rate")
            return state.rateRangeTo;
        if (type === "price")
            return state.priceRangeTo;
    }
    return (
      <Box>
          <FormLabel htmlFor="name">Filter:</FormLabel>
          <Input
              type="number"
              name="From"
              placeholder="From"
              value={handleFrom()}
              onChange={(e) => handleFunction({from:parseFloat(e.currentTarget.value), to:0})}
          />
          <Input
              type="number"
              name="To"
              placeholder="To"
              value={handleTo(type)}
              onChange={(e) => handleFunction({from:0,to:parseFloat(e.currentTarget.value)})}
          />
      </Box>
    )
}