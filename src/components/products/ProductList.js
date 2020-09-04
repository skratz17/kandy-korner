import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductProvider';
import { Product } from './Product';

export const ProductList = props => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
    document.title = 'Kandy Korner | Products';
  }, []);

  return (
    <div className="productsContainer">
      <h2 className="sectionHeader productsHeader">Products</h2>
      <section className="list products">
        { products.map(p => <Product key={p.id} product={p} />) }
      </section>
    </div>
  );
};