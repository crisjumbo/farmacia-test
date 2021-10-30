import { Box, Text } from '@chakra-ui/layout'
import { Product } from '../interfaces/products'
import React, { useEffect, useState } from 'react'
import { Item } from  './Item'
import { useAppContext } from '../hooks/useAppContext'

const GalleryItems= () => {
  const [itemsArr, setItemsArr] = useState([]);
  const {state}:any = useAppContext();
  useEffect(() => {
    (async function fetchItems() {
     const endpoint:string = process.env.NEXT_PUBLIC_ENDPOINT || '';
     try{
       const res = await fetch(endpoint);
       const items = await res.json();
       setItemsArr(items);
     } catch(err) {
       console.log('An Error happened fetching the data');
     }
    })()
  }, [state])
  return (
    <Box bg="pink" gap={3} display="grid" gridTemplateColumns="repeat(3, 1fr)">
    {
      itemsArr 
      ?itemsArr?.map((product: Product) => (
      <Box key={product.id} >
        <Item {...product}/>
      </Box>
      ))
      : <Box><Text>Loading...</Text></Box>
    }
    </Box>
  )
}

export default GalleryItems;