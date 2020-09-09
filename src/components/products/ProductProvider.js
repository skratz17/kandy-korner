import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [ products, setProducts ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  const getProducts = () => {
    return fetch('http://localhost:8088/products?_expand=productType')
      .then(res => res.json())
      .then(setProducts);
  };

  const getProductById = id => {
    return fetch(`http://localhost:8088/products/${id}?_expand=productType`)
      .then(res => res.json());
  };

  const addProduct = product => {
    return fetch('http://localhost:8088/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(getProducts);
  };

  return (
    <ProductContext.Provider value={{
      products, getProducts, getProductById, addProduct, searchTerm, setSearchTerm
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};