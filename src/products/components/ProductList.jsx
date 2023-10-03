import PropTypes from 'prop-types';
import { ProductItem } from './ProductItem';

export const ProductList = ({ products }) => {
  return (
    <main>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
            ></ProductItem>
          );
        })}
      </ul>
    </main>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
