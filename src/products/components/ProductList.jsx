import PropTypes from 'prop-types';
import { ProductItem } from './ProductItem';
import styles from './ProductList.module.css';

export const ProductList = ({ products }) => {
  return (
    <main className={styles.main}>
      <ul className={styles.main__grid}>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
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
