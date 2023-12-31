import PropTypes from 'prop-types';
import styles from './CartItem.module.css';
import { useCart } from '../hook/useCart';

export const CartItem = ({ product }) => {
  const { addToCart, decreaseQuantity } = useCart();

  const onAddToCart = () => {
    if (product.quantity < 5) addToCart(product);
  };

  const onDecreaseQuantity = () => {
    decreaseQuantity(product);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__img}>
        <img src={product.img} alt={product.title} className={styles.img} />
      </div>

      <div className={styles.item__container}>
        <p className={styles.item__title}>{product.title}</p>
        <h3 className={styles.item__price}>US${product.price}</h3>

        <div className={styles.quantity}>
          <p className={styles.quantity__text}>quantity: {product.quantity}</p>
          <button onClick={onDecreaseQuantity} className={styles.quantity__btn}>
            -
          </button>
          <button onClick={onAddToCart} className={styles.quantity__btn}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};
