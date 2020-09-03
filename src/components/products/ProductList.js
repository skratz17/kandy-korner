import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductProvider';
import { Product } from './Product';

export const ProductList = props => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="list products">
      { products.map(p => <Product key={p.id} product={p} />) }
    </section>
  );
};