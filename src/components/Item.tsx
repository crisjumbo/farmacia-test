import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image'
import { Product } from '../interfaces/products';
import {BsStar} from 'react-icons/bs'

export const  Item = ({ image_link, name, price, rating}:Product) => {
    return (
    <Box h="20rem" display="grid" gridTemplateRows="70% 30%" cursor="pointer">
      <Box>
        <Image src={'hola'} alt={name} h="100%" w="100%" objectFit="cover"/>
      </Box>
      <Box px="10px" pos="relative">
        <Heading pos="relative" h="3.2rem" top="5px" as="h3" fontSize="20px" mb="5px">{name}</Heading>
        <Text pos="relative" bottom ="0px" display="flex" justifyContent="space-between">
          <Text as="span" >{price}&nbsp;$</Text>
          <Text alignItems="center" display="flex" as="span">{rating ?rating :'No rate'}&nbsp;{rating && <BsStar/>}</Text>
        </Text>
      </Box>
    </Box>
    )
}
