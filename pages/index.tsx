import {Box} from '@chakra-ui/layout'
import React from 'react'
import { SearchForm } from '../src/components/SearchForm'
import { RangeForm } from '../src/components/RangeForm'
import dynamic from 'next/dynamic'
const GalleryItems = dynamic(() => import('../src/components/GalleryItems'))

const Home = () => {
  return (
  <Box display="flex" alignItems="center" flexDir="column" w="100%" maxW="100vw" minH="100vh" px="2rem" pt="1rem  ">
    <Box display="flex" justifyContent="space-evenly">
      <RangeForm type="price"/>
      <SearchForm />
      <RangeForm type="rate"/>
    </Box>
    <GalleryItems />
  </Box>
  )
}


export default Home