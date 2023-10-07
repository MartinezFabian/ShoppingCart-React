import { useId } from 'react';

import styles from './FilterProducts.module.css';
import { useFilters } from '../hook/useFilters';

export const FilterProducts = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const onChangeRange = (e) => {
    const minPrice = e.target.value;

    setFilters((prevState) => {
      return { ...prevState, minPrice: minPrice };
    });
  };

  const onChangeCategory = (e) => {
    setFilters((prevState) => {
      return { ...prevState, category: e.target.value };
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__filter}>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          onChange={onChangeRange}
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1500"
          value={filters.minPrice}
          className={styles.range}
        />
        <span>US${filters.minPrice}</span>
      </div>

      <div className={styles.container__filter}>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={onChangeCategory} id={categoryFilterId} className={styles.select}>
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
