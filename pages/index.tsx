import Head from 'next/head'
import dynamic from 'next/dynamic'
const GalleryItems = dynamic(() => import('src/components/GalleryItems'))

import { SearchForm } from 'src/components/SearchForm'
import { RangeForm } from 'src/components/RangeForm'
import {Box} from '@chakra-ui/layout'

const Home = () => {
  return (
  <>
    <Head>
      <title>Home | Makeup eCommerce</title>
    </Head>
    <Box bg="#e3cbe0" display="flex" alignItems="center" flexDir="column" w="100%" maxW="100vw" minH="100vh" px="2rem" pt="1rem  ">
      <Box display="flex" justifyContent="space-evenly" mb="1.5rem">
        <RangeForm type="price"/>
        <SearchForm />
        <RangeForm type="rate"/>
      </Box>
      <GalleryItems />
    </Box>
  </>
  )
}


export default Home