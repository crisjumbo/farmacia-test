import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {Box, Text, HStack, Heading} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Tooltip } from '@chakra-ui/tooltip'
import { Button } from '@chakra-ui/button'
import {FaHome} from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'



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
            <Box>
                <Box as="figcaption">
                    <Image boxSize="30rem" objectFit="fill" src={itemInfo.image_link} onError={(e) => handleImgError(e)} alt={itemInfo.name}/>
                </Box>
            </Box>
            <Box px="1rem">
                <Box>
                    <Heading as="h1">{itemInfo.name}</Heading>
                    <Text>{itemInfo.description}</Text>
                </Box>
                <Text my="1rem">
                    <Text as="span">{itemInfo.currency}</Text>
                    <Text as="span">&nbsp;{itemInfo.price}&nbsp;</Text>
                    <Text as="span">{itemInfo.price_sign}</Text>
                </Text>
                <HStack>
                {
                    itemInfo.product_colors.map((color:any, i:number) => (
                    <Tooltip key={i} label={color.colour_name}>
                        <Button bg={color.hex_value} borderRadius="50%"/>
                    </Tooltip>
                    ))
                }
                </HStack>
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