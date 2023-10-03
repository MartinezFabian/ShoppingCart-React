import PropTypes from 'prop-types';
import { AddToCartIcon } from './icons/AddToCartIcon';

export const ProductItem = ({ title, price, img }) => {
  return (
    <li>
      <img src={img} alt={title} />

      <div>
        <p>{title}</p>
        <h3>US${price}</h3>
        <button>
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
