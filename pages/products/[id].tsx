import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {Box, Text, HStack, Heading} from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import {FaHome} from 'react-icons/fa'
import {useRouter} from 'next/router'



const Product= ({itemInfo}:any) => {
    const router = useRouter();
    const { id } = router.query;

    const handleImgError = (e:any) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '/default-item.svg';
    }
    return (
    <>
        <Head>
            <title>Product: {id}</title>
        </Head>
        <Link href="/" passHref={true} >
            <Text as="span" bg="gray.200" p="10px" left="1rem" display="flex" top="1rem" pos="absolute" cursor="pointer">Homepage&nbsp;<FaHome/> </Text>
        </Link>
        <Box display="flex" h="100vh" bg="blue" w="100vw" p="1rem" alignItems="center">
            <Box as="figcaption" w="40rem" h="30rem" pos="relative">
                <Image w="100%" h="100%" objectFit="cover" src={itemInfo.image_link} onError={(e) => handleImgError(e)} alt={itemInfo.name}/>
            </Box>
            <Box px="1rem">
                <Box>
                    <Heading as="h1">{itemInfo.name}</Heading>
                    <Text>{itemInfo.description}</Text>
                </Box>
                <Text my="1rem">
                    <Text as="span" fontWeight="bold">Price:</Text><br/>
                    <Text as="span">{itemInfo.currency}</Text>
                    <Text as="span">&nbsp;{itemInfo.price}&nbsp;</Text>
                    <Text as="span">{itemInfo.price_sign}</Text>
                </Text>
                <Text fontWeight="bold"mb="5px">Colors:</Text>
                <HStack mb="1rem">
                {
                    itemInfo.product_colors.map((color:any, i:number) => (
                    <Tooltip key={i} label={color.colour_name}>
                        <Button bg={color.hex_value} borderRadius="50%"/>
                    </Tooltip>
                    ))
                }
                </HStack>
                <Text fontWeight="bold"mb="8px">Tags</Text>
                {
                    itemInfo.tag_list.map((tag:string, i:number) => (
                        <Text key={i} as="span" bg="violet" p="5px" mx="5px" borderRadius="10px" fontWeight="bold" color="white">{tag}</Text>
                    ))
                }
            </Box>
        </Box>
    </>
    )
}

export default Product;

export const getServerSideProps = async ({params}:{params:{id?:string | number}}) => {
    const endpoint:string = process.env.NEXT_PUBLIC_ITEM || '';
    const res = await fetch(`${endpoint}${params.id}.json`)
    const itemInfo= await res.json()
    
    return {
        props: {
            itemInfo
        }
    }
}