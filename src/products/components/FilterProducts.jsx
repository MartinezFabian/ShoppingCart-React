import { useState } from 'react';
import PropTypes from 'prop-types';

export const FilterProducts = ({ setFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const onChangeRange = (e) => {
    const minPrice = e.target.value;

    setMinPrice(minPrice);

    setFilters((prevState) => {
      return { ...prevState, minPrice: minPrice };
    });
  };

  const onChangeCategory = (e) => {
    console.log(e.target.value);
    setFilters((prevState) => {
      return { ...prevState, category: e.target.value };
    });
  };

  return (
    <section>
      <div>
        <label htmlFor="price">Minimum Price</label>
        <input onChange={onChangeRange} type="range" id="price" min="0" max="1500" />
        <span>US${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select onChange={onChangeCategory} id="category">
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  );
};

FilterProducts.propTypes = {
  setFilters: PropTypes.func.isRequired,
};
