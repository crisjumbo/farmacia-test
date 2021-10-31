import React from 'react'
import Link from 'next/link'

import {Box, Heading, Text} from '@chakra-ui/layout';
import { Product } from 'src/interfaces/products';
import {Image} from '@chakra-ui/image'
import {BsStar} from 'react-icons/bs'

const  Item = ({ image_link, name, price, price_sign, rating, id}:Product) => {
    const handleImgError = (e:any) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = '/default-item.svg'
    }
    return (
    <Link href={`products/${id}`} passHref={true}>
      <Box _hover={{translateZ: '2rem', transform: 'scale(1.1)', boxShadow: '0 0 5px gray'}} borderRadius="5px" bg="white" h="20rem" display="grid" gridTemplateRows="70% 30%" cursor="pointer">
        <Box>
          <Image src={image_link} onError={(e) => handleImgError(e)} alt={name} h="100%" w="100%" objectFit="cover"/>
        </Box>
        <Box px="10px">
          <Heading h="3.2rem" top="5px" as="h3" fontSize="20px" mb="5px">{name}</Heading>
          <Text display="flex" justifyContent="space-between">
            <Text as="span" >{price}&nbsp;{price_sign}</Text>
            <Text alignItems="center" display="flex" as="span">{rating ?rating :'No rate'}&nbsp;{rating && <BsStar/>}</Text>
          </Text>
        </Box>
      </Box>
    </Link>
    )
}

export default Item;