import {useMemo, useState} from 'react'
import {Data} from '../interfaces/products'

export const useSearchItem = (data:Data) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItem] = useState(data);
    
    useMemo(() => {
        const filArr = data.filter(item => {
            if (item.name?.toLowerCase().includes(query.toLowerCase()) ||
                item.brand?.toLowerCase().includes(query.toLowerCase()) ||
                item.product_type?.toLowerCase().includes(query.toLowerCase()))
                return item;
        })
        
        setFilteredItem(filArr);
    }, [data, query])
    return {query, filteredItems, setQuery};
}