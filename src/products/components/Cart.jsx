import { ClearCartIcon } from '../../products/components/icons/ClearCartIcon';
import { useCart } from '../hook/useCart';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cartContents } = useCart();

  return (
    <aside className={styles.cart}>
      <ul>
        {cartContents.map((product) => {
          return <CartItem key={product.id} product={product}></CartItem>;
        })}
      </ul>

      <button className={styles.cart__btn}>
        <ClearCartIcon />
      </button>
    </aside>
  );
};
