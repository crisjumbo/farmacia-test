import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Item = dynamic(() => import('./Item'))

import { useAppContext } from 'src/hooks/useAppContext'
import { Product } from 'src/interfaces/products'
import { GalleryLoader } from './GalleryLoader'
import { Box } from '@chakra-ui/layout'

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
     } catch(err) {
       throw new Error('Server Error');
     }
    })()
  }, [state.urlFetch])
  return (
    <Box gap={3} display="grid" gridTemplateColumns="repeat(3, 1fr)" w="100%">
    {
      itemsArr.length != 0 
      ?itemsArr?.map((product: Product) => (
        <Item key={product.id} {...product}/>
      ))
      : <GalleryLoader/>
    }
    </Box>
  )
}

export default GalleryItems;