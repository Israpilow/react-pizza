import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickActive }) => {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickActive(null)}>
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => onClickActive(index)}
              className={activeCategory === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickActive: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: 0,
  items: [],
};

export default Categories;
