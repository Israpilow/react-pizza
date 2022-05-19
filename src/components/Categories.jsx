import React from 'react';

const Categories = React.memo(({ items, onActiveItem }) => {
  const [categoriesActive, setCategoriesActive] = React.useState(null);

  const onCategoriesClick = (index) => {
    setCategoriesActive(index);
    onActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onCategoriesClick(null)}
          className={categoriesActive === null ? 'active' : ''}>
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => onCategoriesClick(index)}
              className={categoriesActive === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
