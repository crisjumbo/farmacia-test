import { Box, Text } from '@chakra-ui/layout'
import { Product } from '../interfaces/products'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Item = dynamic(() => import('./Item'))
import { useAppContext } from '../hooks/useAppContext'

const GalleryItems= () => {
  const [itemsArr, setItemsArr] = useState([]);
  const {state}:any = useAppContext();
  useEffect(() => {
    (async function fetchItems() {
     const endpoint:string = process.env.NEXT_PUBLIC_ENDPOINT || '';
     try{
       const res = await fetch(state.urlFetch);
       const items = await res.json();
       setItemsArr(items);
       console.log(state.urlFetch);
     } catch(err) {
       console.log('An Error happened fetching the data');
     }
    })()
  }, [state.urlFetch])
  console.log(itemsArr.length);
  return (
    <Box bg="pink" gap={3} display="grid" gridTemplateColumns="repeat(3, 1fr)">
    {
      itemsArr.length != 0 
      ?itemsArr?.map((product: Product) => (
      <Box key={product.id} >
        <Item {...product}/>
      </Box>
      ))
      : <Box><Text>Loading...</Text></Box>
    }
    {console.log('DONE MOUNTING')}
    </Box>
  )
}

export default GalleryItems;