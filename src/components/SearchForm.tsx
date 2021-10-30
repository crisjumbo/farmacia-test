import React from 'react'
import {Box} from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { BsSearch } from 'react-icons/bs'
import { brands, productTypes } from '../utils/const/variables'
import { Select } from '@chakra-ui/select'
import { useAppContext } from '../hooks/useAppContext'

export const SearchForm= () => {
  const {state, searchWord, switcher}:any = useAppContext();
    return (
    <Box w="24rem" mx="10px">
      <Box boxShadow="0 0 3px gray" display="flex" mb="1rem">
          <Input value={state.name} onChange={(e) => searchWord({name: "name", value: e.currentTarget.value})} placeholder="Search"/>
          <Select value={state.brand} onChange={(e) => searchWord({name: "brand", value: e.currentTarget.value})}>
          {
            brands.map((brand, i) => (
              <option key={i} value={brand}>{brand}</option>
            ))
          }
          </Select>
          <Select value={state.productType} onChange={(e) => searchWord({name: "productType", value: e.currentTarget.value})}>
          {
            productTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))
          }
          </Select>
      </Box>
      <Button w="100%" onClick={() => switcher()}><BsSearch/></Button>
    </Box>
    )
}
