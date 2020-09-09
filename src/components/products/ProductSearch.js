import React, { useContext, useEffect } from 'react';

import { ProductContext } from './ProductProvider';

export const ProductSearch = props => {
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  useEffect(() => {
    return () => setSearchTerm('');
  }, []);

  return (
    <div className="productSearchContainer">
      <input type="text" 
        className="productSearch"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};