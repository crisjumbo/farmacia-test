import React from 'react'
import {useRouter} from 'next/router'
import {Box, Text} from '@chakra-ui/layout'

const Product= () => {
    const router = useRouter();
    const { id } = router.query;
    return (
    <Box>
        <Text>Hello Product {id}</Text>
    </Box>
    )
}

export default Product;

