import PropTypes from 'prop-types';
import { AddToCartIcon } from './icons/AddToCartIcon';
import styles from './ProductItem.module.css';

export const ProductItem = ({ title, price, img }) => {
  return (
    <li className={styles.item}>
      <img src={img} alt={title} className={styles.item__img} />

      <div className={styles.item__container}>
        <p className={styles.item__title}>{title}</p>
        <h3 className={styles.item__price}>US${price}</h3>
        <button className={styles.item__btn}>
          <AddToCartIcon></AddToCartIcon>
        </button>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
