import React, { useState, useEffect } from 'react';

import { URL_API } from './config'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    try {
      const response = await fetch(URL_API + '/products');
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Product List</h1>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {
          products.map(product =>
            <tr key={product._id}>
              <td>{ product.name }</td>
              <td>{ product.price }</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;