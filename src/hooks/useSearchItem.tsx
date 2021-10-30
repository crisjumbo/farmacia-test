import {useMemo, useState} from 'react'
import {Data} from '../interfaces/products'

export const useSearchItem = (data:Data) => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItem] = useState(data);
    
    useMemo(() => {
        const wordFilterArr: Data = data.filter(item => {
            if (item.name?.toLowerCase().includes(query.toLowerCase()) ||
                item.brand?.toLowerCase().includes(query.toLowerCase()) ||
                item.product_type?.toLowerCase().includes(query.toLowerCase()))
                return item;
        })
        setFilteredItem(wordFilterArr);
    }, [data, query]);
    return {query, filteredItems, setQuery};
}