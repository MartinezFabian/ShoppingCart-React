import PropTypes from 'prop-types';
import { AddToCartIcon } from './icons/AddToCartIcon';
import styles from './ProductItem.module.css';
import { useCart } from '../hook/useCart';
import { RemoveFromCartIcon } from './icons/RemoveFromCartIcon';

export const ProductItem = ({ id, title, price, img }) => {
  const { cartContents, addToCart, removeFromCart } = useCart();

  console.log(cartContents);

  const isProductInCart = cartContents.some((product) => product.id === id);

  return (
    <li className={styles.item}>
      <img src={img} alt={title} className={styles.item__img} />

      <div className={styles.item__container}>
        <p className={styles.item__title}>{title}</p>
        <h3 className={styles.item__price}>US${price}</h3>
        <button
          onClick={
            isProductInCart ? () => removeFromCart(id) : () => addToCart({ id, title, price, img })
          }
          className={
            isProductInCart
              ? `${styles['item__btn']} ${styles['item__btn--remove']}`
              : styles.item__btn
          }
        >
          {isProductInCart ? (
            <RemoveFromCartIcon></RemoveFromCartIcon>
          ) : (
            <AddToCartIcon></AddToCartIcon>
          )}
        </button>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
