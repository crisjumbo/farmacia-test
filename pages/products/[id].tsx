import React from 'react'
import {useRouter} from 'next/router'
import {Box, Text} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'



const Product= ({itemInfo}:any) => {
    const router = useRouter();
    const { id } = router.query;
    console.log(itemInfo)
    return (
    <Box>
        <Text>{itemInfo.name}</Text>
        <Text>{itemInfo.description}</Text>
        <Text>{itemInfo.price}</Text>
        {
            itemInfo.product_colors.map((color:any, i:number) => (
            <Box key={i}>
                <Text>{color.hex_value}</Text>
                <Text>{color.colour_name}</Text>
            </Box>
            ))
        }
        {
            itemInfo.tag_list.map((tag:string, i:number) => (
                <Text key={i}>{tag}</Text>
            ))
        }
        <Image src={itemInfo.image_link} alt={itemInfo.name}/>
        <Image src={itemInfo.api_feature_image} alt={itemInfo.name}/>
    </Box>
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