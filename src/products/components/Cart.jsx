import { ClearCartIcon } from '../../products/components/icons/ClearCartIcon';
import styles from './Cart.module.css';

export const Cart = () => {
  return (
    <aside className={styles.cart}>
      <ul></ul>

      <button className={styles.cart__btn}>
        <ClearCartIcon />
      </button>
    </aside>
  );
};
