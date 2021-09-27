import { useState, useEffect } from "react";
import {IPaginationConfig, IProducts} from './products.model';

export const useFetchData = () => {
    const [status, setStatus] = useState('idle');
    const [products, setProducts] = useState<IProducts[]>();
    const [paginationMeta, setPaginationMeta] = useState<IPaginationConfig>();
    useEffect(() => {
        fetchProducts()
    }, []);
    const fetchProducts = (pageNumber:number = 1) => {
        setStatus('loading');
        fetch(`https://api.theurge.com.au/search-results?brands=Nike&page=${pageNumber}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res;
          })
          .then((res) => res.json())
          .then((data) => {
              console.log('useFectdata', data)
            setStatus('sucess');
            setProducts(data.data);
            setPaginationMeta(data.meta.meta);
          })
          .catch(() => {
            setStatus('error');
          });
          return products
    }
    return {
      status,
      products,
      paginationMeta,
      fetchProducts
    };
}