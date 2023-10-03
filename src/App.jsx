import { useEffect, useState } from 'react';
import { Navbar } from './ui/components/Navbar';
import { fetchAllProducts } from './products/api/fetchAllProducts';
import { ProductList } from './products/components/ProductList';

export const App = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await fetchAllProducts();

    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <ProductList products={products}></ProductList>
    </>
  );
};
