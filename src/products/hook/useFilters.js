import { useState } from 'react';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products
      .filter((product) => filters.category === 'all' || product.category === filters.category)
      .filter((product) => product.price >= filters.minPrice);
  };

  return {
    filterProducts,
    setFilters,
  };
};
