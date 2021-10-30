import React from 'react'
import {Box} from '@chakra-ui/layout'
import { FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useAppContext } from '../hooks/useAppContext'

const PriceRange = ({priceFrom, priceTo, searchPriceRange }:any) => {
    return (
      <Box>
          <FormLabel htmlFor="name">Price Range:</FormLabel>
          <Input
              type="number"
              name="priceFrom"
              placeholder="Price from..."
              value={priceFrom}
              onChange={(e) => searchPriceRange({from: e.currentTarget.value, to: priceTo})}
          />
          <Input
              type="number"
              name="priceTo"
              placeholder="To"
              value={priceTo}
              onChange={(e) => searchPriceRange({from: priceFrom, to: e.currentTarget.value})}
          />
      </Box>
    )
}

const RateRange = ({rateFrom, rateTo, searchRateRange }:any) => {
    return (
      <Box>
          <FormLabel htmlFor="name">Rate Range:</FormLabel>
          <Input
              type="number"
              name="rateFrom"
              placeholder="Rate from..."
              value={rateFrom}
              onChange={(e) => searchRateRange({from: e.currentTarget.value, to: rateTo})}
          />
          <Input
              type="number"
              name="rateTo"
              placeholder="Rate to..."
              value={rateTo}
              onChange={(e) => searchRateRange({from: rateFrom, to: e.currentTarget.value})}
          />
      </Box>
    )
}

export const RangeForm = ({type}:{type:string}) => {
    const {state, searchPriceRange, searchRateRange }:any = useAppContext();
    return (
    <>
    {
        type === "rate" &&
        <RateRange rateFrom={state.rateRangeFrom} rateTo={state.rateRangeTo} searchRateRange={searchRateRange} />
    }
    {
        type == "price" &&
        <PriceRange priceFrom={state.priceRangeFrom} priceTo={state.priceRangeTo} searchPriceRange={searchPriceRange} />
    }
    </>
    )
}