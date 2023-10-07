import { useState } from 'react';

import { CartIcon } from '../../products/components/icons/CartIcon';
import styles from './Navbar.module.css';
import { Cart } from '../../products/components/Cart';

export const Navbar = () => {
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <h1 className={styles.nav__heading}>ShoppingCart</h1>

        <div onClick={() => setDisplayCart(!displayCart)} className={styles.icon}>
          <CartIcon></CartIcon>
        </div>
      </div>

      {displayCart ? <Cart></Cart> : null}
    </div>
  );
};
