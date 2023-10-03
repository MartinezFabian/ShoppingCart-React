import { useState } from 'react';
import { CartIcon } from '../../products/components/icons/CartIcon';
import { ClearCartIcon } from '../../products/components/icons/ClearCartIcon';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [displayCart, setDisplayCart] = useState(true);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <h1 className={styles.nav__heading}>ShoppingCart</h1>

        <div onClick={() => setDisplayCart(!displayCart)} className={styles.icon}>
          <CartIcon></CartIcon>
        </div>
      </div>

      {displayCart ? (
        <aside className={styles.cart}>
          <ul></ul>

          <button className={styles.cart__btn}>
            <ClearCartIcon />
          </button>
        </aside>
      ) : null}
    </div>
  );
};
