import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterProducts.module.css';

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
    <section className={styles.container}>
      <div className={styles.container__filter}>
        <label htmlFor="price">Minimum Price</label>
        <input
          onChange={onChangeRange}
          type="range"
          id="price"
          min="0"
          max="1500"
          className={styles.range}
        />
        <span>US${minPrice}</span>
      </div>

      <div className={styles.container__filter}>
        <label htmlFor="category">Category</label>
        <select onChange={onChangeCategory} id="category" className={styles.select}>
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
