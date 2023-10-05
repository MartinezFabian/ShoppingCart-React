import { useEffect, useState } from 'react';
import { fetchAllProducts } from './products/api/fetchAllProducts';
import { ProductList } from './products/components/ProductList';
import { Navbar } from './ui/components/Navbar';
import { FilterProducts } from './products/components/FilterProducts';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const getAllProducts = async () => {
    const data = await fetchAllProducts();

    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const filterProducts = (products) => {
    return products
      .filter((product) => filters.category === 'all' || product.category === filters.category)
      .filter((product) => product.price >= filters.minPrice);
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <header>
        <Navbar></Navbar>
        <FilterProducts setFilters={setFilters}></FilterProducts>
      </header>

      <ProductList products={filteredProducts}></ProductList>
    </>
  );
};
