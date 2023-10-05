import { useEffect, useState } from 'react';
import { fetchAllProducts } from './products/api/fetchAllProducts';
import { ProductList } from './products/components/ProductList';
import { Navbar } from './ui/components/Navbar';
import { FilterProducts } from './products/components/FilterProducts';
import { useFilters } from './products/hook/useFilters';

export const App = () => {
  const [products, setProducts] = useState([]);
  const { filterProducts, setFilters } = useFilters();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetchAllProducts();

    setProducts(data);
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
