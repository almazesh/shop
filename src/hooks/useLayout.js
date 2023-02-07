


import React from 'react'
import { getProducts } from '../api/api';

export default function useLayout() {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const request = getProducts();

    request
      .then(res => {
        setProduct(res.data);
      })
  }, [])

  return {
    product
  }
}
