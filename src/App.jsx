import { useEffect, useState } from 'react';
import { fetchAllProducts } from './products/api/fetchAllProducts';
import { ProductList } from './products/components/ProductList';
import { Navbar } from './ui/components/Navbar';
import { FilterProducts } from './products/components/FilterProducts';
import { useFilters } from './products/hook/useFilters';
import { CartProvider } from './products/context/CartContext';

export const App = () => {
  const [products, setProducts] = useState([]);
  const { filterProducts } = useFilters();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetchAllProducts();

    setProducts(data);
  };

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <header>
        <Navbar></Navbar>
        <FilterProducts></FilterProducts>
      </header>

      <ProductList products={filteredProducts}></ProductList>
    </CartProvider>
  );
};
