import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import {Box} from '@chakra-ui/layout'
import { ProductCard } from  '../src/components/ProductCard'
import {Data, UseSearchItem} from '../src/interfaces/products'
import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { BsSearch } from 'react-icons/bs'
import {useSearchItem} from '../src/hooks/useSearchItem'
import React from 'react'

const Home = ({data}:{data:Data}) => {
const {query, filteredItems, setQuery} = useSearchItem(data);

  return (
  <Box display="flex" alignItems="center" flexDir="column" w="100%" maxW="100vw" minH="100vh" px="2rem" pt="1rem  ">
    <Box>
      <Box>
          <FormLabel htmlFor="name">Filter:</FormLabel>
          <Input
              type="number"
              name="priceFrom"
              placeholder="Price from..."
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
          />
          <Input
              type="number"
              name="priceTo"
              placeholder="Price to..."
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
          />
      </Box>
    </Box>
    <Box boxShadow="0 0 3px gray" w="25rem" display="flex" mb="1rem">
        <Input value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder="Search"/>
        <Button><BsSearch/></Button>
    </Box>
    <Box bg="pink" gap={3} display="grid" gridTemplateColumns="repeat(3, 1fr)">
    {
      filteredItems && filteredItems.map(product => (
      <Box key={product.id} >
        <ProductCard {...product}/>
      </Box>
      ))
    }
    </Box>
  </Box>
  )
}

export const getStaticProps:GetStaticProps = async (context: GetStaticPropsContext) => {
  const endpoint:string = process.env.NEXT_PUBLIC_ENDPOINT || '';
  const res = await fetch(endpoint);
  const data = await res.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props:{data},
  }
}

export default Home