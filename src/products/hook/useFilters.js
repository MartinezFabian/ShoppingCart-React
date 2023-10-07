import { useContext } from 'react';
import { FiltersContext } from '../context/FiltersContext';

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products
      .filter((product) => filters.category === 'all' || product.category === filters.category)
      .filter((product) => product.price >= filters.minPrice);
  };

  return {
    filters,
    setFilters,
    filterProducts,
  };
};
