import { ClearCartIcon } from '../../products/components/icons/ClearCartIcon';
import { useCart } from '../hook/useCart';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cartContents, clearCart } = useCart();

  const subtotal = cartContents.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );

  return (
    <aside className={styles.cart}>
      <ul className={styles.cart__list}>
        {cartContents.map((product) => {
          return <CartItem key={product.id} product={product}></CartItem>;
        })}
      </ul>

      {cartContents.length > 0 ? (
        <div className={styles.cart__subtotal}>
          <h3>Subtotal:</h3>
          <h3>US${subtotal}</h3>
        </div>
      ) : (
        <p className={styles.cart__message}>There are no products in your cart.</p>
      )}

      {cartContents.length > 0 ? (
        <button onClick={clearCart} className={styles.cart__btn}>
          <ClearCartIcon />
        </button>
      ) : null}
    </aside>
  );
};
