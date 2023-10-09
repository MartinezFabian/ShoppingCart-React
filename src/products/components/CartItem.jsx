import PropTypes from 'prop-types';

export const CartItem = ({ product }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.title} />
      </div>

      <div>
        <p>{product.title}</p>
        <h3>{product.price}</h3>

        <div>
          <p>quantity: {product.quantity}</p>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};
