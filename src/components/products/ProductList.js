import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from './ProductProvider';
import { Product } from './Product';

export const ProductList = props => {
  const { products, getProducts, searchTerm } = useContext(ProductContext);

  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() => {
    getProducts();
    document.title = 'Kandy Korner | Products';
  }, []);

  useEffect(() => {
    if(searchTerm === '') {
      setFilteredProducts(products);
    }
    else {
      const _filteredProducts = products.filter(p => p.name.toUpperCase().includes(searchTerm.toUpperCase()));
      setFilteredProducts(_filteredProducts);
    }
  }, [ products, searchTerm ]);

  return (
    <div className="productsContainer">
      <h2 className="sectionHeader productsHeader">Products</h2>
      <section className="list products">
        { filteredProducts.map(p => <Product key={p.id} product={p} />) }
      </section>
    </div>
  );
};