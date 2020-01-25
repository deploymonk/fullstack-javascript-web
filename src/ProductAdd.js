import React, { useState } from 'react';
import { withRouter } from 'react-router';

import { URL_API } from './config'

const ProductAdd = ({ history }) => {
  const [product, setProduct] = useState({ name: '', price: '' });

  console.log(history)

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch (URL_API + '/products', {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(product)
      });
      const result = await response.json();

      if(result && result._id) {
        history.push('/product/list')
      }
    } catch (error) {

    }
  }

  const onChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value});
  }

  return (
    <div>
      <h1>Product Add</h1>

      <form onSubmit={onSubmit}>
        <p>
          Name:
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={onChange}
            required
            autoFocus
          />
        </p>

        <p>
          Price:
          <input
            type='number'
            name='price'
            value={product.price}
            onChange={onChange}
            required
          />
        </p>

        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default withRouter(ProductAdd);